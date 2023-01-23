
let piece = 300;
let e = setInterval(function() {
    if (piece>0){
        piece=piece-1
    }else if (piece=0){
        dead();
    }
    document.getElementById("pieces").innerText = piece
}, 1000);