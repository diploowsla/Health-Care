function validate(){
  var name = document.getElementById("name").value;
  var subject = document.getElementById("subject").value;
  var phone = document.getElementById("phone").value;
  var email = document.getElementById("email").value;
  var message = document.getElementById("message").value;
  var error_message = document.getElementById("error_message");
  
  error_message.style.padding = "10px";
  
  var text;
  if(name.length < 5){
    text = "Veuillez-Saisir un nom valide !";
    error_message.innerHTML = text;
    return false;
  }
  if(subject.length < 10){
    text = "Veuillez-Saisir un  Sujet Correct !";
    error_message.innerHTML = text;
    return false;
  }
  if(isNaN(phone) || phone.length != 10){
    text = "Veuillez-Saisir un numéro valide !";
    error_message.innerHTML = text;
    return false;
  }
  if(email.indexOf("@") == -1 || email.length < 6){
    text = "Veuillez-Saisir une address email valide !";
    error_message.innerHTML = text;
    return false;
  }
  if(message.length <= 140){
    text = "Veuillez-Saisir un message de plus de 140 Caractère !";
    error_message.innerHTML = text;
    return false;
  }
  alert("Formulaire envoyé avec succès");
  return true;
}