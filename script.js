// Récupérer les données de la table
const table = document.querySelector('table');
const rows = table.getElementsByTagName('tr');

// Initialiser les variables pour stocker les sommes
let sommePhilippe = 0;
let sommeDjomo = 0;

// Parcourir les lignes de la table (sauf la première qui contient les en-têtes)
for (let i = 1; i < rows.length; i++) {
  const cells = rows[i].getElementsByTagName('td');
  
  // Récupérer les montants de Djomo et Philippe
  const montantDjomo = parseInt(cells[0].textContent);
  const montantPhilippe = parseInt(cells[1].textContent);
  
  // Ajouter les montants aux sommes respectives
  sommeDjomo += montantDjomo;
  sommePhilippe += montantPhilippe;
}

// Calculer la différence entre les sommes
const difference = sommeDjomo - sommePhilippe;


        // Sélectionner l'élément HTML avec la classe 'value'
        let valueElement = document.querySelector('.value');

        // Insérer la somme dans l'élément
        valueElement.textContent = sommeDjomo;

          // Sélectionner l'élément HTML avec la classe 'value'
        let value2Element = document.querySelector('.value2');

        // Insérer la somme dans l'élément
        value2Element.textContent = sommePhilippe;


// Afficher la différence
const resultat = document.querySelector('.value3');
if (difference < 0) {
  resultat.textContent = `Djomo doit ${-difference} à Philippe.`;
} else if (difference > 0) {
  resultat.textContent = `Philippe doit ${Math.abs(difference)} à Djomo.`;
} else {
  resultat.textContent = `Ils sont quittes.`;
}
document.body.appendChild();
