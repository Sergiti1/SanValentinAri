document.getElementById("yesBtn").addEventListener("click", function() {
    document.getElementById("responseText").innerText = "💜 ¡Sabía que dirías que sí! 💜";
});

document.getElementById("noBtn").addEventListener("mouseover", function() {
    let x = Math.random() * window.innerWidth - 100;
    let y = Math.random() * window.innerHeight - 50;
    this.style.position = "absolute";
    this.style.left = `${x}px`;
    this.style.top = `${y}px`;
});
