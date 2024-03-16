
  // Import the functions you need from the SDKs you need
  import { initializeApp } from "https://www.gstatic.com/firebasejs/10.9.0/firebase-app.js";
  // TODO: Add SDKs for Firebase products that you want to use
  // https://firebase.google.com/docs/web/setup#available-libraries

  // Your web app's Firebase configuration
  const firebaseConfig = {
    apiKey: "AIzaSyBiKJVJOs2hCfrJNu5wC7cU2MbQdqGyyEY",
    authDomain: "rent-a-tech.firebaseapp.com",
    projectId: "rent-a-tech",
    storageBucket: "rent-a-tech.appspot.com",
    messagingSenderId: "31951692998",
    appId: "1:31951692998:web:c802e7ea2f31e0cc7463c7"
  };

  // Initialize Firebase
  const app = initializeApp(firebaseConfig);




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

