// Get the heading element
const scrollToTop = document.getElementById('scrollToTop');

// Add a click event listener
scrollToTop.addEventListener('click', function(event) {
    // Prevent default behavior of anchor tag
    event.preventDefault();
    
    // Scroll smoothly to the top of the page
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
});

