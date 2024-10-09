let isHindi = false;
const button = document.getElementById("translateBtn");

function toggleLanguage() {
  const contentEnglish = document.getElementById("content-english");
  const contentHindi = document.getElementById("content-hindi");

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
  krishnaImage.classList.add("fade");
  setTimeout(() => {
    currentImageIndex = (currentImageIndex + 1) % imagePaths.length;
    krishnaImage.src = imagePaths[currentImageIndex];
    krishnaImage.classList.remove("fade");
  }, 2000);
}

// Preload and start the fading effect after the first image is loaded
krishnaImage.onload = () => {
  setTimeout(() => {
    fadeOutAndChangeImage();
  }, 5000); 
};

function openLightbox(imagePath) {
  document.getElementById("lightbox-img").src = imagePath;
  document.querySelector(".lightbox").style.display = "flex";
}

function closeLightbox() {
  document.querySelector(".lightbox").style.display = "none";
}

function showLoginForm() {
 
    window.location.href = "./signup.html";
  }

  


   

//search functionality
document.addEventListener("DOMContentLoaded", function () {
  const searchForm = document.querySelector(".searchForm");
  const searchInput = searchForm.querySelector(".searchInput");

  searchForm.addEventListener("submit", function (e) {
    e.preventDefault();
    const searchTerm = searchInput.value.trim().toLowerCase();

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

