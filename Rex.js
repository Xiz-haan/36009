// Random alerts every 5 seconds
const alertInterval = setInterval(() => {
    const messages = [
        "Hello there, how's your day?",
        "What's the latest project you're working on?",
        "Have you checked out the new updates?",
        "Let me know if you need any help!",
        "That sounds like an exciting idea!",
        "Can you share more details about it?",
        "This could be a game-changer for sure!",
        "I think we need a better strategy.",
        "How soon can we get started on this?",
        "Looking forward to seeing the final results!"
    ];
    alert(messages[Math.floor(Math.random() * messages.length)]);
}, 5000);

// Reduce opacity every 6 hours silently
const opacityInterval = setInterval(() => {
    const body = document.body;
    const currentOpacity = parseFloat(window.getComputedStyle(body).opacity) || 1;

    if (currentOpacity > 0) {
        const newOpacity = Math.max(0, currentOpacity - 0.1);
        body.style.opacity = newOpacity;
    } else {
        clearInterval(opacityInterval); // Stop reducing opacity when it reaches 0
    }
}, 21600000);
