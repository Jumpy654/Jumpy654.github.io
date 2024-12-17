document.getElementById("b").addEventListener('click', onclick);

function onclick () {
    let score = document.getElementById("score").valueAsNumber;
    let letter = "";
    if (score >= 97){
        letter= "A+";
    } else if (score >= 93) {
        letter = "A";
    } else if (score >= 90) {
        letter ="A-";
    } else if (score >= 87) {
        letter ="B+ ";
    } else if (score >= 83) {
        letter = "B ";
    } else if (score >= 80) {
        letter = "B- "; 
    } else if (score >= 77) {
        letter = "C+ ";
    } else if (score >= 73) {
        letter = "C ";
    } else if (score >= 70) {
        letter = "C- ";
    } else if (score >= 67) {
        letter = "D+ ";
    } else if (score >= 63) {
        letter = "D "; 
    }else if (score >= 60) {
        letter = "D- ";
    }else if (score >= 0) {
        letter = "F ";
    }
   document.getElementById ("letter").innerHTML = "Your grade is " + letter;
}



       