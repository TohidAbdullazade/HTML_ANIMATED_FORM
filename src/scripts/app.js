let h1 = document.querySelector(".text");
h1.innerHTML = h1.textContent.replace(/\S/g, "<span>$&</span>"); 

// ===> WAVE EFFECT <===
const wave = document.querySelectorAll("span");
for (let i = 0; i < wave.length; i++) {
  wave[i].style.animationDelay = i * 0.09 + "s";
}

