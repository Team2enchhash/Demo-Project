
document.getElementById("generateRandomButton").addEventListener("click", function() {

  let randomOTP = Math.floor(100000 + Math.random() * 900000);
      
  localStorage.setItem("OTP", randomOTP);
  alert("Your OTP Number: " + randomOTP);
  window.location.href = "Car_Insurance_Otp_page.html";
});



// Extra 

const menu=document.querySelector("#sidebar");
function openmenu(){
    menu.style.left="0";
}
function closemenu(){
    menu.style.left="-100%";
}

