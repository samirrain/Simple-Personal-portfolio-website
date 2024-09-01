
const hamburger = document.querySelector(".hamburger")
const closenav = document.querySelector(".close-nav")
const sidebar = document.querySelector(".navmenu")
// console.log(hamburger,closenav,sidebar)

hamburger.addEventListener("click",()=>{
    sidebar.style.right = "0%"
    
    
})
closenav.addEventListener("click",()=>{
    sidebar.style.right = "-100%"
})