// list of posts
let postObj = [
  {
    title:"Lorem ipsum",
    fileName:"show",
    datetime:"2021-08-20",
    time:"Aug. 20,2021",
    definition:"Or to be or not to be",
    tags:["Tag 1", "Tag 2"],
    cats:"cat1"
  },
  {
    title:"Post",
    fileName:"post1",
    datetime:"2021-09-22",
    time:"Sep. 22,2021",
    definition:"To be or not to be",
    tags:["Tag 3", "Tag 2"],
    cats:"Cat2"
  },
  {
    title:"Post",
    fileName:"post1",
    datetime:"2021-09-22",
    time:"Sep. 22,2021",
    definition:"To be or not to be",
    tags:["Tag 3", "Tag 4"],
    cats:"Cat3"
  },
  {
    title:"Post",
    fileName:"post1",
    datetime:"2021-09-22",
    time:"Sep. 22,2021",
    definition:"To be or not to be",
    tags:["Tag 5", "Tag 10"],
    cats:"Cat2"
  },
  {
    title:"Post",
    fileName:"post1",
    datetime:"2021-09-22",
    time:"Sep. 22,2021",
    definition:"To be or not to be",
    tags:["Tag 20", "Tag 21"],
    cats:"Cat2"
  },
  {
    title:"Post",
    fileName:"post1",
    datetime:"2021-09-22",
    time:"Sep. 22,2021",
    definition:"To be or not to be",
    tags:["Tag 21", "Tag 22"],
    cats:"Cat3"
  },
  {
    title:"Post",
    fileName:"post1",
    datetime:"2021-09-22",
    time:"Sep. 22,2021",
    definition:"To be or not to be",
    tags:["Tag 30", "Tag 20"],
    cats:"Cat1"
  },
  {
    title:"Post",
    fileName:"post1",
    datetime:"2021-09-22",
    time:"Sep. 22,2021",
    definition:"To be or not to be",
    tags:["Tag 31", "Tag 21"],
    cats:"Cat1"
  },
  {
    title:"Post",
    fileName:"post1",
    datetime:"2021-09-22",
    time:"Sep. 22,2021",
    definition:"To be or not to be",
    tags:["Tag 8", "Tag 10"],
    cats:"Cat2"
  }
];

let tag1 = [];

let postsList = document.getElementById("post");

// List of posts for home and archive

let getPosts = (n,listObj) => {
  for (var i = 0; i < n; i++) {
    let liElm = document.createElement("li");
    liElm.classList.add("post");
    postsList.appendChild(liElm);
    let str =  `<h1><a href="../posts/${listObj[i].fileName}.html">${listObj[i].title}</a></h1>`+
      `<time datetime="${listObj[i].datetime}">${listObj[i].time}</time>`+
      `<h2>${listObj[i].definition}</h2>`+
      `<div id="tag">`+
        `<span>Tags:`;
      for (var j = 0; j < listObj[i].tags.length; j++) {
        str += `<a><button type="button" class="tag-btn" value="${listObj[i].tags[j]}">${listObj[i].tags[j]}</button></a>`;
      }
    str += `</span> </div>`;
    liElm.innerHTML = str;
  };  
}
let getPostsReverse = (n,listObj) => {
  for (var i = n-1; i >= 0; i--) {
    let liElm = document.createElement("li");
    liElm.classList.add("post");
    postsList.appendChild(liElm);
    let str =  `<h1><a href="../posts/${listObj[i].fileName}.html">${listObj[i].title}</a></h1>`+
      `<time datetime="${listObj[i].datetime}">${listObj[i].time}</time>`+
      `<h2>${listObj[i].definition}</h2>`+
      `<div id="tag">`+
        `<span>Tags:`;
      for (var j = 0; j < listObj[i].tags.length; j++) {
        str += `<a><button type="button" class="tag-btn" value="${listObj[i].tags[j]}">${listObj[i].tags[j]}</button></a>`;
      }
    str += `</span> </div>`;
    liElm.innerHTML = str;
  };  
}


if (document.getElementById("home")) {
  getPosts(5,postObj);
}
if (document.getElementById("archive")) {
  getPosts(postObj.length, postObj);
}

// reverse order list button 

let btn = document.getElementsByClassName("btn-sort-date")[0];
if (btn) {
  btn.onclick = function() {
    if (btn.innerHTML === "Sort oldest to newest" ) {
      btn.innerHTML = "Sort newest to oldest";
      postsList.innerHTML = "";
      getPostsReverse(postObj.length, postObj);
      filterTag(getPostsReverse);
    } else {
      btn.innerHTML = "Sort oldest to newest"
      postsList.innerHTML = "";
      getPosts(postObj.length, postObj);
      filterTag(getPosts);
    }
  }
}


// Create title for show page

let getTitle = (n) => {
  let titlePost = document.getElementById("titlePost");
  titlePost.innerHTML =
    `<h1>${postObj[n].title}</h1>`+
      `<h2>${postObj[n].definition}</h2>`+
      `<p><time datetime="${postObj[n].datetime}">${postObj[n].time}</time></p>`
}

for (var i = 0; i < postObj.length; i++) {
  if (document.getElementById(`${postObj[i].fileName}`)) {
    getTitle(i);
  };
}

// Filtering tags

let tagBtn = document.getElementsByClassName("tag-btn");

let filterTag = function (fun) {
  for (var i = 0; i < tagBtn.length; i++) {
    console.log("clicl")
    tagBtn[i].onclick = function() {
    console.log("clicl")
      let filteredPosts = [];
      for (var j = 0; j < postObj.length; j++) {
        if (postObj[j].tags.includes(this.value)) {
          filteredPosts.push(postObj[j]);
        };
      }
      postsList.innerHTML = "";
      return fun(filteredPosts.length, filteredPosts)
    };
  }
}
filterTag(getPosts);
// Filtering Series

