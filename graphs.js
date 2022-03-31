
let temp = {minval : 10, min : 20, max : 25, maxval : 40 }
let carb = {minval: 0, min: 0, max: 800, maxval: 2000 }
let hum = {minval : 20, min : 50, max : 60, maxval : 80 }
let pers = {minval : 0, min : 0, max : 2000, maxval : 3000 }

let values = {
    value : [temp, carb, hum, pers],
    diag : ["tdiag", "cdiag", "hdiag", "pdiag"],
    uppertext : ["temp", "carbon", "hum", "nbpersons"],
    diagtext : ["temptext", "carbtext", "humtext", "persotext"],
    label : ["T : ", "CO2 : ", "H : ", "P : "],
    sign : ["°C", "ppm", "%", ""],
}

var rayon = 100;
rayon = window.innerWidth / 15

for(var i of values.value){ //Les valeurs sont generes aleatoirement entre i.min et i.max
    i.val = Math.floor(Math.random() * (i.max - i.min)) + i.min;
}

var SvgElements = document.getElementsByName("svg"); //modification du rayon des graphes en fonction de rayon
for (var i = 0, max = SvgElements.length; i < max; i++) {
    SvgElements[i].style.width = rayon * 2;//largeur des svg
    SvgElements[i].style.height = rayon * 2;//hauteur des svg
}

var CircleElements = document.getElementsByName("graph");// Modification du rayon des diagrammes vert clair
for (var i = 0, max = CircleElements.length; i < max; i++) {
    CircleElements[i].style.r = rayon;// rayon du graphe vert clair
    CircleElements[i].style.strokewidth == 0.1 * rayon;// Contour du graphe égal à 0.1 fois son rayon
    CircleElements[i].style.cx = rayon;// Position x du diagramme
    CircleElements[i].style.cy = rayon;// Position y du diagramme
}

var DiagBgElements = document.getElementsByName("diagbg");//Modification du rayon des cercles couleur bg au milieu des graphes
for (var i = 0, max =  DiagBgElements.length; i < max; i++) {
    DiagBgElements[i].style.r = 0.85 * rayon;//Le rayon de diagbg est 0.85 fois le rayon du graphe
    DiagBgElements[i].style.cx = rayon;//Position x du cercle
    DiagBgElements[i].style.cy = rayon;//POsition y du cercle
}
    
var GraphTxtElements = document.getElementsByName("graphtext");//Modification de parametres de style au texte des valeurs des graphes
for (var i = 0, max =  GraphTxtElements.length; i < max; i++) {
    GraphTxtElements[i].style.marginTop = rayon  + "px";
    //GraphTxtElements[i].style.fontSize = rayon * 0.25 + "px";
}

var daval = Math.round(2 * Math.PI * rayon); //Dasharray

console.log("rayon : " + rayon)
console.log("Dasharray : " + daval)

function randomData(){
    
    diff = 1

    var r,g,b;

    var pagecolors = [r,g,b];
    var colorvar = ['--red','--green','--blue'];

    for(var c of pagecolors){ //Recuperation des valeurs de --red, --green et --blue
        color = getComputedStyle(document.documentElement).getPropertyValue(colorvar[pagecolors.indexOf(c)]);
        parseInt(color);
        pagecolors[pagecolors.indexOf(c)] = color
    }

    pagecolors.sort(function(a,b){return a-b}); //Triage des valeurs des couleurs dans l'ordre craoissant

    let red = {red : pagecolors[2], green : pagecolors[0]/2, blue : pagecolors[0]/2}; //Definition des couleurs red, yellow et green
    let yellow = {red : pagecolors[2], green : pagecolors[2], blue : pagecolors[0]/2};
    let green = {red : pagecolors[0]/2, green : pagecolors[2], blue : pagecolors[0]/2};

    for(var i of values.value){
        i.val = i.val + Math.floor(Math.random() * (2*diff + 1)) - diff; //Mise a jour des valeurs (+1 , +0 ou -1)

        document.getElementById(values.diag[values.value.indexOf(i)]).style.strokeDasharray = (i.val-i.minval)/(i.maxval-i.minval) * daval + ' ' + daval;
        document.getElementById(values.uppertext[values.value.indexOf(i)]).textContent = (values.label[values.value.indexOf(i)] + i.val + values.sign[values.value.indexOf(i)]);
        document.getElementById(values.diagtext[values.value.indexOf(i)]).textContent = (i.val + values.sign[values.value.indexOf(i)]);

        if(i.val < i.min || i.val > i.max ){
            document.getElementById(values.diag[values.value.indexOf(i)]).style.stroke = "rgb( " + red.red + "," + red.green + "," + red.blue + " )";
            document.getElementById(values.diag[values.value.indexOf(i)]).style.fill = "rgb( calc(" + red.red + "/5),calc(" + red.green + " /5),calc(" + red.blue + " /5) )";
            document.getElementById(values.uppertext[values.value.indexOf(i)]).style.color = "rgb( " + red.red + "," + red.green + "," + red.blue + " )";
            document.getElementById(values.diagtext[values.value.indexOf(i)]).style.color = "rgb( " + red.red + "," + red.green + "," + red.blue + " )";
        }
        else if(i.val < i.min*0.9 || i.val > i.max*0.8 ){
            document.getElementById(values.diag[values.value.indexOf(i)]).style.stroke = "rgb( " + yellow.red + "," + yellow.green + "," + yellow.blue + " )";
            document.getElementById(values.diag[values.value.indexOf(i)]).style.fill = "rgb( calc(" + yellow.red + "/5),calc(" + yellow.green + " /5),calc(" + yellow.blue + " /5) )";
            document.getElementById(values.uppertext[values.value.indexOf(i)]).style.color = "rgb( " + yellow.red + "," + yellow.green + "," + yellow.blue + " )";
            document.getElementById(values.diagtext[values.value.indexOf(i)]).style.color = "rgb( " + yellow.red + "," + yellow.green + "," + yellow.blue + " )";
        }
        else {
            document.getElementById(values.diag[values.value.indexOf(i)]).style.stroke = "rgb( " + green.red + "," + green.green + "," + green.blue + " )";
            document.getElementById(values.diag[values.value.indexOf(i)]).style.fill = "rgb( calc(" + green.red + "/5),calc(" + green.green + " /5),calc(" + green.blue + " /5) )";
            document.getElementById(values.uppertext[values.value.indexOf(i)]).style.color = "rgb( " + green.red + "," + green.green + "," + green.blue + " )";
            document.getElementById(values.diagtext[values.value.indexOf(i)]).style.color = "rgb( " + green.red + "," + green.green + "," + green.blue + " )";
        }
    }
}

setInterval(randomData, 2000); //La mise a jour des valeurs est effectuée toutes les deux secondes