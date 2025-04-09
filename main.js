const text = "Your Personalized Roadmap Starts Here";
let index = 0;

function typeEffect() {
    const typewriter = document.getElementById("typewriter");
    if (index < text.length) {
        typewriter.innerHTML += text.charAt(index);
        index++;
        setTimeout(typeEffect, 50); 
    } else {
        typewriter.style.borderRight = "none"; 
    }
}

document.addEventListener("DOMContentLoaded", typeEffect);

