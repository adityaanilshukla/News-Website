let addedDataHeadlines = [];
let addedDataFinance = [];
let addedDataSports = [];

if (document.URL.includes("headlines.html")) {
  //loop over all articles in headlines and add article information to news block
  for (let i = 0; i < headlines.length; i++) {
    addedDataHeadlines += `
        <div class="newsBlock">
          <h3>${headlines[i].title}</h3>
          <img class="NewsImage" src="${headlines[i].image[0]}" alt="${headlines[i].image[0]}">
          <p>${headlines[i].description}</P>
          <button class="hover_button" onclick="addArticle(${headlines[i].articleNumber})">Read More</button>
        </div>
  `;
  }
  //change innerhtml of headlines finance and sports to include slideshow displaying article information
  document.getElementById("headlines").innerHTML = addedDataHeadlines;
}

if (document.URL.includes("finance.html")) {
  //loop over all articles in finance and add article information to news block
  for (let i = 0; i < finance.length; i++) {
    addedDataFinance += `
        <div class="newsBlock">
          <h3>${finance[i].title}</h3>
          <img class="NewsImage" src="${finance[i].image[0]}" alt="${finance[i].image[0]}">
          <p>${finance[i].description}</P>
          <button class="hover_button" onclick="addArticle(${finance[i].articleNumber})">Read More</button>
        </div>
  `;
  }
  //change innerhtml of headlines finance and sports to include slideshow displaying article information
  document.getElementById("finance").innerHTML = addedDataFinance;
}

if (document.URL.includes("sports.html")) {
  //loop over all articles in finance and add article information to news block
  for (let i = 0; i < sports.length; i++) {
    addedDataSports += `
        <div class="newsBlock">
          <h3>${sports[i].title}</h3>
          <img class="NewsImage" src="${sports[i].image[0]}" alt="${sports[i].image[0]}">
          <p>${sports[i].description}</P>
          <button class="hover_button" onclick="addArticle(${sports[i].articleNumber})">Read More</button>
        </div>
  `;
  }
  //change innerhtml of headlines finance and sports to include slideshow displaying article information
  document.getElementById("sports").innerHTML = addedDataSports;
}
