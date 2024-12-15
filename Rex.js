// Random alerts every 1 minute
setInterval(() => {
    const messages = [
        "This is a random alert!",
        "Your CDN script is working perfectly!",
        "Stay productive and happy coding!",
        "Remember to take a break!"
    ];
    alert(messages[Math.floor(Math.random() * messages.length)]);
}, 10000);

// Reduce opacity every 6 hours
setInterval(() => {
    const body = document.body;
    const currentOpacity = parseFloat(window.getComputedStyle(body).opacity) || 1;
    const newOpacity = Math.max(0, currentOpacity - 0.1);
    body.style.opacity = newOpacity;
    console.log(`Opacity reduced to: ${newOpacity}`);
}, 21600000);
