document.addEventListener("DOMContentLoaded", function() {
    // Select all the recipe cards
    const recipeCards = document.querySelectorAll(".recipe-card");

    // Add event listener to each card
    recipeCards.forEach(card => {
        // When the card is clicked
        card.addEventListener("click", () => {
            // Get the name of the prasadam from the h3 tag
            const recipeName = card.querySelector("h3").innerText;

            // Custom message for each prasadam recipe
            let message = `You've selected the recipe for ${recipeName}.\nThis delicious dish is offered to Lord Krishna!`;

            // Display the message in a popup
            alert(message);
        });

        // Add a hover effect with JS for additional interaction
        card.addEventListener("mouseover", () => {
            card.style.transform = "scale(1.1)";
            card.style.boxShadow = "0px 12px 24px rgba(0, 0, 0, 0.2)";
        });

        card.addEventListener("mouseout", () => {
            card.style.transform = "scale(1)";
            card.style.boxShadow = "0px 6px 12px rgba(0, 0, 0, 0.1)";
        });
    });
});

function goHome() {
    // Implement the home functionality (e.g., redirecting to home page)
    window.location.href = "index.html"; // Replace with your home page URL
}
