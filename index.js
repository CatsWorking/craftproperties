document.addEventListener('DOMContentLoaded', () => {
    
    // --- CONFIGURATION ---
    const imagePrefix = 'ravineview'; // The name before the number
    const imageExtension = '.png';    // Change to .jpg if your images are JPG
    const maxImages = 13;             // Total number of images you have
    const mediaFolder = 'media/';
    // ---------------------

    let currentIndex = 1;
    const imgElement = document.getElementById('current-image');
    const counterElement = document.getElementById('image-counter');
    const prevBtn = document.getElementById('prevBtn');
    const nextBtn = document.getElementById('nextBtn');

    // Function to update the image source
    function updateImage() {
        // Construct path: media/ravineview1.png
        const newSrc = `${mediaFolder}${imagePrefix}${currentIndex}${imageExtension}`;
        imgElement.src = newSrc;
        
        // Update the counter text (e.g., "1 / 13")
        counterElement.textContent = `${currentIndex} / ${maxImages}`;
    }

    // Event Listeners for buttons
    nextBtn.addEventListener('click', () => {
        if (currentIndex >= maxImages) {
            currentIndex = 1; // Loop back to start
        } else {
            currentIndex++;
        }
        updateImage();
    });

    prevBtn.addEventListener('click', () => {
        if (currentIndex <= 1) {
            currentIndex = maxImages; // Loop to end
        } else {
            currentIndex--;
        }
        updateImage();
    });

    // Initialize first image
    updateImage();
});
