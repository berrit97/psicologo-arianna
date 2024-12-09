document.addEventListener("DOMContentLoaded", function () {
    console.log("Il sito è pronto!");

    // Aggiungi altre funzionalità qui
    const form = document.querySelector("form");
    form.addEventListener("submit", function (e) {
        e.preventDefault();
        alert("Grazie per avermi contattato!");
    });
});
