/*
 - Can modularize the code
 - Takes variables and functions out of the global scope
 - Funcitons loaded into memory once
 - Extensible
 - Uses "this" keyword 
*/

// Create function cunstructor 
const CalculatorRevealProto = function(eq) {
  this.elm = document.getElementById(eq);     
}
// Immediatley invoking to make all included functions instantly available
CalculatorRevealProto.prototype = function(){
    const add = function(x,y){
        let val = x + y; 
     this.elm.innerHTML = val;  
    };

    return {
        add: add
    };
    
}();