var player;
var random;
var computer;

player = window.prompt("Choisissez pierre, papier ou ciseaux:");
player = player.toLowerCase();


random=Math.floor(Math.random()*3);

if (random==0) {
    computer = "pierre"};
if (random==1) {
    computer = "ciseaux"};
if (random==2) {
    computer = "papier"};


if (computer==player){
    alert("Egalité")
}
else if (computer="pierre" && (player="ciseaux")){
    alert("Vous avez perdu");
}
else if (computer="ciseaux" && (player="pierre")){
    alert("Vous avez gagné");
}
else if (computer="ciseaux" && (player="papier")){
    alert("Vous avez perdu");
}
else if (computer="papier" && (player="ciseaux")){
    alert("Vous avez gagné");
};