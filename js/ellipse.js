
document.getElementById('ellipse-btn').addEventListener('click', function(){
  //function call  ellipse-first-field
  const newFirstEllipses =getInputFieldValueById('ellipse-first-field');

  //function call ellipse-second-field
  const newSecondEllipse =getInputFieldValueById('ellipse-second-field')
  
    // get previous value
    const ellipseTotalElement = document.getElementById('ellipse-total');
    const previousElipseTotalString = ellipseTotalElement.innerText;
    const previousTriangleTotal = parseFloat(previousElipseTotalString );
  
    // calculate ellipse
    const newElepseTotal = 3.1416 * newFirstEllipses *  newSecondEllipse;
    ellipseTotalElement.innerText = newElepseTotal.toFixed(2);
});

        // set rendom background color
  changeBackgroundOnHover('ellipse-color');
  

  // click blog button and open new window
  const blogButton = document.getElementById('blog').addEventListener('click',function(){
    window.location.href='blog.html'
  })
  
