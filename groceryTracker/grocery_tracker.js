let length;
let width;

function calculateTotalAmount() {
    grocery_1 = parseFloat(document.getElementById('grocery-1').value);
    grocery_2 = parseFloat(document.getElementById('grocery-2').value);
    grocery_3 = parseFloat(document.getElementById('grocery-3').value);
    
   
   let area = grocery_1 + grocery_2 + grocery_3;
   document.getElementById('result').innerText = `The total amount is : $${area}`;
}