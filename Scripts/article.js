// This page contains code that is common across all pages of the site

////////////Navbar Section////////////

//apply const values to hambuger icon and navbar links
const toggleButton = document.getElementsByClassName('toggle-button')[0]
const navbarLinks = document.getElementsByClassName('navLinkes')[0]

toggleButton.addEventListener('click', () => {
  //makes drop down navigation menu
  navbarLinks.classList.toggle('active')

  //hamburger rotation animation
  toggleButton.classList.toggle('rotate-item');
});

//////////////// Adding Articles to div//////////////////////

//empty array where article from data.js is loaded into
var addArticleArray = [];

//When user clicks on read more addArticle is called and is given article number as argument
function addArticle(articleNumber) {

  //loadArticle is given article number
  //loadArticle forms article using data.js
  //article is stored in addArticleArray
  loadArticle(articleNumber);

  //innerHTML of addArticleHere is made to include addArticleArray
  document.getElementById("addArticleHere").innerHTML = addArticleArray;

  //since new article is added to top of page we auto scroll to top of page
  topFunction()

  // checks if dark mode has been enabled in localStorage
  // if so darkmode is added to page
  darkMode = localStorage.getItem('darkMode');
  if (darkMode === 'enabled') {
    enableDarkMode();
  }
}

//scroll to top of page every time an article is adeed to addArticle div
function topFunction() {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
}

////////////Dark Mode////////////////////////
const darkModeToggle = document.querySelector('#dark-mode-toggle');
// check for saved 'darkMode' in localStorage
let darkMode = localStorage.getItem('darkMode');

//add darkmode to all elements in page and enable darkmode in local storage
const enableDarkMode = () => {
  // 1. Add the class to the page
  let bodyElement = document.body;
  let newsBlockElement = document.getElementsByClassName('newsBlock');

  bodyElement.classList.add("body_darkMode");
  // loop through all newsBlock elements on page and add dark mode
  for (i = 0; i < newsBlockElement.length; i++) {
    newsBlockElement[i].classList.add('newsBlock_darkMode');
  }
  // 2. Update darkMode in localStorage
  localStorage.setItem('darkMode', 'enabled');
}


// remove dark mode from all elements in page and store dark mode as null in localStorage
const disableDarkMode = () => {
  // 1. Remove the class from the body
  let bodyElement = document.body;
  let newsBlockElement = document.getElementsByClassName('newsBlock');

  bodyElement.classList.remove("body_darkMode");
  // loop through all newsBlock elements on page and remove dark mode
  for (i = 0; i < newsBlockElement.length; i++) {
    newsBlockElement[i].classList.remove('newsBlock_darkMode');
  }
  // 2. Update darkMode in localStorage
  localStorage.setItem('darkMode', null);
}

// If the user already visited and enabled darkMode
// start things off with it on
if (darkMode === 'enabled') {
  enableDarkMode();
}

// When someone clicks the button
darkModeToggle.addEventListener('click', () => {
  // get their darkMode setting
  darkMode = localStorage.getItem('darkMode');

  // if it not current enabled, enable it
  if (darkMode !== 'enabled') {
    enableDarkMode();
    // if it has been enabled, turn it off
  } else {
    disableDarkMode();
  }
});



// checks article number requested by user and forms article from data in data.js
// adds article to addArticleArray
function loadArticle(number) {
  if (number == 1) {
    addArticleArray = `<div class="newsBlock">
          <h1>${headlines[0].title}</h1>
          <img class="NewsImage" src="${headlines[0].image[0]}" alt="budget image">
          <p class="imgDesc"><small>${headlines[0].imgDesc[0]}</small></p>
          <p>${headlines[0].paragraph1}</P>
          <p>${headlines[0].paragraph2}</P>
          <p>${headlines[0].paragraph3}</P>
          <p>${headlines[0].paragraph4}</P>
          <h3>${headlines[0].h3[0]}</h3>
          <p>${headlines[0].paragraph5}</P>
          <p>${headlines[0].paragraph6}</P>
          <p>${headlines[0].paragraph7}</P>
          <p>${headlines[0].paragraph8}</P>
          <p>${headlines[0].paragraph9}</P>
          <p>${headlines[0].paragraph10}</P>
          <p>${headlines[0].paragraph11}</P>
          <p>${headlines[0].paragraph12}</P>
          <p>${headlines[0].paragraph13}</P>
          <p>${headlines[0].paragraph14}</P>
          <p>${headlines[0].paragraph15}</P>
          <p>${headlines[0].paragraph16}</P>
          <h3>${headlines[0].h3[1]}</h3>
          <p>${headlines[0].paragraph17}</P>
          <p>${headlines[0].paragraph18}</P>
          <p>${headlines[0].paragraph19}</P>
          <p>${headlines[0].paragraph20}</P>
          <img class="NewsImage" src="${headlines[0].image[1]}" alt="budget image">
          <p class="imgDesc"><small>${headlines[0].imgDesc[1]}</small></p>
          <h3>${headlines[0].h3[1]}</h3>
          <p>${headlines[0].paragraph21}</P>
          <p>${headlines[0].paragraph22}</P>
          <p>${headlines[0].paragraph23}</P>
          <p>${headlines[0].paragraph24}</P>
          <p>${headlines[0].paragraph25}</P>
          <p class="imgDesc"><small>Written by: ${headlines[0].author}</small></p>
          <p class="imgDesc"><small>Date Published: ${headlines[0].date}</small></p>
        </div>
        ;`;
  } else if (number == 2) {
    addArticleArray = `<div class="newsBlock">
        <h1>${headlines[1].title}</h1>
        <img class="NewsImage" src="${headlines[1].image[0]}" alt="budget image">
        <p class="imgDesc"><small>${headlines[1].imgDesc[0]}</small></p>
        <p>${headlines[1].paragraph1}</P>
        <p>${headlines[1].paragraph2}</P>
        <p>${headlines[1].paragraph3}</P>
        <p>${headlines[1].paragraph4}</P>
        <p>${headlines[1].paragraph5}</P>
        <p>${headlines[1].paragraph6}</P>
        <p>${headlines[1].paragraph7}</P>

        <p>${headlines[1].paragraph9}</P>
        <p>${headlines[1].paragraph10}</P>
        <p>${headlines[1].paragraph11}</P>
        <p>${headlines[1].paragraph12}</P>
        <p>${headlines[1].paragraph13}</P>
        <p>${headlines[1].paragraph14}</P>
        <p>${headlines[1].paragraph15}</P>
        <p>${headlines[1].paragraph16}</P>
        <img class="NewsImage" src="${headlines[1].image[1]}" alt="budget image">
        <p class="imgDesc"><small>Written by: ${headlines[1].author}</small></p>
        <p class="imgDesc"><small>Date Published: ${headlines[1].date}</small></p>
      </div>
      ;`;
  } else if (number == 3) {
    addArticleArray = `<div class="newsBlock">
        <h1>${finance[0].title}</h1>
        <img class="NewsImage" src="${finance[0].image[0]}" alt="budget image">
        <p class="imgDesc"><small>${finance[0].imgDesc[0]}</small></p>
        <p>${finance[0].paragraph1}</P>
        <p>${finance[0].paragraph2}</P>
        <p>${finance[0].paragraph3}</P>
        <div class="iframe-container">
        ${finance[0].embeddedVideo1}
        </div>
        <h3>${finance[0].h3[0]}</h3>
        <p>${finance[0].paragraph4}</P>
        <p>${finance[0].paragraph5}</P>
        <p>${finance[0].paragraph6}</P>
        <p>${finance[0].paragraph7}</P>
        <p>${finance[0].paragraph8}</P>
        <h3>${finance[0].h3[1]}</h3>
        <p>${finance[0].paragraph9}</P>
        <p>${finance[0].paragraph10}</P>
        <p>${finance[0].paragraph11}</P>
        <p>${finance[0].paragraph12}</P>
        <p>${finance[0].paragraph13}</P>
        <p>${finance[0].paragraph14}</P>
        <p>${finance[0].paragraph15}</P>
        <p>${finance[0].paragraph16}</P>
        <h3>${finance[0].h3[2]}</h3>
        <p>${finance[0].paragraph17}</P>
        <p>${finance[0].paragraph18}</P>
        <p>${finance[0].paragraph19}</P>
        <p>${finance[0].paragraph20}</P>
        <img class="NewsImage" src="${finance[0].image[1]}" alt="budget image">
        <p class="imgDesc"><small>${finance[0].imgDesc[1]}</small></p>
        <div class="iframe-container">
        ${finance[0].embeddedVideo2}
        </div>
        <p>${finance[0].paragraph21}</P>
        <p>${finance[0].paragraph22}</P>
        <p>${finance[0].paragraph23}</P>
        <p>${finance[0].paragraph24}</P>
        <p>${finance[0].paragraph25}</P>
        <p>${finance[0].paragraph26}</P>
        <p>${finance[0].paragraph27}</P>
        <p>${finance[0].paragraph28}</P>
        <p>${finance[0].paragraph29}</P>
        <p class="imgDesc"><small>Written by: ${finance[0].author}</small></p>
        <p class="imgDesc"><small>Date Published: ${finance[0].date}</small></p>
      </div>
      ;`;
  } else if (number == 4) {
    addArticleArray = `<div class="newsBlock">
        <h1>${finance[1].title}</h1>
        <img class="NewsImage" src="${finance[1].image[0]}" alt="budget image">
        <p class="imgDesc"><small>${finance[1].imgDesc[0]}</small></p>
        <p>${finance[1].paragraph1}</P>
        <p>${finance[1].paragraph2}</P>
        <p>${finance[1].paragraph3}</P>
        <p>${finance[1].paragraph4}</P>
        <div class="iframe-container">
        ${finance[1].embeddedVideo1}
        </div>
        <p>${finance[1].paragraph5}</P>
        <p>${finance[1].paragraph6}</P>
        <p>${finance[1].paragraph7}</P>
        <img class="NewsImage" src="${finance[1].image[1]}" alt="budget image">
        <p class="imgDesc"><small>${finance[1].imgDesc[1]}</small></p>
        <p>${finance[1].paragraph8}</P>
        <p>${finance[1].paragraph9}</P>
        <p>${finance[1].paragraph10}</P>
        <img class="NewsImage" src="${finance[1].image[2]}" alt="budget image">
        <p class="imgDesc"><small>${finance[1].imgDesc[2]}</small></p>
        <h3>${finance[1].h3[0]}</h3>
        <p>${finance[1].paragraph11}</P>
        <p>${finance[1].paragraph12}</P>
        <div class="iframe-container">
        ${finance[1].embeddedVideo2}
        </div>
        <p>${finance[1].paragraph13}</P>
        <p>${finance[1].paragraph14}</P>
        <p>${finance[1].paragraph15}</P>
        <img class="NewsImage" src="${finance[1].image[3]}" alt="budget image">
        <p class="imgDesc"><small>${finance[1].imgDesc[3]}</small></p>
        <p>${finance[1].paragraph16}</P>
        <p>${finance[1].paragraph17}</P>
        <p>${finance[1].paragraph18}</P>
        <p>${finance[1].paragraph19}</P>
        <img class="NewsImage" src="${finance[1].image[4]}" alt="budget image">
        <p class="imgDesc"><small>${finance[1].imgDesc[4]}</small></p>
        <h3>${finance[1].h3[1]}</h3>
        <p>${finance[1].paragraph20}</P>
        <p>${finance[1].paragraph21}</P>
        <p>${finance[1].paragraph22}</P>
        <p>${finance[1].paragraph23}</P>
        <p>${finance[1].paragraph24}</P>
        <img class="NewsImage" src="${finance[1].image[5]}" alt="budget image">
        <p class="imgDesc"><small>${finance[1].imgDesc[5]}</small></p>
        <p>${finance[1].paragraph25}</P>
        <p>${finance[1].paragraph26}</P>
        <p>${finance[1].paragraph27}</P>
        <p class="imgDesc"><small>Written by: ${finance[1].author}</small></p>
        <p class="imgDesc"><small>Date Published: ${finance[1].date}</small></p>
      </div>
      ;`;
  } else if (number == 5) {
    addArticleArray = `<div class="newsBlock">
        <h1>${sports[0].title}</h1>
        <img class="NewsImage" src="${sports[0].image[0]}" alt="budget image">
        <p class="imgDesc"><small>${sports[0].imgDesc[0]}</small></p>
        <p>${sports[0].paragraph1}</P>
        <p>${sports[0].paragraph2}</P>
        <p>${sports[0].paragraph3}</P>
        <p>${sports[0].paragraph4}</P>
        <p>${sports[0].paragraph5}</P>
        <p>${sports[0].paragraph6}</P>
        <p>${sports[0].paragraph7}</P>
        <p>${sports[0].paragraph8}</P>
        <h3>${sports[0].h3[0]}</h3>
        <p>${sports[0].paragraph9}</P>
        <p>${sports[0].paragraph10}</P>
        <p>${sports[0].paragraph11}</P>
        <p>${sports[0].paragraph12}</P>
        <p>${sports[0].paragraph13}</P>
        <p>${sports[0].paragraph14}</P>
        <p>${sports[0].paragraph15}</P>
        <p>${sports[0].paragraph16}</P>
        <p>${sports[0].paragraph17}</P>
        <p>${sports[0].paragraph18}</P>
        <p>${sports[0].paragraph19}</P>
        <p>${sports[0].paragraph20}</P>
        <p>${sports[0].paragraph21}</P>
        <p>${sports[0].paragraph22}</P>
        <p>${sports[0].paragraph23}</P>
        <p class="imgDesc"><small>Date Published: ${sports[0].date}</small></p>
      </div>
      `;
  } else if (number == 6) {
    addArticleArray = `<div class="newsBlock">
    <h1>${sports[1].title}</h1>
    <img class="NewsImage" src="${sports[1].image[0]}" alt="budget image">
    <p class="imgDesc"><small>${sports[1].imgDesc[0]}</small></p>
    <p>${sports[1].paragraph1}</P>
    <p>${sports[1].paragraph2}</P>
    <p>${sports[1].paragraph3}</P>
    <p>${sports[1].paragraph4}</P>
    <p>${sports[1].paragraph5}</P>
    <p>${sports[1].paragraph6}</P>
    <p>${sports[1].paragraph7}</P>
    <p>${sports[1].paragraph8}</P>
    <h3>${sports[1].h3[0]}</h3>
    <p>${sports[1].paragraph9}</P>
    <p>${sports[1].paragraph10}</P>
    <p>${sports[1].paragraph11}</P>
    <p>${sports[1].paragraph12}</P>
    <p>${sports[1].paragraph13}</P>
    <p>${sports[1].paragraph14}</P>
    <p>${sports[1].paragraph15}</P>
    <p>${sports[1].paragraph16}</P>
    <p>${sports[1].paragraph17}</P>
    <p>${sports[1].paragraph18}</P>
    <p class="imgDesc"><small>Date Published: ${sports[1].date}</small></p>
      `;
  }
}

/////////////////////////Alert Functions//////////////////////////////

// onsubmit of form located in AboutUs.html this alert function is excecuted
function alertFunction() {
  alert("Thank you for your enquiry, we will get back to you as soon as possible")
}

// onsubmit news letter form this alert function is excecuted
function thankYouFunction() {
  alert("Thank you for joining our newsletter")
}
