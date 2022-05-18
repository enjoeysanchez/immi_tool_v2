// Form Validation
function validateForm() {

var validateName = document.formProfile.profileInfo.fullName.value;
if (validateName == null || validateName == "") {  
    alert("Name can't be blank. Please type the employees full name");  
    validateName.focus();
    return false; 
    }
}

// Get information from the New Profile form
const formProfile = document.getElementById("formProfile")

formProfile.addEventListener("submit", function(event) {
    event.preventDefault()  //Prevent AutoSubmitting the form

    var fullName = document.getElementById("fullName").value
    console.log("Full Name:", fullName);

    var idNumber = document.getElementById("idNumber").value
    console.log("ID Number:", idNumber);

    var email = document.getElementById("email").value
    console.log("Email:", email);

    var jobPosition = document.getElementById("jobPosition").value
    console.log("Job Position:", jobPosition);

    var visaType = document.getElementById("visaType").value
    console.log("Visa Type:", visaType);
    
    var expDate = document.getElementById("expDate").value
    console.log("Visa Expiration Date:", expDate);

    var i140 = document.getElementById("i140").value
    console.log("I-140 Status:", i140);

    var caseNotes = document.getElementById("caseNotes").value
    console.log("Case Notes:", caseNotes);    
})


/*var validateId = document.form.idNumber.value;
var validateEmail = document.form.email.value;
var validateExpDate = document.form.expDate.validateEmail.value;*/


/*
function validateform(){  
    var name=document.myform.name.value;  
    var password=document.myform.password.value;  
      
    if (name==null || name==""){  
      alert("Name can't be blank");  
      return false;  
    }else if(password.length<6){  
      alert("Password must be at least 6 characters long.");  
      return false;  
      }  
    }  

*/


/*

    //valido el nombre
    if (document.fvalida.nombre.value.length == 0) {
        alert("Tiene que escribir su nombre")
        document.fvalida.nombre.focus()//foco en el campo del error
        return 0;
    }

    //valido la edad. tiene que ser entero mayor que 18
    edad = document.fvalida.edad.value
    edad = validarEntero(edad)
    document.fvalida.edad.value = edad
    if (edad == "") {
        alert("Tiene que introducir un número entero en su edad.")
        document.fvalida.edad.focus()
        return 0;
    } else {
        if (edad < 18) {
            alert("Debe ser mayor de 18 años.")
            document.fvalida.edad.focus()
            return 0;
        }
    }

    //valido el interés
    if (document.fvalida.interes.selectedIndex == 0) {
        alert("Debe seleccionar un motivo de su contacto.")
        document.fvalida.interes.focus()
        return 0;
    }

    //el formulario se envia
    alert("Muchas gracias por enviar el formulario");
    document.fvalida.submit();
}

function validarEntero(valor) {
    //intento convertir a entero.
    //si era un entero no le afecta, si no lo era lo intenta convertir
    valor = parseInt(valor)

    //Compruebo si es un valor numérico
    if (isNaN(valor)) {
        //entonces (no es numero) devuelvo el valor cadena vacia
        return ""
    } else {
        //En caso contrario (Si era un número) devuelvo el valor
        return valor
    }
}



*/
