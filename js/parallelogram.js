

        document.getElementById('parallelogram-btn').addEventListener('click',  function(){
                //function call base-field input field
                const baseField  = getInputFieldValueById('base-field');
                
                 //function call hight-field input field
                 const heightField  = getInputFieldValueById('height-field');

                  // get previous value
                const parallelogramTotalElement = document.getElementById('parallelogram-total');
                const previousParallelogramTotalString = parallelogramTotalElement.innerText;
                  const  previousParallelogramTotal = parseFloat( previousParallelogramTotalString);
    
         // calculate rectangle
         const newParallelogramTotal= baseField   * heightField;
          parallelogramTotalElement.innerText=newParallelogramTotal.toFixed(2);

        });


        // // set the auto change background color
        changeBackgroundOnHover('color-change');
