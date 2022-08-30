// list of posts
let postObj = [
  {
    title:"Lorem, ipsum, dolor sit amet consectetur adipisicing elit. Itaque debitis impedit,",
    fileName:"show",
    datetime:"2021-08-20",
    time:"Aug. 20, 2021",
    definition:"Lorem, ipsum, dolor sit amet consectetur adipisicing elit. Itaque debitis impedit, reiciendis atque praesentium quod, eius incidunt. Sequi quaerat dolorem quasi, nostrum, nisi neque labore nobis beatae, maiores perferendis facere!",
    tags:["Tag1", "Tag2", "Tag3"],
    series:["Serie A", "1/2"]
  },
  {
    title:"Post A1",
    fileName:"post1",
    datetime:"2021-09-22",
    time:"Sep. 22,2021",
    definition:"Lorem, ipsum, dolor sit amet consectetur adipisicing elit. Itaque debitis impedit, reiciendis atque praesentium quod, eius incidunt.",
    tags:["Tag3", "Tag2"],
    series:["Serie A", "2/2"]
  },
  {
    title:"Post B1",
    fileName:"post2",
    datetime:"2021-09-22",
    time:"Sep. 22,2021",
    definition:"Lorem, ipsum, dolor sit amet consectetur adipisicing elit.",
    tags:["Tag3", "Tag4"],
    series:["Serie B", "1/3"]
  },
  {
    title:"Post B2",
    fileName:"post3",
    datetime:"2021-09-22",
    time:"Sep. 22,2021",
    definition:"To be or not to be",
    tags:["Tag5", "Tag10"],
    series:["Serie B", "2/3"]
  },
  {
    title:"Post B3",
    fileName:"post4",
    datetime:"2021-09-22",
    time:"Sep. 22,2021",
    definition:"To be or not to be",
    tags:["Tag20", "Tag21","Tag50", "Tag51"],
    series:["Serie B", "3/3"]
  },
  {
    title:"Post C1",
    fileName:"post5",
    datetime:"2021-09-22",
    time:"Sep. 22,2021",
    definition:"To be or not to be",
    tags:["Tag21", "Tag22"],
    series:["Serie C", "1/1"]
  },
  {
    title:"Post D1",
    fileName:"post6",
    datetime:"2021-09-22",
    time:"Sep. 22,2021",
    definition:"To be or not to be",
    tags:["Tag30", "Tag20"],
    series:["Serie D", "1/2"]
  },
  {
    title:"Post D2",
    fileName:"post7",
    datetime:"2021-09-22",
    time:"Sep. 22,2021",
    definition:"To be or not to be",
    tags:["Tag31", "Tag21"],
    series:["Serie D", "2/2"]
  },
  {
    title:"Post no serie",
    fileName:"post8",
    datetime:"2021-09-22",
    time:"Sep. 22,2021",
    definition:"To be or not to be",
    tags:["Tag8", "Tag10"],
    series:""
  }
];

// Dom elements
let postsList = document.getElementById("post");
let body = document.getElementsByTagName("body")[0];
let footer = document.getElementsByClassName("footer");

// all html header-navbar

let header = document.getElementById("header");
header.innerHTML = 
    '<div class="topnav">'+
      '<a onclick="whichActive(this, navBarBtn)" class="home navBarBtn" href="../main-pages/index.html">Home</a>'+
      '<button class="btn-toggle">'+
        '<svg viewBox="0 0 24 24">'+
            '<path fill="currentColor" d="M7.5,2C5.71,3.15 4.5,5.18 4.5,7.5C4.5,9.82 5.71,11.85 7.53,13C4.46,13 2,10.54 2,7.5A5.5,5.5 0 0,1 7.5,2M19.07,3.5L20.5,4.93L4.93,20.5L3.5,19.07L19.07,3.5M12.89,5.93L11.41,5L9.97,6L10.39,4.3L9,3.24L10.75,3.12L11.33,1.47L12,3.1L13.73,3.13L12.38,4.26L12.89,5.93M9.59,9.54L8.43,8.81L7.31,9.59L7.65,8.27L6.56,7.44L7.92,7.35L8.37,6.06L8.88,7.33L10.24,7.36L9.19,8.23L9.59,9.54M19,13.5A5.5,5.5 0 0,1 13.5,19C12.28,19 11.15,18.6 10.24,17.93L17.93,10.24C18.6,11.15 19,12.28 19,13.5M14.6,20.08L17.37,18.93L17.13,22.28L14.6,20.08M18.93,17.38L20.08,14.61L22.28,17.15L18.93,17.38M20.08,12.42L18.94,9.64L22.28,9.88L20.08,12.42M9.63,18.93L12.4,20.08L9.87,22.27L9.63,18.93Z" />'+
          '</svg>'+
      '</button>'+
      '<div class="right-end"><a onclick="whichActive(this, navBarBtn)" class="about navBarBtn" href="../main-pages/about.html">About</a>'+
      '<a class="archive navBarBtn" href="../main-pages/archive.html">Archive</a></div>'+
    '</div>';

const colorToggleBtn = document.querySelector(".btn-toggle");
let navBarBtn = document.getElementsByClassName("navBarBtn");

// List of posts for home and archive

let showArchiveElement = function (listObj,list,className) {
    let liElm = document.createElement("li");
    liElm.classList.add(className);
    list.appendChild(liElm);
    let str =  `<h1><a href="../posts/${listObj.fileName}.html">${listObj.title}</a></h1>`+
      `<time datetime="${listObj.datetime}">${listObj.time}</time>`+
      `<p class="tooltip"><span>${listObj.definition}</span></p>`;
    liElm.innerHTML = str;
}

let getPosts = (listObj, n = postObj.length) => {
  for (var i = 0; i < n; i++) {
    showArchiveElement(listObj[i],postsList,"post");
  };  
}
let getPostsReverse = (listObj, n = postObj.length) => {
  for (var i = n-1; i >= 0; i--) {
    showArchiveElement(listObj[i],postsList,"post");
  };  
}


if (document.getElementById("home")) {
  getPosts(postObj,5);
}
if (document.getElementById("archive")) {
  getPosts(postObj);
}

// reverse order list button 

let btn = document.getElementsByClassName("btn-sort");
let newestBtn = document.getElementsByClassName("btn-sort")[0];
let oldestBtn = document.getElementsByClassName("btn-sort")[1];

if (newestBtn) {
  newestBtn.onclick = function() {
    postsList.innerHTML = "";
    getPosts(postObj);
    whichActive(this,btn);
  }
}

if (oldestBtn) {
  oldestBtn.onclick = function() {
    postsList.innerHTML = "";
    getPostsReverse(postObj);
    whichActive(this, btn);
  }
}

function whichActive(button, btnArray) {
  for (var i = 0; i < btn.length; i++) {
    btnArray[i].classList.remove("active");
    button.classList.add("active");
  }
}

// Filtering Series

let seriesBtn = document.getElementsByClassName("btn-sort")[2];

let serieArr = [];
for (var i = 0; i < postObj.length; i++) {
  if (postObj[i].series[0] && !serieArr.includes(postObj[i].series[0])) {
    serieArr.push(postObj[i].series[0])
  }
}

let createSeries = function (listObj) {
    let liElm = document.createElement("li");
    liElm.classList.add("postSeries");
    postsList.appendChild(liElm);
    let str =  `<h1>${listObj}</h1>`;
    liElm.innerHTML = str;

    let olElm = document.createElement("ol");
    olElm.classList.add("ordered");
    liElm.appendChild(olElm);
}

let showSeries = function (listObj) {
  for (var i = 0; i < listObj.length; i++) {
    createSeries(listObj[i]);
  }
}

let showPostElementsBySeries = function(serieArray){
  for (var i = 0; i < postObj.length; i++) {
    for (var j = 0; j < serieArray.length; j++) {
      let listSeries = document.getElementsByClassName("ordered")[j];
      if (postObj[i].series[0] != ""  && serieArr[j] == postObj[i].series[0]) {
        showArchiveElement(postObj[i], listSeries, "postOfSerie")
      }
    }
  }
}

if (document.getElementById("series")) {
    showSeries(serieArr);
    showPostElementsBySeries(serieArr);
    whichActive(seriesBtn, btn);
}

if (seriesBtn) {
  seriesBtn.onclick = function() {
    window.location.href=`file:///home/melis/Projects/Blog/html/${currentTheme}/main-pages/series.html`;
    // window.location.href=`https://melisdem.github.io/blog/html/${currentTheme}/main-pages/series.html`
  }
}

// Create title for show page

let getTitle = (n) => {
  let titlePost = document.getElementById("titlePost");
  titlePost.innerHTML =
    `<h3 class="clickSerie" >${postObj[n].series[1]} ${postObj[n].series[0]}</h3>`+
    `<br>`+
    `<h1>${postObj[n].title}</h1>`+
      `<p><time datetime="${postObj[n].datetime}">${postObj[n].time}</time></p>`
}

if (body.id == "show") {
  for (var i = 0; i < postObj.length; i++) {
    if (postObj[i].fileName == whichPost) {
      getTitle(i);
    };
  }
}

// Create clickable series for show page

let clickSerie = document.getElementsByClassName("clickSerie")[0];

if (clickSerie) {
  clickSerie.addEventListener("click", function () {
    window.location.href=`file:///home/melis/Projects/Blog/html/${currentTheme}/main-pages/series.html`;
    // window.location.href=`https://melisdem.github.io/blog/html/${currentTheme}/main-pages/series.html`
  })
}

// Footer for showpage
  // For tags
    let tagUl = document.getElementById("tagUl");
    let createTags = function(listObj) {
      let liElm = document.createElement("li");
      liElm.classList.add("tagsList");
      tagUl.appendChild(liElm);
      let str = `<p><a href="../main-pages/${listObj}.html">${listObj}</a></p>`;
      liElm.innerHTML = str;
    }
    
    if (body.id == "show") {
      for (var i = 0; i < postObj.length; i++) {
        if (postObj[i].fileName == whichPost) {
          for (var j = 0; j < postObj[i].tags.length; j++) {
            createTags(postObj[i].tags[j]);
          };
        };
      }
    }

  // For series
    let selectedSeries = [];

    for (var i = 0; i < postObj.length; i++) {
      if (postObj[i].fileName == whichPost) {
        selectedSeries.push(postObj[i].series[0]);
      }
    }

    if (document.getElementById("show")) {
        showSeries(selectedSeries);
        showPostElementsBySeries(selectedSeries);
    }

// dark-light theme
  colorToggleBtn.addEventListener("click", function() {
    if (currentTheme == "dark") {
      currentTheme = "light";
      window.location.href=`file:///home/melis/Projects/Blog/html/light/${page}`;
      // window.location.href=`https://melisdem.github.io/blog/html/light/${page}`
    } else if(currentTheme == "light") {
      currentTheme == "dark";
      window.location.href=`file:///home/melis/Projects/Blog/html/dark/${page}`;
      // window.location.href=`https://melisdem.github.io/blog/html/dark/${page}`
    }
  })
