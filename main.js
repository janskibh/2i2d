function color(){//Recuperation de la valeur de #color
  document.getElementById("color").value = pageColor;
  const color = document.querySelector('#color');
  color.addEventListener('input', e => {//modification des variables --red --green et --blue en fonction de #color
    document.documentElement.style.setProperty('--red', hexToRed(color.value));
    document.documentElement.style.setProperty('--green', hexToGreen(color.value));
    document.documentElement.style.setProperty('--blue', hexToBlue(color.value));
  })
}


const pageColor = "#70ffee";//Couleur par defaut de la page

function hexToRed(h) {//fonction pour convertir la valeur hexadecimale de #color en valeur rouge de 0 à 255
  let r = 0;

  if (h.length == 4) {
    r = parseInt(h.charAt(1) + h.charAt(1), 16);

  } else if (h.length == 7) {
    r = parseInt(h.charAt(1) + h.charAt(1), 16);
  }
  
  return r

}

function hexToGreen(h) {//fonction pour convertir la valeur hexadecimale de #color en valeur vert de 0 à 255
  let g = 0;

  if (h.length == 4) {
    g = parseInt(h.charAt(2) + h.charAt(2), 16);

  } else if (h.length == 7) {
    g = parseInt(h.charAt(3) + h.charAt(4), 16);
  }
  
  return g

}

function hexToBlue(h) {//fonction pour convertir la valeur hexadecimale de #color en valeur bleu de 0 à 255
  let b = 0;

  if (h.length == 4) {
    b = parseInt(h.charAt(3) + h.charAt(3), 16);

  } else if (h.length == 7) {
    b = parseInt(h.charAt(5) + h.charAt(6), 16);
  }
  
  return b

}

const monthNames = ["JAN", "FEB", "MAR", "APR", "MAY", "JUNE",
  "JULY", "AUG", "SEPT", "OCT", "NOV", "DEC"
];

function time(){//Recuperation du temps et mise a jour de #clock
  var d = new Date();
  var ml = d.getMilliseconds();
  var s = d.getSeconds();
  var m = d.getMinutes();
  var h = d.getHours();
  var day = d.getDate();
  var month = monthNames[d.getMonth()];
  var year = d.getFullYear();
  document.getElementById('clocktime').textContent = ("0" + h).substr(-2) + ":" + ("0" + m).substr(-2) + ":" + ("0" + s).substr(-2);
  document.getElementById('clockmillisec').textContent = ":" + ("0" + ml).substr(1,1);
  
  document.getElementById('day').textContent = day;
  document.getElementById('month').textContent = month;
  document.getElementById('year').textContent = year;


}
