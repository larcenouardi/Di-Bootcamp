// Fonction d'écoute pour les événements de chargement du DOM
document.addEventListener('DOMContentLoaded', () => {
    // Sélectionner le formulaire d'inscription et ajouter un écouteur d'événement sur l'événement "submit"
   const registerForm = document.getElementById('registerForm');
   registerForm.addEventListener('submit', handleRegisterSubmit);
 
     // Sélectionner le formulaire de connexion et ajouter un écouteur d'événement sur l'événement "submit"
   const loginForm = document.getElementById('loginForm');
     loginForm.addEventListener('submit',handleLoginSubmit);
   
 });
 
 // Gérer la soumission du formulaire d'inscription
 function handleRegisterSubmit(event) {
   event.preventDefault();
 
   const form = event.target;
   
 
   
  
 fetch('/register',{
     method:'POST',
     body:new FormData(form)
 })
 .then(response=>response.text())
 .then(data=>{
     
     if(data==='error1'){
     alert("Username or Password already exists.");
 }else if(data==='register'){
     alert("Registration successful.");
     form.reset(); }
 });
 }
 
 
 
  function handleLoginSubmit(event) {
 event.preventDefault();
 
 const form=event.target;
 
 
 fetch('/login',{
 method:'POST',
 body: new FormData(form)
 }).then(response=>response.text()).then(data=>{
 if (data==="error2"){
 
 alert ("User not registered");
 }else if(data==='login'){
     alert("Login Successful.");
     form.reset();
 }
 });
 
 }
 