// var link = document.querySelector("#google");
// var button = document.querySelector("#change");

// var href = link.getAttribute("class");
// console.log(href)

// button.addEventListener("click", function () {
    // link.setAttribute("class","social_media")
    // console.log(link.hasAttribute("class"))
    // link.removeAttribute("class")
    // link.innerText = "<b>facebook</b>";
    // link.innerHTML="<b>facebook</b>"
    // var classes=link.classList
    // link.classList.toggle("social_media")
//     var x = link.classList.contains("social_media")
//     console.log(x)
// })


//tabs

var allLi = document.querySelectorAll("#tabs ul li");

for (var i = 0; i < allLi.length; i++) {
    allLi[i].addEventListener("click",function(){
        console.log(this)
    })
}