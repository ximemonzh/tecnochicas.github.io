const formulario= document.getElementById("formulario");
/**
 *  Declaración de variables del formulario
 */
const userName= document.getElementById("userName");
const userEmail= document. getElementById ("userEmail");
const mensaje= document. getElementById ("mensaje");



// variable para la expresión regular//
const regUserName = /^[A-Za-zÑñÁáÉéÍíÓóÚúÜü\s]+$/;
const regUserEmail = /^[a-z0-9]+(\.[_a-z0-9]+)*@[a-z0-9-]+(\.[a-z0-9-]+)*(\.[a-z]{2,15})$/;


formulario.addEventListener("submit", (e)=>{
   e.preventDefault();
 
   console.log(mensaje.value);


   // validar nombre
   if(!userName.ariaValueMax.trim() || !regUserName.test(userName.value)){
      alert("Nombre invalido");

   }

//validar email

if(!userEmail.ariaValueMax.trim() || !regUserEmail.test(userEmail.value)){
    alert("Correo invalido");
)
   console.log("los estan correctos");

});
