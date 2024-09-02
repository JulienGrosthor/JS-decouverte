// you can write js here
console.log('hello from file');

//fait qu'un pop-up apparait avec la question, et on peut rentrer une valeur qu'on veut, le reste du code s'applique par rapport au résultat ensuite!)
var kelvins = prompt("Quelle est la température en Kelvins aujourd'hui ?");let celsius;

function kelvinsToCelcius(kelvins){ //pour convertir, on vient déduire 273 à kelvin.
    return kelvins - 273;
}

celsius = kelvinsToCelcius(kelvins);
console.log('temperature in celsius = ' + celsius);

let fahrenheit = celsiustoFahrenheit(celsius);

function celsiustoFahrenheit(celsius){
    return celsius * (9/5) + 32
}
console.log('temperature in fahrenheit = ' + Math.floor(fahrenheit));

