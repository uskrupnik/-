'use strict';
    
// № 1

function isNumberInRange(n){
  if (n> 0 && n < 10){
    return true;
  }else{
    return false;
  }
}
console.log( isEven(8));
console.log( isEven(15));

// № 2
function isEven(a) {
  if( a % 2 == 0){
    return true;
  }else{
    return false;
}
}
console.log( isEven(15));
console.log( isEven(26));

  
 // № 3
var value = +prompt('value?', ' ');
switch (value){
  case 0:
    alert(0);
    break
  case 1:
    alert(1);
    break
  case 2:
  case 3:
    alert('2,3');
  break
} 



// № 4 (a)
function min(a, b){
  if (a < b) 
    return a;
  if (a > b) 
    return b;
    return false;
  }

console.log( min( 9,9 ) );

// № 4(b)
function min(a, b) {
   if (a < b) {
    return a;
  } else if (a > b) {
    return b;
  }else{ return 'false'}
}