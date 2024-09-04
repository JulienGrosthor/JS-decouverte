// Cours 8 de Codecademy
console.log("exo-6");

var joeInfo = {
    name: "Joe's house",
    rooms: 5,
    garage: false,
    bathrooms: 1 + 2,
    cars: ['Clio', 'Van'],
};
// ! Ne faites pas de modification au-dessus de cette ligne !

// // 1. Afficher le nombre de voitures de Joe
// console.log((joeInfo.cars).length);
// // 2. Changer le nombre de salles de bains de Joe : il n'en possède qu'une. Afficher le nouveau nombre de salles de bain.
// joeInfo.bathrooms=1;
// console.log(joeInfo.bathrooms);
// // 3. Joe vient d'acquérir un garage. Afficher cette nouvelle information.
// joeInfo.garage=true;
// console.log(joeInfo.garage);


//Notre équipe possède d'une part un ensemble de joueurs et d'autre part un ensemble de match joués. Nous voulons représenter les deux. Ajouter deux propriétés à votre objet : players et games toutes les deux étant des tableaux vides.
// Remplir le tableau players et le tableau games
let team = {
    players: [
        {
        firstName: 'Charles',
        lastName: 'Manson',
        age: 33
        }
    ],
    games: [{
        opponent: 'LAPD',
        teamPoints: 66,
        opponentPoints: 33
    }]
}

//Nous allons maintenant ajouter un nouveau joueur à l'équipe. Créer une nouvelle propriété à votre objet : déclarer une méthode addPlayer qui prend trois arguments, firstName, lastName, et age et qui ajoute un joueur au tableau players.
let addPlayer = (firstName, lastName, age) => {
    let newPlayer = {
        firstName: firstName,
        lastName: lastName,
        age: age
    }
    team.players.push(newPlayer);
}

addPlayer('Ted', 'Bundy', 35);
addPlayer('Jeffrey', 'Dahmer', 29);

//Faire la même chose pour les matchs, stockés dans le tableau games.
let addGame = (opponent, teamPoints, opponentPoints) => {
    let newGame = {
        opponent: opponent,
        teamPoints: teamPoints,
        opponentPoints: opponentPoints
    }
    team.games.push(newGame);
}

addGame('NYPD', 55, 23);
addGame('Superman', 1, 100);

console.log(team.players);
console.log(team.games);

//Calculer la somme des points de votre équipe sur tous les matchs joués.
let calculateTotalTeamPoints = () => {
    let totalTeamPoints = 0;

    team.games.forEach(game => {
        totalTeamPoints += game.teamPoints;
    });

    return totalTeamPoints;
}

console.log("Total des points de l'équipe :", calculateTotalTeamPoints());

//Calculer la moyenne des points de l'équipe adverse sur tous les matchs.
let calculateAverageOpponentPoints = () => {
     let totalOpponentPoints = 0;

     team.games.forEach(game => {
         totalOpponentPoints += game.opponentPoints;
     });

    let gameNumber = team.games.length;

     return totalOpponentPoints / gameNumber;
}

console.log("Moyenne des points de l'équipe adverse:", calculateAverageOpponentPoints());

//Écrire une fonction qui permet de trouver le joueur le plus âgé.
let findOldestPlayer = () => {
    let oldestPlayer = team.players[0];

    team.players.forEach(player => {
        if (player.age > oldestPlayer.age) {
            oldestPlayer = player;
        }
    });

    return oldestPlayer;
}

let oldestPlayer = findOldestPlayer();
console.log("Le joueur le plus âgé est :", oldestPlayer.firstName, oldestPlayer.lastName, ", âge :", oldestPlayer.age);