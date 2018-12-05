const boxes = document.querySelectorAll(".box")

let i = 0;

setInterval(function(){
boxes[i].classList.toggle('red') 
//going into each element and using .toggle to add the red background
console.log(i);
//you only see this console.log inside the developer tool
i++;
//going from 1st element (aka box) to the next one, then to the next one
if (i > 8) {
  i = 0;
}
//because we only have 9 boxes (element 0-8) so we re-set i to 0 when it reaches 8
}, 1000)
//1000mill-seond is 1 second


