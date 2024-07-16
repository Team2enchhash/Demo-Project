const inputs = document.querySelectorAll(".input-field");
const toggle_btn = document.querySelectorAll(".toggle");
const main = document.querySelector("main");
const bullets = document.querySelectorAll(".bullets span");
const images = document.querySelectorAll(".image");

inputs.forEach((inp) => {
  inp.addEventListener("focus", () => {
    inp.classList.add("active");
  });
  inp.addEventListener("blur", () => {
    if (inp.value != "") return;
    inp.classList.remove("active");
  });
});

toggle_btn.forEach((btn) => {
  btn.addEventListener("click", () => {
    main.classList.toggle("sign-up-mode");
  });
});

function moveSlider() {
  let index = this.dataset.value;

  let currentImage = document.querySelector(`.img-${index}`);
  images.forEach((img) => img.classList.remove("show"));
  currentImage.classList.add("show");

  const textSlider = document.querySelector(".text-group");
  textSlider.style.transform = `translateY(${-(index - 1) * 2.2}rem)`;

  bullets.forEach((bull) => bull.classList.remove("active"));
  this.classList.add("active");
}

bullets.forEach((bullet) => {
  bullet.addEventListener("click", moveSlider);
});

document.getElementById('signin-form').addEventListener('submit', function(event) {
  event.preventDefault();
  
  var username = document.getElementById('username').value;
  var password = document.getElementById('password').value;

  // Example validation (you should implement server-side validation)
  if (username === 'admin' && password === '12345') {
      // Redirect to admin dashboard or do something
      alert('Login successful!');
      window.location.href = 'dashboard.html';
  }
  else if (username === 'user' && password === '12345') {
    window.location.href = 'index.html';
  } 
  else {
      document.getElementById('error-message').textContent = 'Invalid username or password.';
  }
});
