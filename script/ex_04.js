window.onload = function(){
    (function(){
        let html = document.body.children[0];
        let body = html.children[0];
        let div = body.children[2];
        let footer = div.children[0];
        let str = "";
        document.onkeypress = function(key){
            keyCode = key.which;
	    if(keyCode>=32 && keyCode<=126 ){
            if(str.length == 42){
                str = str.substring(1);
            }
            str += String.fromCharCode(keyCode);
            footer.innerText=str;
        }
        
    }
    })();
}
