const spans = document.querySelectorAll("span")
const contents = document.querySelectorAll(".content")
const firstTop = contents[0].offsettop
const secondTop = contents[1].offsetLeft
const thirdTop = contents[2].offsetRight

spans[0].onclick = function(){
    window.scroll({top:firstTop, behavior: 'smooth'})
}
spans[1].onclick = function(){
    window.scroll({top:secondTop, behavior: 'smooth'})
}
spans[2].onclick = function(){
    window.scroll({top:thirdTop, behavior: 'smooth'})
}