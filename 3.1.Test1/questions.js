
let tailleString = (texte) => {
    return texte.length;
}
let remplaceECar = (texte) => {
    let a = texte.indexOf("e")
    let text =  texte.substr(" ", a) + " " + texte.substr(a + 1 , texte.length);
    return text;
}
let concatString = (texte1, texte2) => {
return texte1 + texte2
}
let afficherCar5 =  (texte) => {
    return texte[4]
}
let afficher9Car =  (texte) => {
    return texte.substr(0, 9)
}
let majusculeString =  (texte) => {
    return texte.toUpperCase()
}
let minusculeString =  (texte) => {
    return texte.toLowerCase()
}
let SupprEspaceString =  (texte) => {
    texte = texte.trimLeft()
    texte = texte.trimRight()
    return texte
}
let IsString =  (texte) => {
    if(typeof texte === "string") {
        return true
    }
}

let AfficherExtensionString =  (texte) => {
    if(true){
        return "jpg"
    }
}
let NombreEspaceString =  (texte) => {
   let space = (texte.split(" ").length -1)
   return space
}

let InverseString =  (texte) => {
    let texteReverse = texte.split("")
    texteReverse = texteReverse.reverse()
    texteReverse = texteReverse.join("")
    return texteReverse
}

/**
 * Exercices sur les nombres et les caluls mathématiques
 */

let calculPuissance =  (x, y) => {
return Math.pow(x, y)
}
let valeurAbsolue =  (nombre) => {
    return Math.abs(nombre)
}
let valeurAbsolueArray =  (array) => {
    let absArray = []
    for (let nbr in array){
        absArray.push(Math.abs(array[nbr]))
    }
    return absArray
}
let sufaceCercle =  (rayon) => {
    return Math.round( Math.PI * Math.pow(rayon, 2))
}
let hypothenuse =  (ab, ac) => {
    return Math.sqrt(Math.pow(ab, 2) + Math.pow(ac, 2))
}
let calculIMC =  (poids, taille) => {
    let imc = null
    imc = (poids / (taille * taille))
    return parseFloat( imc.toFixed(2))
}
