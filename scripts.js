const textElement = document.getElementById('changing-text');
const keywords = ['web designer', 'software developer', 'student', 'tech-enthusiast'];
let keywordIndex = 0;
let charIndex = 0;
const typingSpeed = 150;
const erasingSpeed = 100; 
const delayBetweenWords = 2000; 

function type() {
    if (charIndex < keywords[keywordIndex].length) {
        textElement.textContent += keywords[keywordIndex].charAt(charIndex);
        charIndex++;
        setTimeout(type, typingSpeed);
    } else {
        setTimeout(erase, delayBetweenWords);
    }
}

function erase() {
    if (charIndex > 0) {
        textElement.textContent = keywords[keywordIndex].substring(0, charIndex - 1);
        charIndex--;
        setTimeout(erase, erasingSpeed);
    } else {
        keywordIndex = (keywordIndex + 1) % keywords.length;
        setTimeout(type, typingSpeed + 500); 
    }
}


document.addEventListener("DOMContentLoaded", function() { 
    if(keywords.length) setTimeout(type, delayBetweenWords + 250);
});


// intersection observer

const reveals = document.querySelectorAll(".reveal");

const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
        if(entry.isIntersecting){
            entry.target.classList.remove("hidden");
            entry.target.classList.add("visible");
            observer.unobserve(entry.target);
        }
        // else{
        //     entry.target.classList.remove("visible");
        //     entry.target.classList.add("hidden");
        // }
        
    })
}, {threshold: 0.6});

reveals.forEach(reveal =>{
    observer.observe(reveal);
})
