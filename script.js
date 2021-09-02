const colorToggleBtn = document.querySelector(".btn-toggle");
const prefersDarkScheme = window.matchMedia("(prefers-color-scheme: dark)");

const currentTheme = localStorage.getItem("theme");
if (currentTheme == "dark") {
  document.body.classList.toggle("dark-theme");
} else if (currentTheme == "light") {
  document.body.classList.toggle("light-theme");
}

colorToggleBtn.addEventListener("click", function () {
  if (prefersDarkScheme.matches) {
    document.body.classList.toggle("light-theme");
    var theme = document.body.classList.contains("light-theme")
      ? "light"
      : "dark";
  } else {
    document.body.classList.toggle("dark-theme");
    var theme = document.body.classList.contains("dark-theme")
      ? "dark"
      : "light";
  }
  localStorage.setItem("theme", theme);
});

// var checkScrollBars = function(){
//     var b = document.body;
//     var normalw = 0;
//     var scrollw = 0;
//     if(b.scrollHeight >b.offsetHeight){
//         normalw = window.innerWidth;
//         scrollw = normalw - b.width();
//         document.body.css({marginRight:'-'+scrollw+'px'});
//     }
// }

// document.addEventListener("DOMContentLoaded", () => {
//     checkScrollBars();
//     document.getElementById("showbar").click(function(){
//         document.body.css('overflow-y', 'auto');
//         console.log("hi");
//         checkScrollBars();
//     })
//     document.getElementById("hidebar").click(function(){
//         document.body.css('overflow-y', 'hidden');
//         checkScrollBars();
//     })
// });

var sb = document.getElementsByTagName('article').scrollWidth;
var cb = document.getElementsByTagName('article').clientWidth;
var ob = document.getElementsByTagName('article').offsetWidth;
console.log(sb, cb, ob)
console.log(scrollbarWidth = offsetWidth - clientWidth - getComputedStyle().borderLeftWidth - getComputedStyle().borderRightWidth)
