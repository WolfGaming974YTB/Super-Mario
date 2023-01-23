let live = 3;
let m = setInterval(function() {
    if (live>0){
        live=live-1
    }else if (live<0){
        dead();
    }
    document.getElementById("vie").innerHTML = live
}, 5000);

function dead() {
    console.log('go')
    location.reload(true)
}