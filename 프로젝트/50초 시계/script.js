const numbersDiv = document.querySelector(".list")
const recordButton = document.querySelector("#record")
const recordList = []

function printClock() {
    var clock = document.getElementById("clock");
    var currentDate = new Date();
    var amPm = 'AM';          
    var Hours = addZeros(currentDate.getHours(),2); 
    var Minute = addZeros(currentDate.getMinutes() ,2);
    var Seconds =  addZeros(currentDate.getSeconds(),2);
    
    if(Hours >= 12){
    	amPm = 'PM';
    	Hours = addZeros(Hours - 12,2);
    }

    if(Seconds >= 50){
        Seconds = '<span style="color:#de1951;">'+Seconds+'</span>'
    }
    clock.innerHTML = Hours+":"+Minute+":"+Seconds +" <span style='font-size:50px;'>"+ amPm+"</span>";
    
    setTimeout("printClock()",1000);
}

function addZeros(num, digit) {
	  var zero = '';
	  num = num.toString();
	  if (num.length < digit) {
	    for (i = 0; i < digit - num.length; i++) {
	      zero += '0';
	    }
	  }
	  return zero + num;
}

recordButton.addEventListener("click", function(){
  clockscan = Hours+":"+Minute+":"+Seconds +" <span style='font-size:50px;'>"+ amPm+"</span>";
  recordList.push(clockscan)
  paintTime(clockscan)
})

function paintTime(number){
  const eachNumDiv = document.createElement("div")
  eachNumDiv.textContent = number
  numbersDiv.appendChild(eachNumDiv)
}