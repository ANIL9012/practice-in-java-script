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

window.onload = updateQuote;

newQuoteBtn.addEventListener("click", updateQuote);
