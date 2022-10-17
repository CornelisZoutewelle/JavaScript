alert("Pop Up!");

var getal1 = 12;
var getal2 = 4;
var som = getal1 * getal2;

var kleur = prompt("Geef de Engelse kleurnaam: (red of blue", "");

// Kleur aanpassen
// document.getElementById("kop").style.color = "red";
document.getElementById("kop").style.color = kleur;

// Tekst aanpassen
document.getElementById("#p1").innerHTML = "Hallo" + kleur + '!';