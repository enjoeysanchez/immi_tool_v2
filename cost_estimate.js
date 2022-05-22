// Get information from the Cost Estimate Form
const costEstimateForm = document.getElementById("costEstimateForm")

costEstimateForm.addEventListener("submit", function(event) {
    event.preventDefault() 

    var dependentSelector = document.getElementById("dependentSelector").value
    console.log("Traveling with dependents:", dependentSelector);

    var flightTicket = document.getElementById("flightTicket").value
    console.log("Flight Ticket price in USD:", flightTicket);

    var hotel = document.getElementById("hotel").value
    console.log("Hotel/Accommodation price in USD:", hotel);

    var compensation = document.getElementById("compensation").value
    console.log("Annual Salary in USD:", compensation);

    var bonus = document.getElementById("bonus").value
    console.log("Relocation Bonus in USD:", bonus);

    var costEstimateNotes = document.getElementById("costEstimateNotes").value
    console.log("Notes:", costEstimateNotes);

})

// Total Amounts

/*
var total =
flightTicket + hotel + compensation + bonus;

console.log("The total amount for this relocation is:", total, "USD");
*/




// ----------------- Comentarios de referencia y pedazos de código que pueden servir --------------


// Form Validation

/*
function validateForm() {

var validateName = document.formProfile.profileInfo.div1.fullName.value;
if (validateName == null || validateName == "") {  
    alert("Name can't be blank. Please type the employees full name");  
    validateName.focus();
    return false; 
    }
}
*/

/*
var validateId = document.form.idNumber.value;
var validateEmail = document.form.email.value;
var validateExpDate = document.form.expDate.validateEmail.value;
*/


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
