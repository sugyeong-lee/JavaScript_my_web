    var context; 
    var dialImg = new Image(); 
    var hourImg = new Image(); 
    var minImg = new Image(); 

    dialImg.src = 
    hourImg.src = 
    minImg.src = 
     
    function showTime() { 
        var d = new Date(); 
        var hour = d.getHours(); 
        var min = d.getMinutes();
        rMin = 6*min + 6*(rSec/360); 
        rHour = 30*hour + 30*(rMin/360); 
        rSec = rSec*(Math.PI/180); 
        rMin = rMin*(Math.PI/180); 
        rHour = rHour*(Math.PI/180); 
    } 
     
    function draw() { 
    }


    src="http://code.jquery.com/jquery-1.7.2.min.js"