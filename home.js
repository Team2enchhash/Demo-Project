const menu=document.querySelector("#sidebar");
const overlay=document.querySelector(".aside-overlay");

function openmenu(){
    menu.style.left="0";
    overlay.style.display="block";
}
function closemenu(){
    menu.style.left="-100%";
    overlay.style.display="none"
}


let counters=document.querySelectorAll('.count');
let Section=document.getElementById("counter-section");


let CounterObserver= new IntersectionObserver(
    (entries,observer)=>{
        let[entry]=entries;
        if(!entry.isIntersecting)return;
            let speed=97;
            counters.forEach((counter)=>{
                function updateCounter(){
                    const targetNumber=+counter.dataset.target;
                    const initialNumber=+counter.innerText;
                    const incPerCount=targetNumber/speed;
                    if(initialNumber<targetNumber){
                        counter.innerText=Math.ceil(initialNumber+incPerCount);
                        setTimeout(updateCounter,40);
                    }
                }
                updateCounter();
            });
        
    },{
        root:null,
        threshold:0.4,
    }
);

CounterObserver.observe(Section);


// window.addEventListener('scroll',reveal);

// function reveal(){
//     var reveals=document.querySelectorAll('.reveal');

//     for(var i=0;i<reveals.length;i++){
//         var windowheight=window.innerHeight;
//         var revealtop=reveals[i].getBoundingClientRect().top;
//         var revealpoint=-20;
//         if(revealtop<windowheight-revealpoint){
//             reveals[i].classList.add('active');
//         }else{
//             reveals[i].classList.remove('active');
//         }
//     }
// }