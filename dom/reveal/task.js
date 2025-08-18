const revealElements = document.querySelectorAll('.reveal');

function checkVisibility() {
    revealElements.forEach(element => {
        const windowHeight = window.innerHeight;
        const elementRect = element.getBoundingClientRect();
        
        if (elementRect.top < windowHeight && elementRect.bottom > 0) {
            element.classList.add('reveal_active');
        }
    });
}

window.addEventListener('scroll', checkVisibility);
checkVisibility(); 