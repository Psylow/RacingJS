(function(){
window.onload = function(){
    let html = document.body.children[0];
        let body = html.children[0];
        let div = body.children[2];
        let footer = div.children[0];

    let Hero = function(name, genre, intel, straight){
        this.name = name[0].toUpperCase() + name.slice(1, name.length).toLowerCase();
        this.genre = genre;
        this.intel = intel;
        this.straight = straight;
        Hero.prototype.toString = function(){
            let str = "Je suis " + this.name + " le " + this.genre + ", j'ai " + this.intel;
            this.intel > 1 ? str += " points d'intelligence et " + this.straight : str += " point d'intelligence et " + this.straight;
            this.straight > 1 ? str += " points de force !</br>" : str += " point de force !</br>";
            footer.innerHTML += str;
        }
    }
var mage = new Hero("Amadeus", "mage", 10, 3);
var guerrier = new Hero("Pontius", "guerrier", 3, 10);
mage.toString();
guerrier.toString();
}
})();