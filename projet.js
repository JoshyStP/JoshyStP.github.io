var nomD = (prompt("Choisi unue valeur de depart"))
var nomF = (prompt("Choisi uune valeur de fin"))
var nomDe = nomD
var nomFi = nomF
 
while (nomD<nomF){
  
  nomD++
  nomDe = nomDe + "-" + nomD
}
alert(nomDe)
