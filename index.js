document.addEventListener('DOMContentLoaded', function () {
    const imageNames = ['creative.jpg', 'interiorDesign.jpg', 'collab.jpg'];

    // Get the carousel container and image element
    const carousel = document.getElementById('carousel');
    const imageElement = document.createElement('img');
    carousel.appendChild(imageElement);

    let currentIndex = 0; 
    const totalImages = imageNames.length;

    function replaceImage() {
        // Fade out the current image
        imageElement.style.opacity = 0;

        // Wait for the fade-out to complete before replacing the image
        setTimeout(function() {
            // Replace the image source
            imageElement.src = './images/carousel/' + imageNames[currentIndex];

            // Fade the new image in
            imageElement.style.opacity = 1;

            // Update the index for the next image
            currentIndex = (currentIndex + 1) % totalImages;
        }, 2000);  // Wait for 2 seconds (duration of the fade-out)
    }

    // Load the first image initially (no fade effect)
    imageElement.src = './images/carousel/collab.jpg';

    // Ensure the first image stays for 4 seconds before transitioning
    setTimeout(function() {
        setInterval(replaceImage, 6000);  // Start transitioning after 4 seconds
    }, 2000);  // Delay the start of the interval to 4 seconds for the first image

});
