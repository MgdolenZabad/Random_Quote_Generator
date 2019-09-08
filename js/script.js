/******************************************
Treehouse FSJS Techdegree:
project 1 - A Random Quote Generator
******************************************/


var lastRandomQuote = null;
var quote;
var source;
var year;
var citation;
var categorization;


var quotes = [
  {
    quote : "Life is too important to be taken seriously.",
    source: "Oscar Wilde",
    year: "1883",
    citation: "Wilde's first play titled 'Vera' "
  },
  {
    quote : "It always seems impossible until it’s done.",
    source: "Nelson Mandela",
    year: "2001",
    citation: "Solar Sailor"
  },
  {
    quote : "Keep your eyes on the stars and your feet on the ground.",
    source: "Theodore Roosevelt",
    year: "1900-1904",
    citation: "speech in Chicago,IL"
  },
  {
    quote : "It’s better to be a lion for a day than a sheep all your life.",
    source: "Elizabeth Kenny",
    categorization : "life-lesson"

  },
  {
    quote : "Be happy for this moment. This moment is your life. ",
    source: "Omar Khayyam",
    categorization : "self-care"

  },

];



function getRandomQuote() {
  var randomNumber= Math.floor(Math.random() * quotes.length);
  return quotes[randomNumber];
}




function printQuote() {


  var randomQuote = getRandomQuote();


  //while loop to check if the random number same as the previous it will change it 
  while (lastRandomQuote === randomQuote){
    randomQuote = getRandomQuote();
  }
  lastRandomQuote = randomQuote;


  quote = randomQuote.quote;
  source = randomQuote.source;
  year = randomQuote.year;
  citation = randomQuote.citation;
  categorization = randomQuote.categorization;

  var html = '';
  html += '<p class="quote">' + quote + '</p>';
  html += '<p class="source">' + source ;

  if (citation) {
    html += '<span class="citation">' + citation + '</span>';
  }
  if (year){
    html +=  '<span class="year">' + year + '</span>';
  }

  if (categorization) {
    html +=  ' ' + '<span class = "categorization" >' + categorization + '</span>';
  }

  html += '</p>';

  var outPutQuote = document.getElementById('quote-box');
  outPutQuote.innerHTML = html;

  document.body.style.backgroundColor = getRandomColor();

  return html;

}

function getRandomColor() {
  var letters = '0123456789ABCDEF';
  var color = '#';
  for (var i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)];
  }
  return color;

}

setInterval(printQuote, 20000 );




// what shoild happen when button clicked (change the quote and the background color )


document.getElementById('loadQuote').addEventListener("click", printQuote, false);

