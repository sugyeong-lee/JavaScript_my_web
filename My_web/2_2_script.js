const numbersDiv = document.querySelector(".numbers")
const drawButton = document.querySelector("#draw")
const resetButton = document.querySelector("#reset")
const numbersDiv2 = document.querySelector(".numbers2")

const lottoNumbers = []
const lottoNumbers2 = []
const colors = ["tomato", "teal", "orange", "purple", "blue"]

function paintNumber(number){
    const eachNumDiv = document.createElement("div")
    let colorIndex = Math.floor(number/10)
    eachNumDiv.classList.add('eachnum')
    eachNumDiv.style.backgroundColor = colors[colorIndex]
    eachNumDiv.textContent = number
    numbersDiv.appendChild(eachNumDiv)
}

function paintNumber2(number){
    const eachNumDiv2 = document.createElement("div")
    let colorIndex = Math.floor(number/10)
    eachNumDiv2.classList.add('eachnum')
    eachNumDiv2.style.backgroundColor = colors[colorIndex]
    eachNumDiv2.textContent = number
    numbersDiv2.appendChild(eachNumDiv2)
}

drawButton.addEventListener("click", function(){
    while(lottoNumbers.length < 6){
        let ran = Math.floor(Math.random()*45)+1
        if(lottoNumbers.indexOf(ran)===-1){
            lottoNumbers.push(ran)
            paintNumber(ran)
        }
    }
    while(lottoNumbers2.length < 1){
        let ran2 = Math.floor(Math.random()*45)+1
        if(lottoNumbers2.indexOf(ran2)===-1){
            lottoNumbers2.push(ran2)
            paintNumber2(ran2)
        }
    }
    var audio = new Audio("드럼.mp3");
    audio.currentTime = 1;
    audio.play();

})

resetButton.addEventListener("click", function(){
    lottoNumbers.splice(0,6)
    lottoNumbers2.splice(0,6)
    numbersDiv.innerHTML = ""
    numbersDiv2.innerHTML = ""
})