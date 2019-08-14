/*
 1 - Expose only public memebers
 2 - Modularize code into re-useable    
 3 - Expose only public Members

 - Not Easy to extend or build on
 - Functions may be duplicated when creating new objects
*/


const caclulatorRevealingModule = function (eq){
  const elem = document.getElementById(eq); 
   const adding = function(x,y){
       let val = x + y; 
       elem.innerHTML = val; 
   }
   return { add: adding}
}('revealOut'); 
