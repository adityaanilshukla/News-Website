// declaring empty arrays to populate slideshow in index.html
let addedDataHeadlines = [];
let addedDataFinance = [];
let addedDataSports = [];

// loop over arrays in data.js and append article information to above arrays
function addDataToPage() {
  //loop over all articles in headlines and add article information to addedDataHeadlines array
  for (let i = 0; i < headlines.length; i++) {
    addedDataHeadlines += `
      <div class = "headlines mySlides fade">
        <div class="newsBlock">
          <h3>${headlines[i].title}</h3>
          <img class="NewsImage" src="${headlines[i].image[0]}" alt="${headlines[i].image[0]}">
          <p>${headlines[i].description}</P>
          <button class="hover_button" onclick="addArticle(${headlines[i].articleNumber})">Read More</button>
        </div>
      </div>
  `;
  }

  //loop over all articles in headlines and add article information to addedDataFinance array
  for (let i = 0; i < finance.length; i++) {
    addedDataFinance += `
      <div class = "finance mySlides fade">
        <div class="newsBlock">
          <h3>${finance[i].title}</h3>
          <img class="NewsImage" src="${finance[i].image[0]}" alt="${finance[i].image[0]}">
          <p>${finance[i].description}</P>
          <button class="hover_button" onclick="addArticle(${finance[i].articleNumber})">Read More</button>
        </div>
      </div>
  `;
  }

  //loop over all articles in headlines and add article information to addedDataSports array
  for (let i = 0; i < sports.length; i++) {
    addedDataSports += `
      <div class = "sports mySlides fade">
        <div class="newsBlock">
          <h3>${sports[i].title}</h3>
          <img class="NewsImage" src="${sports[i].image[0]}" alt="${sports[i].image[0]}">
          <p>${sports[i].description}</P>
          <button class="hover_button" onclick="addArticle(${sports[i].articleNumber})">Read More</button>
        </div>
      </div>
    `;
  }

  //change innerhtml of headlines finance and sports ids to include slideshow displaying article information
  document.getElementById("headlines").innerHTML = addedDataHeadlines;
  document.getElementById("finance").innerHTML = addedDataFinance;
  document.getElementById("sports").innerHTML = addedDataSports;
}

//add data to page when the page loads
window.onload = addDataToPage();

////////////Slideshow Section////////////

//initialise current slide variables
var headlines_slideIndex = 1;
var finance_slideIndex = 1;
var sports_slideIndex = 1;


//display article denoted by slideindex
showSlides_headlines(headlines_slideIndex);
showSlides_finance(finance_slideIndex);
showSlides_sports(sports_slideIndex);


// increment or decrement slideindex when user clicks on dots or arrows
function plusslides_headlines(n) {
  showSlides_headlines(headlines_slideIndex += n);
}

function plusslides_finance(n) {
  showSlides_finance(finance_slideIndex += n);
}

function plusslides_sports(n) {
  showSlides_sports(sports_slideIndex += n);
}


//apply change in slideindex to currentSlide
function currentSlide_headlines(n) {
  showSlides_headlines(headlines_slideIndex = n);
}

function currentSlide_finance(n) {
  showSlides_finance(finance_slideIndex = n);
}

function currentSlide_sports(n) {
  showSlides_sports(sports_slideIndex = n);
}


// functions to change displayed slide based on slideindex
function showSlides_headlines(n) {
  var i;
  var headlines_slides = document.getElementsByClassName("headlines mySlides");
  var headlines_dots = document.getElementsByClassName("headlines dot");
  if (n > headlines_slides.length) {
    headlines_slideIndex = 1
  }
  if (n < 1) {
    headlines_slideIndex = headlines_slides.length
  }
  for (i = 0; i < headlines_slides.length; i++) {
    headlines_slides[i].style.display = "none";
  }
  for (i = 0; i < headlines_dots.length; i++) {
    headlines_dots[i].className = headlines_dots[i].className.replace(" dotActive", "");
  }
  headlines_slides[headlines_slideIndex - 1].style.display = "block";
  headlines_dots[headlines_slideIndex - 1].className += " dotActive";
}

function showSlides_finance(n) {
  var i;
  var finance_slides = document.getElementsByClassName("finance mySlides");
  var finance_dots = document.getElementsByClassName("finance dot");
  if (n > finance_slides.length) {
    finance_slideIndex = 1
  }
  if (n < 1) {
    finance_slideIndex = finance_slides.length
  }
  for (i = 0; i < finance_slides.length; i++) {
    finance_slides[i].style.display = "none";
  }
  for (i = 0; i < finance_dots.length; i++) {
    finance_dots[i].className = finance_dots[i].className.replace(" dotActive", "");
  }
  finance_slides[finance_slideIndex - 1].style.display = "block";
  finance_dots[finance_slideIndex - 1].className += " dotActive";
}

function showSlides_sports(n) {
  var i;
  var sports_slides = document.getElementsByClassName("sports mySlides");
  var sports_dots = document.getElementsByClassName("sports dot");
  if (n > sports_slides.length) {
    sports_slideIndex = 1
  }
  if (n < 1) {
    sports_slideIndex = sports_slides.length
  }
  for (i = 0; i < sports_slides.length; i++) {
    sports_slides[i].style.display = "none";
  }
  for (i = 0; i < sports_dots.length; i++) {
    sports_dots[i].className = sports_dots[i].className.replace(" dotActive", "");
  }
  sports_slides[sports_slideIndex - 1].style.display = "block";
  sports_dots[sports_slideIndex - 1].className += " dotActive";
}
