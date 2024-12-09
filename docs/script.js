


############### New sheet ###############
// Inizializza EmailJS con il tuo User ID
(function() {
  emailjs.init("user_berrit97"); // Sostituisci con il tuo User ID di EmailJS
})();

// Gestione invio modulo tramite EmailJS
document.getElementById("contact-form").addEventListener("submit", function(event) {
  event.preventDefault(); // Prevenire il comportamento di invio predefinito del modulo
  
  const name = document.getElementById("name").value;
  const email = document.getElementById("email").value;
  const phone = document.getElementById("phone").value;
  const message = document.getElementById("message").value;

  // Parametri per il template
  const templateParams = {
    from_name: name,
    from_email: email,
    phone_number: phone,
    message: message,
  };

  // Invia l'email tramite EmailJS
  emailjs.send("service_69x7wj7", "template_tcqory8", templateParams) // Usa il tuo Service ID e Template ID
    .then(function(response) {
      alert("Grazie per averci contattato! Il tuo messaggio è stato inviato.");
      document.getElementById("contact-form").reset(); // Resetta il modulo
    }, function(error) {
      alert("Errore nell'invio del messaggio. Riprova più tardi.");
    });
});
