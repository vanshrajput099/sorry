const noButton = document.getElementById("noButton");

function forgiveMe() {
    alert("Yay! I knew you'd forgive me ❤️");
}

function moveNo() {
    const x = Math.random() * (window.innerWidth - noButton.clientWidth);
    const y = Math.random() * (window.innerHeight - noButton.clientHeight);
    
    noButton.style.left = `${x}px`;
    noButton.style.top = `${y}px`;
}

