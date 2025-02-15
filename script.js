// Smooth Scroll to Main Content
document.getElementById('scrollDownBtn').addEventListener('click', () => {
    const mainContent = document.querySelector('.main-content');
    mainContent.style.display = 'block';
    setTimeout(() => mainContent.classList.add('show'), 10); // Small delay to trigger animation
    mainContent.scrollIntoView({ behavior: 'smooth' });
  });
  
  // Array of inspirational quotes
  const quotes = [
    { text: "The best way to predict the future is to create it.", author: "Peter Drucker" },
    { text: "Believe you can and you're halfway there.", author: "Theodore Roosevelt" },
    { text: "Do what you can, with what you have, where you are.", author: "Theodore Roosevelt" },
    { text: "It always seems impossible until it's done.", author: "Nelson Mandela" },
    { text: "Success is not final, failure is not fatal: It is the courage to continue that counts.", author: "Winston Churchill" },
    { text: "The only limit to our realization of tomorrow is our doubts of today.", author: "Franklin D. Roosevelt" },
    { text: "You are never too old to set another goal or to dream a new dream.", author: "C.S. Lewis" },
    { text: "Act as if what you do makes a difference. It does.", author: "William James" },
    { text: "The future belongs to those who believe in the beauty of their dreams.", author: "Eleanor Roosevelt" },
    { text: "Keep your face always toward the sunshine—and shadows will fall behind you.", author: "Walt Whitman" },
  ];
  
  let currentQuoteIndex = 0; // Track the current quote index
  
  // Function to update the quote
  function updateQuote() {
    const quoteText = document.getElementById('quoteText');
    const quoteAuthor = document.getElementById('quoteAuthor');
    quoteText.textContent = `"${quotes[currentQuoteIndex].text}"`;
    quoteAuthor.textContent = `– ${quotes[currentQuoteIndex].author}`;
  }
  
  // Event listener for the "Next Quote" button
  document.getElementById('nextQuoteBtn').addEventListener('click', () => {
    currentQuoteIndex = (currentQuoteIndex + 1) % quotes.length; // Move to the next quote (loop back to 0 if at the end)
    updateQuote();
  });
  
  // Initialize the first quote
  updateQuote();
  
// Add flip animation to cards and play background music
document.querySelectorAll('.love-note-card').forEach(card => {
    card.addEventListener('click', () => {
      // Close all other cards
      document.querySelectorAll('.love-note-card').forEach(otherCard => {
        if (otherCard !== card && otherCard.classList.contains('flipped')) {
          otherCard.classList.remove('flipped');
        }
      });
  
      // Toggle the clicked card
      card.classList.toggle('flipped');
  
      // Play background music
      const backgroundMusic = document.getElementById('backgroundMusic');
      if (backgroundMusic.paused) {
        backgroundMusic.play();
      }
    });
  });  
  