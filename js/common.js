// For get the Function
function getAllTheNameById(enterYourId){
    let findTheName = document.getElementById(enterYourId);
    let findTheValue = findTheName.innerText;
    return findTheValue;
}

// For set the Function
function setTheValueById(element, value){
    let findId = document.getElementById(element);
    findId.innerText = value;
}

// For get all input field
function getAllInputField(enterYourId){
    let findTheId = document.getElementById(enterYourId);
    let findTheValueOfId = findTheId.value;
    let convertIntoNumber = parseFloat(findTheValueOfId);
    return convertIntoNumber;
}
