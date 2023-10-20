var value = 0;

document.getElementById("decrement").addEventListener("click", function(){
   value -= 1;
   document.getElementById("count").innerText = value;
})

document.getElementById("reset").addEventListener("click", function(){
    value = 0;
    document.getElementById("count").innerText = value;
 })

 document.getElementById("increment").addEventListener("click", function(){
    value += 1;
    document.getElementById("count").innerText = value;
 })