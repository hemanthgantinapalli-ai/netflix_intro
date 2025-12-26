window.addEventListener('DOMContentLoaded', () => {
    const intro = document.querySelector('.intro-container');
    
    // Optional: Add the iconic "Ta-dum" sound
    // const audio = new Audio('https://www.myinstants.com/media/sounds/netflix-intro-sound-effect.mp3');
    // audio.play();

    // Remove intro from DOM after it finishes so user can interact with page
    setTimeout(() => {
        intro.style.display = 'none';
        document.body.style.overflow = 'auto';
    }, 4000); 
});