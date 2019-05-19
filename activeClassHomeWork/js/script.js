var li = document.querySelectorAll("#tabs ul li");
var contains = document.querySelectorAll(".contains");

console.log(contains);
for (var i = 0; i < li.length; i++) {
    li[i].addEventListener('click', function (e) {
        for (let j = 0; j < li.length; j++) {
            li[j].classList.remove('active_menu');
        }
        
        e.target.classList.add('active_menu')
        console.log(("#" + e.target.className.split(" ")[0]))
        let parId = ("#" + e.target.className.split(" ")[0]);
        let parEl = document.querySelector(parId);
        for (let d = 0; d < contains.length; d++) {
            contains[d].classList.remove('active_contain');
        }
        parEl.classList.add("active_contain");
    })


    // li[i].classList
}