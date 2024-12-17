
document.getElementById("btn").addEventListener("click",onclick);

function onclick () {
    let P= document.getElementById("loan").valueAsNumber
    let N= document.getElementById("years").valueAsNumber *12
    let R= document.getElementById("rate").valueAsNumber /100/12;
    let A= P * R * (1+R) **N / ((1+R) **N - 1);
    let total_pay =A * N;
    let total_interest = total_pay -P;
    document.getElementById("Total amount of loan").innerHTML = "The monthly payment is $" +
    A.toFixed(2) + ".<br> The total payment is $" +total_pay.toFixed(2) +
    ".<br>The Total interest is $ " +total_interest.toFixed(2) +"."
    
}
