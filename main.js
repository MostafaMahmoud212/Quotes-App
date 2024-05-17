var Quotes = [
  {
    author: "Oscar Wilde",
    quote: "Be yourself; everyone else is already taken.",
    img: `./imgs/Oscar Wilde.webp`
  },
  {
    author: "Albert Einstein",
    quote: "Two things are infinite: the universe and human stupidity; and I'm not sure about the universe.",
    img: `./imgs/Albert Einstein.jfif`
  },
  {
    author: "Frank Zappa",
    quote: "So many books, so little time.",
    img: `./imgs/Frank Zappa.jfif`
  },
  {
    author: "Bernard M. Baruch",
    quote: "Be who you are and say what you feel, because those who mind don't matter, and those who matter don't mind.",
    img: `./imgs/Bernard M. Baruch.jpg`
  },
  {
    author: "Dr. Seuss",
    quote: "You know you're in love when you can't fall asleep because reality is finally better than your dreams.",
    img: `./imgs/Dr. Seuss.jfif`
  },
  {
    author: "Robert Frost",
    quote: "In three words I can sum up everything I've learned about life: it goes on.",
    img: `./imgs/Robert Frost.jfif`
  },
  {
    author: "Mark Twain",
    quote: "If you tell the truth, you don't have to remember anything.",
    img: `./imgs/Mark Twain.webp`
  },
  {
    author: "Oscar Wilde",
    quote: "Always forgive your enemies; nothing annoys them so much.",
    img: `./imgs/Oscar Wilde.webp`
  },
  {
    author: "Andre Gide",
    quote: "It is better to be hated for what you are than to be loved for what you are not.",
    img: `./imgs/Andre Gide, Autumn Leaves.jfif`
  },
];

var previousRandomNumber = "";

function moveQuote() {
  var randomNumber;

  do {
    randomNumber = Math.floor(Math.random() * Quotes.length);
  } while (randomNumber === previousRandomNumber);

  previousRandomNumber = randomNumber;

  var author = Quotes[randomNumber].author;
  var quote = Quotes[randomNumber]["quote"];
  var imge = Quotes[randomNumber].img;

  document.getElementById("contaner").innerHTML = `
    <p class="quote">"${quote}"</p>
    <div class= "grop">
    <img src="${imge}" alt="author wrater">
    <p class="author">Author is: ${author}</p>
    </div>
    `;
}

