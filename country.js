var Country = /** @class */ (function () {
    function Country(name, lang, greeting, colors) {
        this.name = name;
        this.lang = lang;
        this.greeting = greeting;
        this.colors = colors;
    }
    return Country;
}());
var usa = new Country("USA", "Murican", "Why Hello there world! Have some McDonalds", ["red", "white", "blue"]);
var mexico = new Country("Mexico", "Spanish", "Hola mundo!", ["red", "white", "green"]);
var algeria = new Country("Algeria", "Arabic and Berber", "Sup", ["blue", "yellow", "red"]);
var japan = new Country("Japan", "Japanese", "Kon'nichiwa", ["white", "red", "white"]);
var italy = new Country("Italy", "Italian", "Ciao", ["green", "white", "red"]);
var germany = new Country("Germany", "German", "Hallo", ["red", "black", "gold"]);
function SwitchCountry() {
    var input = document.getElementById("CountryList").value;
    var country;
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
