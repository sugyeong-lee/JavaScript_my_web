const numbersDiv = document.querySelector(".numbers")
const Button1 = document.querySelector("#5000")
const Button2 = document.querySelector("#10000")
const resetButton = document.querySelector("#reset")

const lottoNumbers = []
const colors = ["tomato", "teal", "orange", "purple", "blue"]

function paintNumber(number){
    const eachNumDiv = document.createElement("div")
    let colorIndex = Math.floor(number/10)
    eachNumDiv.classList.add('eachnum')
    eachNumDiv.style.backgroundColor = colors[colorIndex]
    eachNumDiv.textContent = number
    numbersDiv.appendChild(eachNumDiv)
}

Button1.addEventListener("click", function(){
    while(lottoNumbers.length < 6){
        let ran = Math.floor(Math.random()*45)+1
        if(lottoNumbers.indexOf(ran)===-1){
            lottoNumbers.push(ran)
            paintNumber(ran)
        }
    }
})

resetButton.addEventListener("click", function(){
    lottoNumbers.splice(0,6)
    numbersDiv.innerHTML = ""
})