window.onload = function(){
    (function(){
        let html = document.body.children[0];
        let body = html.children[0];
        let div = body.children[2];
        let footer = div.children[0];
        footer.innerText = "Hello World";
    })();
}