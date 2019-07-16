(function () {
    window.onload = function () {
        let html = document.body.children[0];
        let body = html.children[0];
        let divBut = body.children[2];
        let footer = divBut.children[0];
        let div = footer.children[0];
        let tab = div.children[0];
        let di;
        let resX;
        let resY;
        let diffX;
        let diffY;
        tab[0].setAttribute("draggable", true);
        tab[0].setAttribute("ondragstart", "drag(event)");
        tab[0].setAttribute("id", "drag1");
        div[0].setAttribute("ondrop", "drop(event)");
        div[0].setAttribute("ondragover", "allowDrop(event)");
        div[0].setAttribute("ondragleave", "dropL(event)");
        div[0].setAttribute("ondragenter", "dropE(event)");
        tab[0].style.position = "relative";
        di = tab[0].getBoundingClientRect();
        changetext(0, 0);
    };

    function allowDrop(ev) {
        ev.preventDefault();
   			tab[0].style.zIndex = '1';
    }

    function drag(ev) {
        ev.dataTransfer.setData("text", ev.target.id);
        let diLive = tab[1].getBoundingClientRect();
        let x = ev.clientX;
        let y = ev.clientY;
        diffX = x - diLive.left;
        diffY = y - diLive.top;
		tab[0].style.zIndex = "-1";
    }

    function dropL(ev) {
			tab[0].style.zIndex = '1';
    }

    function dropE(ev) {
			tab[0].style.zIndex = '-1';
    }

    function drop(ev) {
        ev.preventDefault();
        var data = ev.dataTransfer.getData("text");
		tab[0].style.zIndex = "1";
        let x = ev.clientX;
        let y = ev.clientY;
        resX = x - di.left - diffX;
        resY = y - di.top - diffY;
        tab[0].style.top = resY + "px";
        tab[0].style.left = resX + "px";
        changetext(resX, resY);
    }

    function changetext(x, y) {
        div[0].innerHTML =
            "Nouvelles coordonnées => {x:" + x + "px" + ", y:" + y + "px" + "}";
    }
}
    ())