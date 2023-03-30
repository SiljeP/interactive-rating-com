

// AT FÅ KNAPPEN TIL AT SKIFTE FARVE NÅR MAN TRYKKER PÅ DEN. MAN KAN OGSÅ BRUGE PSEUDO SELECTOR :FOCUS I CSS TIL DET SAMME? FUNKTIONEN HERUNDER ER UDKOMMENTERET DA JEG HAR GIVET DEN :FOCUS I CSS, DA MAN SÅ KUN VÆLGER EN AF GANGEN. og det magtede jeg ikke at finde ud af i javascript

// let rateNumbers = document.querySelectorAll(".number")

// function buttonColor(tus){
//     tus.style.backgroundColor = 'hsl(217, 12%, 63%)';
//     tus.style.color = 'white';
//     console.log(tus);
// }

// rateNumbers.forEach(function(rateNumber){
//     rateNumber.addEventListener("click", function(event){
//         buttonColor(event.target)
//     })

//  })






 //HER FÅR JEG HELE DEN FØRSTE SECTION TIL AT FORSVINDE VED AT ÆNDRE DENS STYLE DISPLAY TIL HIDDEN, OG DEREFTER DEN NÆSTE SECTIONS SOM FRA START HAR EN HIDDEN I CSS TIL AT BLIVE EN BLOCK.

 let submitButton = document.querySelector('button');

 function submitPress(){
    let sectionCard = document.querySelector(".card");
    let sectionThanks = document.querySelector(".thanks-section")

    sectionCard.style.display = "hidden";
    sectionThanks.style.display = "block";

 }

    submitButton.addEventListener("click", function(){
        let sectionCard = document.querySelector(".card");
        let sectionThanks = document.querySelector(".thanks_section")
        sectionThanks.style.display = "block";
        sectionCard.style.display = "none";
        
        console.log(sectionThanks.style);
    })

//DET TORBEN LAVEDE PAA TAVLEN

    const rateButtons = document.querySelectorAll(".number")

    rateButtons.forEach(function(knap){
        knap.addEventListener("click", rateOs);
    })

    function rateOs(event){
        // event.preventDefault() ikke nødvendigt fordi jeg ikke har en knap, der jo har et standard event;
        console.log("klikket");

        // let X = event.target.getAttribute('data-rating'); //den udpenslede måde
        let Y = this.dataset.rating; //den optimerede måde
        givRating(Y);  
    }

    function givRating(tal){
        let antal = document.querySelector("#rated");
        antal.innerHTML = tal;
    }