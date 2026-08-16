// 1. Live Incremental Love Counter
let loveSeconds = 8640000; // قيمة أولية حماسية
const counterElement = document.getElementById('liveCounter');

function updateLoveCounter() {
    loveSeconds += 1;
    counterElement.innerText = loveSeconds.toLocaleString('ar-EG');
}
setInterval(updateLoveCounter, 1000);
updateLoveCounter();

// 2. Floating Background Hearts Generator
const heartsContainer = document.getElementById('heartsContainer');
const heartSymbols = ['❤️', '💖', '✨', '🌸', '💕'];

function createFloatingHeart() {
    const heart = document.createElement('div');
    heart.classList.add('heart');
    heart.innerText = heartSymbols[Math.floor(Math.random() * heartSymbols.length)];
    heart.style.left = Math.random() * 100 + 'vw';
    heart.style.animationDuration = (Math.random() * 3 + 4) + 's';
    heart.style.fontSize = (Math.random() * 15 + 15) + 'px';
    
    heartsContainer.appendChild(heart);
    
    setTimeout(() => {
        heart.remove();
    }, 7000);
}

setInterval(createFloatingHeart, 600);

// 3. Interactive Button with Confetti
const forgiveBtn = document.getElementById('forgiveBtn');
const secretMessage = document.getElementById('secretMessage');

forgiveBtn.addEventListener('click', () => {
    // Fire Confetti Burst
    confetti({
        particleCount: 150,
        spread: 80,
        origin: { y: 0.6 },
        colors: ['#fb7185', '#f43f5e', '#ffffff', '#ffd1d9']
    });

    // Show Secret Message
    secretMessage.classList.remove('hidden');
    forgiveBtn.style.display = 'none';
});