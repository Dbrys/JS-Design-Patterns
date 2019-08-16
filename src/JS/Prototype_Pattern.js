

// Design with prototype patter

 window.onload = function(){
    const c = new Calculator('eq'); 
    c.add(2,2);
    

    //Module calculator pattern from other JS file
    const c2 = new CalculatorModule('Output'); 
    c2.add(3,5);

    //Revealing module pattern
    const c3 = caclulatorRevealingModule.add(7,3);

    //Revealing Prototype Pattern 
    const calc4 = new CalculatorRevealProto('protoRevealOut')
    calc4.add(5,10);
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
