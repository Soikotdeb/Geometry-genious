

document.getElementById('rhombus-btn').addEventListener('click',  function(){
 //function call Rhombus-d1field input field
    const rhombusFirstField  =getInputFieldValueById('Rhombus-d1field');

// function call Rhombus-d2field input field
    const  rhombusSecondField   =getInputFieldValueById('Rhombus-d2field');

// get previous value
    const rhombusTotalElement = document.getElementById('rhombus-total');
    const previousRhombusTotalString = rhombusTotalElement.innerText;
    const  previousParallelogramTotal = parseFloat(  previousRhombusTotalString);

    // calculate and set the value
    const rhombusTotal= 0.5 * rhombusFirstField *  rhombusSecondField ;
    rhombusTotalElement.innerText=rhombusTotal.toFixed(2);


});

// // set the auto change background color
changeBackgroundOnHover('rhombus-color');       
 