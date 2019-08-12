// Design with prototype patter

console.log("In Prototype")
 window.onload = function(){
    console.log("In Prototype");
    const c = new Calculator('eq'); 
    c.add(2,2);
    

    //Module calculator pattern from other JS file
    const c2 = new CalculatorModule('Output'); 
    c2.add(3,5);
 }



const Calculator = function(eq){
    this.eqCtl = document.getElementById(eq); 
}; 

Calculator.prototype = {
  add: function(x,y){
      let val = x + y;
      this.eqCtl.innerHTML = val; 
  }

}; 


// Provides three benefits
// 1- Code reuse 
// 2- Maintanence simplified
// 3- Can take items out of the global scope
