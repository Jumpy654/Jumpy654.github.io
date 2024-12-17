let canvas1 = document.getElementById('pattern1');
let painter1 = canvas1.getContext('2d');

painter1.fillStyle = "#000000";
painter1.fillRect(0, 0, 400, 400); // Background

painter1.fillStyle = "#FF0000"; // Red color
let c = 0;

while (c < 13) {
    let d = 0;
    while (d < 13) {
        painter1.fillRect(10 + c * 30, 10 + d * 30, 20, 20); // Drawing red squares
        d = d + 1;
    }
    c = c + 1;
}

let canvas2 = document.getElementById('pattern2');
let painter2 = canvas2.getContext('2d');

painter2.fillStyle = "#000000";
painter2.fillRect(0, 0, 400, 400); // Background

painter2.fillStyle = "#FF0000"; // Red color for X
for (let i = 0; i < 13; i++) {
    painter2.fillRect(10 + i * 30, 10 + i * 30, 20, 20); // Diagonal from top-left to bottom-right
    painter2.fillRect(10 + i * 30, 370 - i * 30, 20, 20); // Diagonal from top-right to bottom-left
}
