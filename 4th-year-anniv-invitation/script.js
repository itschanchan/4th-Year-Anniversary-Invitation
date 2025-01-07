// Get elements
const openPopupButton = document.getElementById('openPopup');
const closePopupButton = document.getElementById('closePopup');
const popupForm = document.getElementById('popupForm');

// Show the popup
openPopupButton.addEventListener('click', () => {
  popupForm.classList.add('show'); // Add the show class for fade-in
  popupForm.style.display = 'flex'; // Ensure it's visible
});

// Close the popup
closePopupButton.addEventListener('click', () => {
  popupForm.classList.remove('show'); // Remove the show class for fade-out
  setTimeout(() => {
    popupForm.style.display = 'none'; // Hide after fade-out completes
  }, 300); // Match the CSS transition duration (0.3s)
});

// Close popup when clicking outside of it
window.addEventListener('click', (event) => {
  if (event.target === popupForm) {
    popupForm.classList.remove('show'); // Remove the show class for fade-out
    setTimeout(() => {
      popupForm.style.display = 'none'; // Hide after fade-out completes
    }, 300); // Match the CSS transition duration (0.3s)
  }
});

// Function to hide the preloader and show the main content after 3 seconds
window.addEventListener('load', function() {
  // Hide preloader
  const preloader = document.getElementById('preloader');
  const home = document.querySelector('.home');
  
  // Simulate preloader finish (could also be tied to actual loading logic)
  setTimeout(function() {
    preloader.style.display = 'none'; // Hide preloader
    home.style.visibility = 'visible'; // Make home content visible
    home.style.opacity = '1'; // Fade in the home content
  }, 3000); // Adjust time based on preloader duration
});

// Show the popup
function showPopup() {
  const popup = document.querySelector('.popup');
  popup.classList.add('show');
}

// Hide the popup
function hidePopup() {
  const popup = document.querySelector('.popup');
  popup.classList.remove('show');
}

// Example usage: Add event listeners for showing and hiding
document.querySelector('#show-popup-button').addEventListener('click', showPopup);
document.querySelector('.close').addEventListener('click', hidePopup);

