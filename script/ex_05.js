window.onload = function(){
    (function(){
        let font_color = document.body;
        let html = document.body.children[0];
        let body = html.children[0];
        let footer = body.children[2];
        let div = footer.children[0];
        let button_plus = div.children[0];
        let button_moins = div.children[1];
        let color_font = div.children[2];
        let font_size = 16;
        let line_height = 1.4;
            button_plus.onclick = function(){
                font_size++;
                html.style.fontSize = font_size+"px";
            }
            button_moins.onclick = function(){
                font_size--;
                html.style.fontSize = font_size+"px";
            }
            color_font.onchange = function(){
                value = color_font.value;
                font_color.style.background = value;
            }
    })();
}