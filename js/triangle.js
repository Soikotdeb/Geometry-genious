
    function calculateTriangle() {
      // First get Value 
       const triangleBaseInputField =   getInputFieldValueById('triangel-base-input');
       // validate triangle width input
      if (isNaN(triangleBaseInputField)) {
         alert('Please enter a valid number for the base.');
         return;
     
       }
       if(triangleBaseInputField <=0){
         alert('You enter negative value ! try positive value');
         return;
       }
     
      //  Second get Value
         const triangleHeightInputField =   getInputFieldValueById('triangel-height-input');
     
         // validate triangle Height input
         if (isNaN(triangleHeightInputField)) {
            alert('Please enter a valid number for the Height.');
            return;
          }
          if (triangleHeightInputField <= 0){
            alert('You enter negative value ! try positive value');
            return;
          }
      // sum and set the value
         const triangleTotal = 0.5 * triangleBaseInputField * triangleHeightInputField;
        const resultTriangleElement = document.getElementById('triangle-total');
        const resultTriangleElementString = resultTriangleElement.innerText;
        let resultElementValue = parseFloat(resultTriangleElementString);
         resultTriangleElement.innerText = triangleTotal.toFixed(2);
    
     }
    
      document.getElementById('triangle-btn').addEventListener('click' , function(){
        calculateTriangle();

      })
     
        // set rendom background color
         changeBackgroundOnHover('my-element');  
      
      
    
     