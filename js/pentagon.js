
  document.getElementById('pentagon-btn').addEventListener('click', function(){
    //function call Pentagon-first input field
    const newPentagonField =getInputFieldValueById('Pentagon-first');

    // function call Pentagon-second input field
    const  pentagonSecondValue =getInputFieldValueById('Pentagon-second');

        //   previous pentagon
        const pantagonTotalElement=document.getElementById('pentagon-total');
         const previousPantagonTotalString=pantagonTotalElement.innerText;
        previousPantagonTotal=parseFloat(previousPantagonTotalString);

        // calculate and set the value
    const newPantagonTotal= 0.5 * pentagonSecondValue * newPentagonField;
    pantagonTotalElement.innerText=newPantagonTotal.toFixed(2);


  });

       // set rendom background color
  changeBackgroundOnHover('color-pentagon');
  