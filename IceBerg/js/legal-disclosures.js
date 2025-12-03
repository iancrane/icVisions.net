    const detailsElement = document.getElementById('legal-disclosures');
    const targetContent = document.getElementById('legal-disclosures-list');

    // Add an event listener for the 'toggle' event
    detailsElement.addEventListener('toggle', () => {
        // Check if the details element is open
        if (detailsElement.open) {
            // Use requestAnimationFrame to ensure the browser has rendered the
            // expanded content before attempting to scroll
            requestAnimationFrame(() => {
                // Scroll the target content into view with smooth behavior
                targetContent.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start' // Aligns the top of the element with the top of the viewport
                });
            });
        }
    });