let minutes = 0;
let seconds = 0;
let tenMillis = 0;
const appendTens = document.getElementById("tenMillis");
const appendSeconds = document.getElementById("seconds");
const appendMinutes = document.getElementById("minutes");
const buttonStart = document.getElementById("bt__start");
const buttonStop = document.getElementById("bt__stop");
const buttonRecord = document.getElementById("bt_record");
const buttonReset = document.getElementById("bt__reset");

let intervalId;
let records = "";

buttonStart.onclick = function(){
    clearInterval(intervalId)
    intervalId = setInterval(operateTimer, 10)
}

buttonStop.onclick = function(){
    clearInterval(intervalId)
}

buttonRecord.onclick = function(){
    lastRec = document.getElementById("time").innerText;
    document.getElementById("Last").innerText = lastRec;
  
    records += document.getElementById("time").innerText + "\n";
    document.getElementById("List").innerText = records;
  }

buttonReset.onclick = function(){
    clearInterval(intervalId)
    tenMillis = 0; seconds = 0; minutes = 0;
    appendTens.textContent = "00"
    appendSeconds.textContent = "00"
    appendMinutes.textContent = "00"

    records = "";
    document.getElementById("lastRecord").innerText = "";
    document.getElementById("recordList").innerText = "";
}

// 10ms 마다 시간에 대한 숫자가 증가한다.
function operateTimer(){
    tenMillis++;
    appendTens.textContent = tenMillis > 9 ? tenMillis : '0' + tenMillis
    if(tenMillis > 99){
        seconds++;
        appendSeconds.textContent = seconds > 9 ? seconds : '0' + seconds
        tenMillis = 0
        appendTens.textContent = "00"
    }
    if(seconds > 59){
        minutes++;
        appendMinutes.textContent = minutes > 9 ? minutes : '0' + minutes
        seconds = 0
        appendSeconds.textContent = "00"
    }
}