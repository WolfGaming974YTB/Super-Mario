
let time = 300;
let x = setInterval(function() {
    if (time>0){
        time=time-1
    }else if (time=0){
        GameOver();
    }
    document.getElementById("timer").innerHTML = time
}, 1000);