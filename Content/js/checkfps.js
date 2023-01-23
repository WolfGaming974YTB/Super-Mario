let be = Date.now(),fps=0,info='';
requestAnimationFrame(
    function loop(){
        let now = Date.now()
        fps = Math.round(1000 / (now - be))
        be = now
        requestAnimationFrame(loop)
        if (fps <= 30){
          kFps.style.color = "red"
          kFps.textContent = fps 
        } if (fps >= 31 && fps <= 50) {
            kFps.style.color = "black"
            kFps.textContent = fps
          } else {
            kFps.style.color = "white"
            kFps.textContent = fps
        }
        kpFps.value = fps;
        info+=(''+new Date()+' '+fps+'\n');
    }
 )