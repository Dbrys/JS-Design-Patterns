// Module Pattern 
// 1- Reuse of objects
// 2- Easy to maintain 
// 3- Takes variables and function out of global scope
//*** Module relies heavily on closures


const CalculatorModule = function(eq){
   //private members 
   const eqCtl = document.getElementById(eq);

   return{ 
       //Public 
       add: function(x,y){
         let val = x + y; 
         eqCtl.innerHTML = val; 
       }
   };

}