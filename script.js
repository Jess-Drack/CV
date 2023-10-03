function toggleText(id) {
    var text = document.getElementById("text" + id);
    var hoverText = document.getElementById("hoverText" + id);
    var curseur = document.getElementById("curseur" + id);

    var activeElements = document.getElementsByClassName("active");
    console.log(activeElements)
    for (var i = 0; i < activeElements.length; i++) {
        if (activeElements[i] !== hoverText && activeElements[i].classList.contains("hover-text")) {
            activeElements[i].classList.remove("active");
            var associatedId = activeElements[i].id.replace("hoverText", "text");
            associatedId = associatedId.replace("curseur", "text");
            document.getElementById(associatedId).classList.remove("active");
            document.getElementById(activeElements[i].id.replace("hoverText", "curseur")).classList.remove("active");
        }
    }

    text.classList.toggle("active");
    hoverText.classList.toggle("active");
    curseur.classList.toggle("active");
}
const slide = ["./images/artsPlastiques/arcane.webp", "./images/artsPlastiques/Chacha.png", "./images/artsPlastiques/angers.webp", "./images/artsPlastiques/kirin.webp", "./images/artsPlastiques/yokai.webp", "./images/artsPlastiques/affiche.webp"];
const slideTitre = ["Les contes des arcanes", "Charlotte de Valois", "Fantastique Angers", "Kirin", "Affiche exposition Yokai", "Affiche exposition film & la femme dans le monde"];
const slideDesc = ["Micro-entreprise", "Papier découpé", "Affiche projet à Angers", "Dessin numérique et ghost paper", "Dessin numérique", "Affiche en papier découpé et collé"];
let numero = 0;

function ChangeSlide(sens) {
    numero = numero + sens;
    if (numero < 0)
        numero = slide.length - 1;
    if (numero > slide.length - 1)
        numero = 0;
    document.getElementById("slide").src = slide[numero];
    document.getElementById('slideTitre').textContent = slideTitre[numero];
    document.getElementById('slideDesc').textContent = slideDesc[numero];
}

const webSlide = ["./images/web/booki.png", "./images/web/kanap.png", "./images/web/sauces.png", "./images/web/str.png"];
const webSlideTitre = ["Site Booki", "Site Kanap", "Site sauces", "Prototype STR"];
const webSlideDesc = ["Formation: création d'un site à partir d'une maquette", "Formation: création du front en javascript pour faire une commande web", "Formation: création d'un site avec authentification et database mongodb", "Projet: création d'une application reconnaissant les étoiles avec IA et réalité augmentée"];
const webRef = ["https://jess-drack.github.io/Projet-1-booki/", "https://github.com/Jess-Drack/Projet-2-Kanap", "https://github.com/Jess-Drack/Projet-3-Sauces", "https://www.figma.com/proto/HndbokyRTFha5V7zZa7Iwn/Untitled?page-id=0%3A1&type=design&node-id=78-337&viewport=817%2C-562%2C0.29&t=fCBpxFILGG7hD4la-1&scaling=min-zoom&starting-point-node-id=78%3A337&mode=design"];
let numeroWeb = 0;

function ChangeWebSlide(sens) {
    numeroWeb = numeroWeb + sens;
    if (numeroWeb < 0)
        numeroWeb = webSlide.length - 1;
    if (numeroWeb > webSlide.length - 1)
        numeroWeb = 0;
    document.getElementById("webSlide").src = webSlide[numeroWeb];
    document.getElementById("webRef").href =webRef[numeroWeb];
    document.getElementById('webSlideTitre').textContent = webSlideTitre[numeroWeb];
    document.getElementById('webSlideDesc').textContent = webSlideDesc[numeroWeb];
}
