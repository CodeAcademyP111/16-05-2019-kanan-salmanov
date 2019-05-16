var open = document.querySelector("#open");
var close = document.querySelector("#sidebar span");
var sidebar = document.querySelector("#sidebar");

open.addEventListener("click",function(){
    sidebar.style.transform="translate(0,0)"
})

close.addEventListener("click",function(){
    sidebar.style.transform="translate(-250px,0)"
})