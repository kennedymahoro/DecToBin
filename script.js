let input = prompt("A number: ") 
//let input = 20;
let inputA = document.getElementById("text-a");
let output = document.getElementById("txt-b");
inputA.innerHTML = input;
let array = [];
let button = document.querySelector("button");
// convets the values
function convert(){
  Number(input);
  while(input > 0){
    if(input % 2 == 0){
      array.push(0)
    }
    else{
      array.push(1)
    }
    input = Math.floor(input/2);
  }
  array.reverse()
  output.innerHTML = (array.join(''));
}
button.addEventListener("click",()=>{
  convert()
})