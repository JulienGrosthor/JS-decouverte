console.log("exo-7");



//1. Parcourir les articles fournis pour les afficher un à un dans la console
for (let product of jsonDatas) {
    console.log(product);
}

//2. Créer un objet qui servira à traduire les types. Cet objet aura pour structure {type : "type traduit"}. Par exemple {videoGame:"Jeux Vidéos"}.
let types = {
    car: "voiture",
    house: "maison",
    game: "jeu",
    videoGame: "jeu vidéo",
    show: "Spectacle"
}

//3. Ajouter une nouvelle clé aux objets existants pour stocker le type traduit, sans modifier le fichier data.js. Répéter l'étape 1 pour vérifier le type traduit.
let addTraductType = () => {
    for (let product of jsonDatas) {
        for (let type in types) {
            if (product.type === type) {
                product.typeTraduction = types[type];
            }
        }
    }
}
addTraductType();

//4. Créer une page HTML et lister les articles depuis la donnée.
function displayProducts(productList) {
    let catalog = document.getElementById("catalog");
    for (let product of productList) {
        catalog.innerHTML += `
        <h3>${product.name}</h3>
        <ul>
            <li>Type: ${product.typeTraduction}</li>
            <li>Description: ${product.description}</li>
            <li>Prix: ${product.price}</li>
            <li>Quantité: ${product.quantity}</li>
        </ul>`
    }
}

displayProducts(jsonDatas)


//5. Créer un champ texte et un bouton. Au clic sur le bouton, afficher les articles du type entré dans le champ texte.
    let divForm = document.getElementById("sort");
        sort.innerHTML = `
        <form action="" method="post">
            <label for="productType">Product type filter:</label>
            <input type="text" id="productType" name="productType" required>
            <input type="submit" value="Submit"</input>
        </form>
        `
