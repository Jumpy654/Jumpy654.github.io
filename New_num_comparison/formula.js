document.getElementById("btn").addEventListener("click",onclick);
function onclick (){
    // get value from input box
   let a = document.getElementById("First").valueAsNumber;
   let b = document.getElementById("Second").valueAsNumber;
   let c = document.getElementById("Third").valueAsNumber;
   
    // compare them and get the largest one

if (b > a )
   a = b;
if (c > a )
    a = c;


 
    //display largest one
document.getElementById("result").innerHTML = "The maximum is " + a + ".";

}
    
   