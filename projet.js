const texte =
      " Nous nous impliquons activement au sein d’équipes interfonctionnelles afin d'assurer la réussite de vos projets grâce à des solutions innovantes. Faites un choix stratégique en nous consultant!";

    const cible = document.getElementById("suite");
    let i = 0;
    const vitesse = 30; 
    const delaiRepetition = 30;

    function taper() {
      if (i < texte.length) {
        cible.innerHTML += texte.charAt(i);
        i++;
        setTimeout(taper, vitesse);
      }
    }

    
    window.addEventListener("DOMContentLoaded", taper);