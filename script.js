const quote = document.querySelector(".quote");
const person = document.querySelector(".person");
const button = document.querySelector(".btn");
const quotes = [
  {
    quote:
      "Success is not final, failure is not fatal: It is the courage to continue that counts.",
    person: "Winston Churchill",
  },
  {
    quote: "Your time is limited, don't waste it living someone else's life.",
    person: "Steve Jobs",
  },
  {
    quote: "The only way to do great work is to love what you do.",
    person: "Steve Jobs",
  },
  {
    quote: "I have not failed. I've just found 10,000 ways that won't work.",
    person: "Thomas Edison",
  },
  {
    quote: "Be yourself; everyone else is already taken.",
    person: "Oscar Wilde",
  },
  {
    quote:
      "In the end, we will remember not the words of our enemies, but the silence of our friends.",
    person: "Martin Luther King Jr.",
  },
  {
    quote: "Do what you can, with what you have, where you are.",
    person: "Theodore Roosevelt",
  },
  {
    quote: "You miss 100% of the shots you don't take.",
    person: "Wayne Gretzky",
  },
  {
    quote: "Whether you think you can, or you think you can't – you're right.",
    person: "Henry Ford",
  },
  {
    quote: "Believe you can and you're halfway there.",
    person: "Theodore Roosevelt",
  },
  {
    quote:
      "I am not a product of my circumstances. I am a product of my decisions.",
    person: "Stephen Covey",
  },
  { quote: "Dream big and dare to fail.", person: "Norman Vaughan" },
  {
    quote: "It does not matter how slowly you go as long as you do not stop.",
    person: "Confucius",
  },
  {
    quote:
      "Success usually comes to those who are too busy to be looking for it.",
    person: "Henry David Thoreau",
  },
  {
    quote:
      "The future belongs to those who believe in the beauty of their dreams.",
    person: "Eleanor Roosevelt",
  },
  {
    quote:
      "Do not wait to strike till the iron is hot, but make it hot by striking.",
    person: "William Butler Yeats",
  },
  { quote: "The best revenge is massive success.", person: "Frank Sinatra" },
  {
    quote: "You must be the change you wish to see in the world.",
    person: "Mahatma Gandhi",
  },
  {
    quote: "It always seems impossible until it's done.",
    person: "Nelson Mandela",
  },
  {
    quote:
      "What lies behind us and what lies before us are tiny matters compared to what lies within us.",
    person: "Ralph Waldo Emerson",
  },
  {
    quote: "Opportunities don't happen. You create them.",
    person: "Chris Grosser",
  },
  {
    quote: "Don't watch the clock; do what it does. Keep going.",
    person: "Sam Levenson",
  },
  {
    quote:
      "The only limit to our realization of tomorrow is our doubts of today.",
    person: "Franklin D. Roosevelt",
  },
  {
    quote: "Start where you are. Use what you have. Do what you can.",
    person: "Arthur Ashe",
  },
  {
    quote: "Everything you’ve ever wanted is on the other side of fear.",
    person: "George Addair",
  },
  {
    quote:
      "Success is walking from failure to failure with no loss of enthusiasm.",
    person: "Winston Churchill",
  },
  {
    quote:
      "The road to success and the road to failure are almost exactly the same.",
    person: "Colin R. Davis",
  },
  {
    quote: "Don’t be afraid to give up the good to go for the great.",
    person: "John D. Rockefeller",
  },
  {
    quote:
      "The only place where success comes before work is in the dictionary.",
    person: "Vidal Sassoon",
  },
  {
    quote:
      "Success is not how high you have climbed, but how you make a positive difference to the world.",
    person: "Roy T. Bennett",
  },
  {
    quote:
      "If you are not willing to risk the usual, you will have to settle for the ordinary.",
    person: "Jim Rohn",
  },
  {
    quote: "Don't be afraid to give up the good to go for the great.",
    person: "John D. Rockefeller",
  },
  {
    quote: "I find that the harder I work, the more luck I seem to have.",
    person: "Thomas Jefferson",
  },
  {
    quote:
      "Success is not the key to happiness. Happiness is the key to success. If you love what you are doing, you will be successful.",
    person: "Albert Schweitzer",
  },
  {
    quote: "What you do today can improve all your tomorrows.",
    person: "Ralph Marston",
  },
  {
    quote: "Don't wait for the right opportunity: create it.",
    person: "George Bernard Shaw",
  },
  {
    quote:
      "The only way to achieve the impossible is to believe it is possible.",
    person: "Charles Kingsleigh",
  },
  {
    quote:
      "Hardships often prepare ordinary people for an extraordinary destiny.",
    person: "C.S. Lewis",
  },
  {
    quote: "The way to get started is to quit talking and begin doing.",
    person: "Walt Disney",
  },
  {
    quote: "Act as if what you do makes a difference. It does.",
    person: "William James",
  },
  {
    quote: "The best way to predict your future is to create it.",
    person: "Abraham Lincoln",
  },
  {
    quote: "Don't be pushed by your problems. Be led by your dreams.",
    person: "Ralph Waldo Emerson",
  },
  {
    quote:
      "Perseverance is not a long race; it's many short races one after the other.",
    person: "Walter Elliot",
  },
  {
    quote: "You only live once, but if you do it right, once is enough.",
    person: "Mae West",
  },
  {
    quote: "It is never too late to be what you might have been.",
    person: "George Eliot",
  },
  {
    quote: "The biggest risk is not taking any risk.",
    person: "Mark Zuckerberg",
  },
  {
    quote: "Success is how high you bounce when you hit bottom.",
    person: "George S. Patton",
  },
  {
    quote:
      "Keep your face always toward the sunshine—and shadows will fall behind you.",
    person: "Walt Whitman",
  },
  {
    quote:
      "You don't have to be great to start, but you have to start to be great.",
    person: "Zig Ziglar",
  },
  {
    quote: "Do one thing every day that scares you.",
    person: "Eleanor Roosevelt",
  },
];
let index;
button.addEventListener("click", () => {
    index = parseInt(Math.random() * quotes.length);
    quote.innerHTML=quotes[index].quote;
    person.innerHTML=quotes[index].person;
});
