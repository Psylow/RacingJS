window.onload = function(){
    (function(){
        let html = document.body.children[0];
        let body = html.children[0];
        let div = body.children[2];
        let divBut = div.children[1];
        let button = divBut.children[0];
        let button2 = divBut.children[1];
        let button3 = divBut.children[2];
        let text = div.children[0];
        let canvas = text.children[0];
        let audio = new Audio ("http://54.37.157.128/song.ogg");
        let ctx = canvas.getContext('2d');
        ctx.beginPath();
        ctx.strokeStyle = "white";
        ctx.moveTo(6, 6);
        ctx.lineTo(14, 10);
        ctx.lineTo(6, 14);
        ctx.closePath();
        ctx.stroke();

        canvas.onclick = function(){
            audio.play();
        }
        button.onclick = function(){
            audio.pause();
        }
        button2.onclick = function(){
            audio.pause();
            audio.currentTime = 0;
        }
        button3.onclick = function(){
            if(audio.muted == false) {
                audio.muted = true;
            }else{
                audio.muted = false;
            }
        }
    })();
}