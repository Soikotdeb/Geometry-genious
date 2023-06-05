

function calculateRectangularArea() {
  // First get Value 
   const rectangleWidthInputField =   getInputFieldValueById('rectangle-width-input');
   // validate width input
  if (isNaN(rectangleWidthInputField)) {
     alert('Please enter a valid number for the base.');
     return;
 
   }
   if(rectangleWidthInputField <=0){
     alert('You enter negative value ! try positive value');
     return;
   }
 
  //  Second get Value
     const rectangleLengthInputField =   getInputFieldValueById('rectangle-length-input');
 
     // validate Height input
     if (isNaN(rectangleLengthInputField)) {
        alert('Please enter a valid number for the Height.');
        return;
      }
      if (rectangleLengthInputField <=0){
        alert('You enter negative value ! try positive value');
        return;
      }

     const rectangelTotal = rectangleWidthInputField * rectangleLengthInputField;
    const resultElement = document.getElementById('rectangle-total');
    const resultElementString = resultElement.innerText;
    let resultElementValue = parseFloat(resultElementString);
     resultElement.innerText = rectangelTotal.toFixed(2);

 }

  document.getElementById('rectangle-btn').addEventListener('click' , function(){
   calculateRectangularArea();
  })
 
  changeBackgroundOnHover('my-change');    