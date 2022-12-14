function completeAndRedirect() {
    var form = document.forms['myform'];
    text.innerHTML = "The data you entered: <br> Name: " + form.elements.name.value +  "<br> Number" + form.elements.number.value+ "<br> Emaill : " + form.elements.email.value;
}