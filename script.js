// Handle blowing out the candles and navigate to the next page after a delay
function blowCandles() {
    const flames = document.querySelectorAll('.flame');
    const candles = document.querySelectorAll('.candle');
    const button = document.querySelector('button');
    
    // Hide the flames and candles
    flames.forEach(flame => flame.classList.add('off')); // Hide flames
    candles.forEach(candle => candle.style.opacity = 0); // Hide candles
    
    // Update the button text
    button.innerText = "Candles Blown Out! 🎉";
    
    // Wait for 2 seconds before navigating to the next page
    setTimeout(() => {
        navigateToPage('surprise.html');
    }, 2000);  // Delay 2 seconds before navigating
}

// Balloons animation and movement (appears on the main page)
const balloons = document.querySelectorAll('.balloon');
balloons.forEach(balloon => {
    // Randomly animate balloons for a floating effect
    const randomAnimationDuration = Math.random() * 3 + 4; // Between 4 and 7 seconds
    balloon.style.animationDuration = `${randomAnimationDuration}s`;
    balloon.style.animationDelay = `${Math.random() * 2}s`; // Add some delay for a staggered effect
});

// Confetti animation (appears on the main page)
function createConfetti() {
    const confettiCount = 50;
    const container = document.querySelector('.container');
    for (let i = 0; i < confettiCount; i++) {
        const confettiPiece = document.createElement('div');
        confettiPiece.classList.add('confetti');
        confettiPiece.style.left = `${Math.random() * 100}%`;
        confettiPiece.style.animationDuration = `${Math.random() * 2 + 3}s`; // Duration between 3-5 seconds
        confettiPiece.style.animationDelay = `${Math.random() * 3}s`; // Staggered fall effect
        container.appendChild(confettiPiece);
    }
}

// Floating wishes animation (appears on the main page)
function createFloatingWishes() {
    const wishes = ["Happy Birthday, Sneha!", "Wishing you all the best!", "Have an amazing year ahead!"];
    const container = document.querySelector('.container');
    
    wishes.forEach(wish => {
        const wishElement = document.createElement('div');
        wishElement.classList.add('wish');
        wishElement.innerText = wish;
        wishElement.style.left = `${Math.random() * 80 + 10}%`; // Random horizontal position
        container.appendChild(wishElement);
        
        // Add animation to each wish
        wishElement.style.animationDuration = `${Math.random() * 4 + 3}s`; // Random duration for floating effect
        wishElement.style.animationDelay = `${Math.random() * 3}s`; // Staggered start
    });
}

// Add event listener for when the page loads (create confetti and floating wishes)
window.onload = function() {
    createConfetti();
    createFloatingWishes();
};

// Handle button navigation
function navigateToPage(page) {
    window.location.href = page;
}
