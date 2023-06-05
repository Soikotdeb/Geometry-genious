

  //this is the common function use multipple js  file

function getInputFieldValueById(inputFieldId){
    const inputField=document.getElementById(inputFieldId);
    const inputFieldValueString=inputField.value;
    const inputFieldValue=parseFloat(inputFieldValueString);
    inputField.value='';
    return inputFieldValue;
}




// this is the common function to the change background color
    function changeBackgroundOnHover(elementId) {
    const element = document.getElementById(elementId);
  
    element.addEventListener('mouseover', () => {
     const randomColor = Math.floor(Math.random() * 16777215).toString(16);
    element.style.backgroundColor = '#' + randomColor;

   });
  }