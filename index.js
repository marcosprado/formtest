function submitForm() {

  let errorMessage = document.getElementById("errorMessage");   
   
  let elements = document.querySelectorAll("input");

  //Check whether any fields are empty and draws red frame around them. Also shows a message to the user. 
  if (elements != null) {
    let anyEmptyField = false;
    elements.forEach((element) => {
      if (element.value === "") {
        element.style.borderColor = "red";
        anyEmptyField = true;
      }
    });
    if (anyEmptyField) {
        errorMessage.innerHTML = "One or more fields are missing. Please, check."
        return;
    }
  }

  //Create JSON object and populate with Name and Message fields

  let formInfo = new Object();
  formInfo.name = document.getElementById("name").value;
  formInfo.message = document.getElementById("message").value;

  //Checking for correct phone number format and email(draws a blue frame if number is not correct)

  let falseNumber = document.getElementById("number").value;
  let regexValidNumber = /^[0-9+ -]+$/;
 
  let falseEmail = document.getElementById("email").value;
  let regexEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  if (!regexValidNumber.test(falseNumber)) {
    console.log("This is an invalid phone number");
    document.getElementById("number").style.borderColor = "blue";

    errorMessage.innerHTML =
      "This is an invalid phone number";
    

    return;
  } else if (!regexEmail.test(falseEmail)) {
    console.log("This is an invalid email");

    errorMessage.innerHTML =
      "This is an invalid email";
    return;
  } else {

    errorMessage.innerHTML =
      "";

    //populates the Object with number if the format is correct, excluding special characters (+, - and spaces)
    let regex = /\D/g;
    formInfo.number = falseNumber.replace(regex, "");

    //populates the Object with email
    formInfo.email = falseEmail;

    //Convert string to Json Object and prints it on the console
    let string = JSON.stringify(formInfo);
    console.log(JSON.parse(string));


  }
}
