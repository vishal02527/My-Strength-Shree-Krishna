let isHindi = false;
const button = document.getElementById("translateBtn");
function toggleLanguage() {
  const contentEnglish = document.getElementById("content-english");
  const contentHindi = document.getElementById("content-hindi");

  if (contentEnglish && contentHindi) {
    if (contentEnglish.style.display === "block") {
      contentEnglish.style.display = "none";
      contentHindi.style.display = "block";
      button.textContent = "Read in English";
    } else {
      contentEnglish.style.display = "block";
      contentHindi.style.display = "none";
      button.textContent = "हिंदी में पढ़ें";
    }
    isHindi = !isHindi;
  } else {
    console.error("Content elements not found");
  }
}

const krishnaImage = document.getElementById("krishnaImage");
const imagePaths = [
  "./images/krishna-home-image.jpg",
  "./images/krishna-img2.jpg",
  "./images/krishna-img3.jpg",
  "./images/krishna-img4.jpg",
];
let currentImageIndex = 0;

// Function to fade out the current image and change to the next image
function fadeOutAndChangeImage() {
  if (krishnaImage) {
    krishnaImage.classList.add("fade");
    setTimeout(() => {
      currentImageIndex = (currentImageIndex + 1) % imagePaths.length;
      krishnaImage.src = imagePaths[currentImageIndex];
      krishnaImage.classList.remove("fade");
    }, 2000);
  } else {
    console.error("krishnaImage element not found");
  }
}

// Preload and start the fading effect after the first image is loaded
if (krishnaImage) {
  krishnaImage.onload = () => {
    setTimeout(() => {
      fadeOutAndChangeImage();
    }, 5000);
  };
}

function openLightbox(imagePath) {
  const lightboxImg = document.getElementById("lightbox-img");
  const lightbox = document.querySelector(".lightbox");

  if (lightboxImg && lightbox) {
    lightboxImg.src = imagePath;
    lightbox.style.display = "flex";
  } else {
    console.error("Lightbox elements not found");
  }
}

function closeLightbox() {
  const lightbox = document.querySelector(".lightbox");

  if (lightbox) {
    lightbox.style.display = "none";
  } else {
    console.error("Lightbox element not found");
  }
}

function showLoginForm() {
  // Check if the user has signed up
  const hasSignedUp = localStorage.getItem("username") !== null;

  if (hasSignedUp) {
    // Check if the user is already logged in
    const isLoggedIn = localStorage.getItem("isLoggedIn") === "true";

    if (isLoggedIn) {
      // Redirect to the discussion forum if already logged in
      window.location.href = "./discussion-forum.html";
    } else {
      // Redirect to the login page if signed up but not logged in
      window.location.href = "./login.html";
    }
  } else {
    // Redirect to the signup page if not signed up
    window.location.href = "./signup.html";
  }
}

// Search functionality
document.addEventListener("DOMContentLoaded", function () {
  console.log("DOM fully loaded and parsed");

  const searchForm = document.querySelector(".searchForm");
  if (searchForm) {
    const searchInput = searchForm.querySelector(".searchInput");
    if (searchInput) {
      searchForm.addEventListener("submit", function (e) {
        e.preventDefault();
        const searchTerm = searchInput.value.trim().toLowerCase();
        console.log("Search term:", searchTerm);

        if (searchTerm) {
          const searchMappings = {
            home: "./index.html",
            gallery: "./gallery.html",
            scripture: "./scriptures.html",
            scriptures: "./scriptures.html",
            "devotional resources": "./devotional-resources.html",
            "bhagwad geeta": "./devotional-resources.html",
            "geeta pdf": "./devotional-resources.html",
            geeta: "./devotional-resources.html",
            pdf: "./devotional-resources.html",
            "radha chalisa": "./devotional-resources.html",
            "krishna padawali": "./devotional-resources.html",
            padawali: "./devotional-resources.html",
            radha: "./devotional-resources.html",
            "discussion forum": "./discussion-forum.html",
            discussion: "./discussion-forum.html",
            forum: "./discussion-forum.html",
            "stories of devotees": "./stories-of-devotees.html",
            stories: "./stories-of-devotees.html",
            "devotees stories": "./stories-of-devotees.html",
            "meera bai": "./meera-bai.html",
            meerabai: "./meera-bai.html",
            meera: "./meera-bai.html",
            "karmaiti bai": "./karmati-bai.html",
            karmaitibai: "./karmati-bai.html",
            karmaiti: "./karmati-bai.html",
            narsi: "./narsi.html",
            surdas: "./surdas.html",
            "dhanna jatt": "./dhanna-jatt.html",
            dhanna: "./dhanna-jatt.html",
            "taj biwi": "./taj-biwi.html",
            tajbiwi: "./taj-biwi.html",
            "taj begum": "./taj-biwi.html",
            raidas: "./raidas.html",
            ravidas: "./raidas.html",
            audio: "./morning-mantra-audio.html",
            "morning mantra audio": "./morning-mantra-audio.html",
            "mantra audio": "./morning-mantra-audio.html",
            "krishna arti": "./morning-mantra-audio.html",
            "krishna ashtakam": "./morning-mantra-audio.html",
            "krishna chants": "./morning-mantra-audio.html",
            "morning bliss": "./morning-mantra-audio.html",
            mantra: "./morning-mantra-audio.html",
            "divine wallpapers": "./divine-wallpapers.html",
            "divine wallpaper": "./divine-wallpapers.html",
            "beautiful wallpapers": "./divine-wallpapers.html",
            "krishna wallpapers": "./divine-wallpapers.html",
            "krishna wallpaper": "./divine-wallpapers.html",
            wallpapers: "./divine-wallpapers.html",
            wallpaper: "./divine-wallpapers.html",
          };

          // Check if a direct match exists
          if (searchMappings.hasOwnProperty(searchTerm)) {
            window.location.href = searchMappings[searchTerm];
          } else {
            // If no direct match is found, check for partial matches
            for (const key in searchMappings) {
              if (searchTerm.includes(key)) {
                window.location.href = searchMappings[key];
                return;
              }
            }

            // If no matching page is found, you can display an error message or handle it in your own way
            alert("No matching page found for your search.");
          }
        }
      });
    } else {
      console.error("Search input not found");
    }
  } else {
    console.error("Search form not found");
  }
});

// script for faq section

document.querySelectorAll(".faq-question").forEach((button) => {
  button.addEventListener("click", () => {
    const answer = button.nextElementSibling;
    const isExpanded = button.getAttribute("aria-expanded") === "true";

    // Collapse any open answer
    document
      .querySelectorAll(".faq-answer")
      .forEach((a) => (a.style.display = "none"));
    document
      .querySelectorAll(".faq-question")
      .forEach((q) => q.setAttribute("aria-expanded", "false"));

    // Toggle the clicked answer
    if (!isExpanded) {
      answer.style.display = "block";
      button.setAttribute("aria-expanded", "true");
    }
  });
});

let speechSynthesisUtterance;
let isPaused = false;

// Read aloud feature
function readAloud() {
  // Get all text content from the body or a specific section
  const contentDiv = document.querySelector('.content');
  const textToRead = contentDiv.innerText;

  // Check for speech synthesis support
  if ('speechSynthesis' in window) {
      // Stop any ongoing speech before creating a new utterance
      window.speechSynthesis.cancel(); 

      speechSynthesisUtterance = new SpeechSynthesisUtterance(textToRead);
      speechSynthesisUtterance.lang = 'en-US'; // Change this to the desired language code (e.g., 'hi-IN' for Hindi)

      // Optional: Set additional properties
      speechSynthesisUtterance.rate = 1; // Speed of speech (default is 1)
      speechSynthesisUtterance.pitch = 1; // Pitch of the voice (default is 1)

      // Speak the text
      window.speechSynthesis.speak(speechSynthesisUtterance);
  } else {
      alert("Sorry, your browser does not support speech synthesis.");
  }
}


// Function to pause the speech
function pauseSpeech(){
  if(window.speechSynthesis.speaking && !isPaused){
    window.speechSynthesis.pause();
    isPaused = true;
  }
}

// Function to resume the speech
function resumeSpeech() {
  if (isPaused) {
      window.speechSynthesis.resume();
      isPaused = false;
  }
}
// Function to stop the speech
function stopSpeech() {
  window.speechSynthesis.cancel();
  isPaused = false; // Reset pause state
}

// Readaloud in scripture page
function readAloudScripture() {
  // Get all text content from the body or a specific section
  const contentDiv = document.getElementById('content-english')
  const textToRead = contentDiv.innerText;

  // Check for speech synthesis support
  if ('speechSynthesis' in window) {
      // Stop any ongoing speech before creating a new utterance
      window.speechSynthesis.cancel(); 

      speechSynthesisUtterance = new SpeechSynthesisUtterance(textToRead);
      speechSynthesisUtterance.lang = 'en-US'; // Change this to the desired language code (e.g., 'hi-IN' for Hindi)

      // Optional: Set additional properties
      speechSynthesisUtterance.rate = 1; // Speed of speech (default is 1)
      speechSynthesisUtterance.pitch = 1; // Pitch of the voice (default is 1)

      // Speak the text
      window.speechSynthesis.speak(speechSynthesisUtterance);
  } else {
      alert("Sorry, your browser does not support speech synthesis.");
  }
}

// For avatars section readAloud
function readAloadAvatar() {
  // Get all text content from the body or a specific section
  const contentDiv = document.querySelector('.container')
  const textToRead = contentDiv.innerText;

  // Check for speech synthesis support
  if ('speechSynthesis' in window) {
      // Stop any ongoing speech before creating a new utterance
      window.speechSynthesis.cancel(); 

      speechSynthesisUtterance = new SpeechSynthesisUtterance(textToRead);
      speechSynthesisUtterance.lang = 'en-US'; // Change this to the desired language code (e.g., 'hi-IN' for Hindi)

      // Optional: Set additional properties
      speechSynthesisUtterance.rate = 1; // Speed of speech (default is 1)
      speechSynthesisUtterance.pitch = 1; // Pitch of the voice (default is 1)

      // Speak the text
      window.speechSynthesis.speak(speechSynthesisUtterance);
  } else {
      alert("Sorry, your browser does not support speech synthesis.");
  }
}