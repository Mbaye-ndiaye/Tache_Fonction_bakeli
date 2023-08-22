// creer  une fonction qui demande a l'utilisateur de saisir deux nombre

function multiplication() {

    // recuperer les elements html
    const nombre1 = document.getElementById('titre').value;
    const nombre2 = document.getElementById('titre2').value;

    const myText = document.getElementById('text')

    let totalSomme = nombre1 * nombre2
    myText.innerHTML = `le resultat est : ${totalSomme}`
    
}



//Exercice02

 let nombre = prompt("Entrez un nombre")

 let nombre1 = prompt('entrez le chiffre 4');

 let somme = nombre % nombre1;

 alert(`si l'on divise le nombre par 4 le reste est de ${somme}`);


























































































// function multiplication () {
//     const number1 = parseFloat(document.getElementById('titre').value);
//     const number2 = parseFloat(document.getElementById('titre2').value);

//     let somme = number1 * number2;
    
//     let Text = number1 + "muplier par" + number2 + ' ' + somme;
//     document.getElementById('text').innerHTML = Text;
// }

// const onclick = document.getElementById('leText');

//  onclick.addEventlistener('click', multiplication);




