







function GenerateNew(){

    var quotes=[
       `“Be yourself; everyone else is already taken.“
        ― Oscar Wilde`,

       `“So many books, so little time.”
       ― Frank Zappa`,

       `“A room without books is like a body without a soul.”

       ― Marcus Tullius Cicero`,

       `“You only live once, but if you do it right, once is enough.”

       ― Mae West`,

       `“Be the change that you wish to see in the world.”

       ― Mahatma Gandhi`,

       `“If you tell the truth, you don't have to remember anything.”

       ― Mark Twain`,

       `“A friend is someone who knows all about you and still loves you.”

       ― Elbert Hubbard`,

       `“To live is the rarest thing in the world. Most people exist, that is all.”

       ― Oscar Wilde`,
       
       `“Live as if you were to die tomorrow. Learn as if you were to live forever.”

       ― Mahatma Gandhi`,

       `“Without music, life would be a mistake.”
       
       ― Friedrich Nietzsche, Twilight of the Idols`


    ];

    var quoteElement = document.getElementById("quote");
      var generateBtn = document.getElementById("button");
  
    function getRandomQuote() {
        const randomIndex = Math.floor(Math.random() * quotes.length);
        return quotes[randomIndex];
    }

    generateBtn.addEventListener("click", function () {
        const quote = getRandomQuote();
        quoteElement.textContent = quote;
      });



   
}

document.getElementById("button").addEventListener("click", GenerateNew);
