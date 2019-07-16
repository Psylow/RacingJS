window.onload = function () {
    (function () {
        let html = document.body.children[0];
        let body = html.children[0];
        let div = body.children[2];
        let footer = div.children[0];
        let i = 1;
        footer.onclick = function ok() {
            let prenom = prompt("Quel est votre nom ?");

            if (prenom == null) {

            } else if (prenom == false) {
                ok();
            } else if (confirm("Etes vous sûr que " + prenom + " est votre nom ?") == false) {
                ok();
            } else {
                footer.innerText = "Bonjour " + prenom + " !";
                alert("Bonjour " + prenom + " !");
            }

        }
    })();
}