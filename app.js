
// Get information from the New Profile form
const form = document.getElementById("form")

form.addEventListener("submit", function(event) {
    event.preventDefault()  //Prevent AutoSubmitting the form

    var fullName = document.getElementById("fullName").value
    console.log("Full Name:", fullName);

    var idNumber = document.getElementById("idNumber").value
    console.log("ID Number:", idNumber);

    var email = document.getElementById("email").value
    console.log("Email:", email);

    var jobPosition = document.getElementById("jobPosition").value
    console.log("Job Position:", jobPosition);

    var expDate = document.getElementById("expDate").value
    console.log("Visa Expiration Date:", expDate);

    var caseNote = document.getElementById("caseNote").value
    console.log("Case Notes:", caseNote);
})





