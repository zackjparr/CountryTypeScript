class Country 
{
    name : string;
    lang : string;
    greeting : string;
    colors : string[];

    constructor(name:string, lang:string, greeting:string, colors:string[]){
        this.name = name;
        this.lang = lang;
        this.greeting = greeting;
        this.colors = colors;
    }
}

let usa = new Country("USA", "Murican", "Why Hello there world! Have some McDonalds", ["red", "white", "blue"]);
let mexico = new Country("Mexico", "Spanish", "Hola mundo!", ["red", "white", "green"]);
let algeria = new Country("Algeria", "Arabic and Berber", "Sup", ["blue", "yellow", "red"]);
let japan = new Country("Japan", "Japanese", "Kon'nichiwa", ["white", "red", "white"]);
let italy = new Country("Italy", "Italian", "Ciao", ["green", "white", "red"]);
let germany = new Country("Germany", "German", "Hallo", ["red", "black", "gold"])


function SwitchCountry() {
    let input = document.getElementById("CountryList").value;
    let country;

    if (input === "USA") {
        country = usa;
    }
    else if (input === "Mexico") {
        country = mexico;
    }
    else if (input === "Algeria") {
        country = algeria;
    }
    else if (input === "Japan") {
        country = japan;
    }
    else if (input === "Italy") {
        country = italy;
    }
    else if (input === "Germany") {
        country = germany;
    }

    document.getElementById("Color1").style.backgroundColor = country.colors[0];
    document.getElementById("Color2").style.backgroundColor = country.colors[1];
    document.getElementById("Color3").style.backgroundColor = country.colors[2];
    document.getElementById("CountryName").innerText = country.name;
    document.getElementById("OfficialLanguage").innerText = country.lang;
    document.getElementById("HelloWorld").innerText = country.greeting;

}
