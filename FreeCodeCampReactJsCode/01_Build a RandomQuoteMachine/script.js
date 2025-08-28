// !! IMPORTANT README:

// You may add additional external JS and CSS as needed to complete the project, however the current external resource MUST remain in place for the tests to work. BABEL must also be left in place.

/***********
INSTRUCTIONS:
  - Select the project you would 
    like to complete from the dropdown 
    menu.
  - Click the "RUN TESTS" button to
    run the tests against the blank 
    pen.
  - Click the "TESTS" button to see 
    the individual test cases. 
    (should all be failing at first)
  - Start coding! As you fulfill each
    test case, you will see them go   
    from red to green.
  - As you start to build out your 
    project, when tests are failing, 
    you should get helpful errors 
    along the way!
    ************/

// PLEASE NOTE: Adding global style rules using the * selector, or by adding rules to body {..} or html {..}, or to all elements within body or html, i.e. h1 {..}, has the potential to pollute the test suite's CSS. Try adding: * { color: red }, for a quick example!

// Once you have read the above messages, you can delete all comments.
const quotes = [
  {
    text: "Be yourself; everyone else is already taken.",
    author: "Oscar Wilde",
  },
  {
    text: "Two things are infinite: the universe and human stupidity; and I'm not sure about the universe.",
    author: "Albert Einstein",
  },
  { text: "So many books, so little time.", author: "Frank Zappa" },
  {
    text: "A room without books is like a body without a soul.",
    author: "Marcus Tullius Cicero",
  },
  {
    text: "In three words I can sum up everything I've learned about life: it goes on.",
    author: "Robert Frost",
  },
];

const textEl = document.getElementById("text");
const authorEl = document.getElementById("author");
const newQuoteBtn = document.getElementById("new-quote");
const tweetQuote = document.getElementById("tweet-quote");

function getRandomQuote() {
  const randomIndex = Math.floor(Math.random() * quotes.length);
  return quotes[randomIndex];
}

function updateQuote() {
  const quote = getRandomQuote();
  textEl.textContent = quote.text;
  authorEl.textContent = `- ${quote.author}`;

  const tweetText = encodeURIComponent(`"${quote.text}" - ${quote.author}`);
  tweetQuote.href = `https://twitter.com/intent/tweet?text=${tweetText}`;
}

// Initial quote on page load
window.onload = updateQuote;

// Update quote on button click
newQuoteBtn.addEventListener("click", updateQuote);
