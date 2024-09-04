console.log("exo-7");

function displayProducts(productList) {
//Créer une page HTML et lister les articles depuis la donnée.
    let catalog = document.getElementById("catalog");
    for (let product of productList) {
        catalog.innerHTML += `
        <h3>${product.name}</h3>
        <ul>
            <li>${product.type}</li>
            <li>${product.description}</li>
            <li>${product.price}</li>
            <li>${product.quantity}</li>
        </ul>`
    }
}


console.log(jsonDatas);

//Parcourir les articles fournis pour les afficher un à un dans la console
for (let product of jsonDatas) {
    console.log(product);
}



//Ajouter une nouvelle clé aux objets existants pour stocker le type traduit, sans modifier le fichier data.js. Répéter l'étape 1 pour vérifier le type traduit.
let addTraductType = () => {

    //Créer un objet qui servira à traduire les types. Cet objet aura pour structure {type : "type traduit"}. Par exemple {videoGame:"Jeux Vidéos"}.
    let types = {
        car: "voiture",
        house: "maison",
        game: "jeu",
        videoGame: "jeu vidéo",
        show: "Spectacle"
    }

    for (let product of jsonDatas) {
        for (let type in types) {
            if (product.type === type) {
                product.typeTraduction = types[type];
            }
        }
    }
}
addTraductType();
displayProducts(jsonDatas)








