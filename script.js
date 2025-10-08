document.getElementById("devisForm").addEventListener("submit", 
function(e) {    
e.preventDefault();    
const nom = document.getElementById("nom").value.trim();    
const email = document.getElementById("email").value.trim();  
const tel = document.getElementById("tel").value.trim();  
const message = document.getElementById("message").value.trim();   
const confimationDiv = document.getElementById("confirmationMessage");
confimationDiv.textContent= " Vous recevrez votre devis personnalisé par mail ou par whatsapp dans un délai maximal de 72 heures. Merci de nous faire confiance";
setTimeout(()=>{confimationDiv.textContent = "";
}, 7000);  
// Validation des champs    
if (!nom ||!email ||!message) {       
 alert("Veuillez remplir tous les champs.");        return;}   
 // Validation du format de l'email    
const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;    
if (!emailRegex.test(email)) {  alert("Veuillez entrer une adresse email valide.");        
return;}    
const whatsappNumber = "22958660666";    
const texte = `Bonjour, je m'appelle ${nom}. Je souhaite un devis pour: ${message}.Email: ${email}, WhatsApp: ${tel}`;    
const lien = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(texte)}`;    window.open(lien, "_blank");});

