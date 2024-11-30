// List of motivational quotes
const quotes = [
    "Believe in yourself and all that you are.",
    "The only limit to our realization of tomorrow is our doubts of today.",
    "You are braver than you believe, stronger than you seem, and smarter than you think.",
    "Do not wait; the time will never be 'just right.' Start where you stand.",
    "The best way to get started is to quit talking and begin doing.",
    "Don’t let yesterday take up too much of today.",
    "Success is not final, failure is not fatal: It is the courage to continue that counts.",
    "Keep going. Everything you need will come to you at the perfect time.",
    "Dream big and dare to fail.",
    "Act as if what you do makes a difference. It does."
  ];
  
  // Get the elements
  const quoteDisplay = document.getElementById("quoteDisplay");
  const newQuoteBtn = document.getElementById("newQuoteBtn");
  
  // Function to display a new random quote with fade-in effect
  function displayRandomQuote() {
    const randomIndex = Math.floor(Math.random() * quotes.length);
    quoteDisplay.textContent = quotes[randomIndex];
    
    // Reset fade-in animation
    quoteDisplay.style.opacity = "0";
    setTimeout(() => quoteDisplay.style.opacity = "1", 100);
  }
  
  // Initial display of a quote
  displayRandomQuote();
  
  // Event listener for the "New Quote" button
  newQuoteBtn.addEventListener("click", displayRandomQuote);
  