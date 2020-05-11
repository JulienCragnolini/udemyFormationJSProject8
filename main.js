    let villeChoisie;

    if("geolocation" in navigator) {
    navigator.geolocation.watchPosition((position) => {
        
        const url = 'https://api.openweathermap.org/data/2.5/weather?lat='
            + position.coords.latitude + '&lon='
            + position.coords.longitude + '&appid=e5a36c96e4f919768a9401a2b23e702e&units=metric';
        
        let requete = new XMLHttpRequest(); // Création de la requête 
        requete.open('GET', url); // Récupère les données
        requete.responseType = 'json'; // JSON
        requete.send(); // Envoie la requête

        requete.onload = function() {
        if (requete.readyState === XMLHttpRequest.DONE) {
            if (requete.status === 200) {
            let reponse = requete.response;
            // console.log(reponse);
            let temperature = reponse.main.temp;
            let ville       = reponse.name;
            // console.log(temperature);
            $('#temperature_label').text(temperature);
            $('#ville').text(ville);
            }
            else {
            alert('Un problème est intervenu, merci de revenir plus tard.');
            }
        }
        }
    }, erreur, options);
    
    var options = {
        enableHighAccuracy: true
    }
    }
    else {
    villeChoisie = "PAris";
    recevoirTemperature(villeChoisie);
    }

    let changerDeVille = document.querySelector('#changer');
    changerDeVille.addEventListener('click', () => {
    villeChoisie = prompt('Quelle ville souhaitez-vous voir ?');
    recevoirTemperature(villeChoisie);
    });

    function erreur() {
    villeChoisie = "Saint-Saulve";
    recevoirTemperature(villeChoisie);
    }

    function recevoirTemperature(ville) {
    const url = 'https://api.openweathermap.org/data/2.5/weather?q=' 
    + ville + '&appid=e5a36c96e4f919768a9401a2b23e702e&units=metric';

    let requete = new XMLHttpRequest(); // Création de la requête 
        requete.open('GET', url); // Récupère les données
        requete.responseType = 'json'; // JSON
        requete.send(); // Envoie la requête

    requete.onload = function() {
        if (requete.readyState === XMLHttpRequest.DONE) {
        if (requete.status === 200) {
            let reponse = requete.response;
            // console.log(reponse);
            let temperature = reponse.main.temp;
            let ville       = reponse.name;
            // console.log(temperature);
            $('#temperature_label').text(temperature);
            $('#ville').text(ville);
        }
        else {
            alert('Un problème est intervenu, merci de revenir plus tard.');
        }
        }
    }
    }