 // Create and configure the image element
        const image = document.createElement('img');
        image.src = 'https://images.pexels.com/photos/970517/pexels-photo-970517.jpeg';
        image.style.position = 'fixed';
        image.style.top = '0';
        image.style.left = '0';
        image.style.width = '100%';
        image.style.height = '100%';
        image.style.zIndex = '1000';
        image.style.display = 'none'; // Initially hidden
        image.style.opacity = '1'; // Fully visible

        // Add the image to the body
        document.body.appendChild(image);

        // Function to make the image blink and hide
        function blinkAndHideImage() {
            image.style.display = 'block'; // Show the image
            let elapsedTime = 0;
            const totalDuration = Math.random() * 10000; // Random duration under 10 seconds
            let isVisible = true;

            const blinkInterval = setInterval(() => {
                elapsedTime += 200; // 200ms intervals
                isVisible = !isVisible; // Toggle visibility
                image.style.opacity = isVisible ? '1' : '0';

                if (elapsedTime >= totalDuration) {
                    clearInterval(blinkInterval); // Stop blinking
                    image.style.display = 'none'; // Hide the image
                }
            }, 200); // Adjust the blink interval as needed
        }

        // Trigger the blink effect after the page loads
        window.onload = blinkAndHideImage;
