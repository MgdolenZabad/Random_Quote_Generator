/******************************************
Treehouse FSJS Techdegree:
project 1 - A Random Quote Generator
******************************************/



var lastShownIndex = null;
var quote;
var source;
var year;
var citation;



var qoutes = [
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

  },
  {
    quote : "Be happy for this moment. This moment is your life. ",
    source: "Omar Khayyam",

  },

];



function getRandomQuote() {
  var randomNumber= Math.floor(Math.random() * qoutes.length);
  return randomNumber;
}




function printQuote() {
  var randomQuoteIndex = getRandomQuote();
  while (lastShownIndex === randomQuoteIndex){
    randomQuoteIndex = getRandomQuote();
  }
  lastShownIndex = randomQuoteIndex;


  quote = qoutes[randomQuoteIndex].quote;
  source = qoutes[randomQuoteIndex].source;
  year = qoutes[randomQuoteIndex].year;
  citation = qoutes[randomQuoteIndex].citation;

  var html = '';
  html += '<p class="quote">' + quote + '</p>';
  html += '<p class="source">' + source ;

  if (citation) {
    html += '<span class="citation">' + citation + '</span>';
  }
  if (year){
    html += '<span class="year">' + year + '</span>';
  }

  html += '</p>';

  var outPutQuote = document.getElementById('quote-box');
  outPutQuote.innerHTML = html;

console.log(html);
  return html;
}



document.getElementById('loadQuote').addEventListener("click", printQuote, false);
