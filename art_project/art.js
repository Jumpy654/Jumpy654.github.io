let canvas_element = document.getElementById("myc");
let toolbox = canvas_element.getContext("2d");

let big = 10;
let small = 4;
let w = 600;
let h = 600;

let W = w/big;
let H = h/big;

// canvas APIs
// toolbox.fillStyle = "#BBBBBB"; "555555"
// toolbox.fillRect(big, small, w, h)

toolbox.fillStyle = "#FF0000"


for (let c = 0; c < W ; ++c) {
    for (let r = 0 ; r < H ; ++r ) {
        let x = c*big;
        let y = r*big;
       
        // decide the color
        if (c % 2 === 0 && r%2 === 0 || c%2 === 1 && r%2 === 1) {
            toolbox.fillStyle = "#BBBBBB";
        } else {
            toolbox.fillStyle = "#555555"; 
        
        }
        toolbox.fillRect(x, y, big, big);
       
    }
}
for (let c = 0; c < W ; ++c) {
    for (let r = 0 ; r < H -1; ++r ) {
        let x = c*big + big -1/2 * small;
        let y = r*big + big - 1/2 * small;
   
       
        if (c % 2 === 0 && r%2 === 0 || c%2 === 1 && r%2 === 1) {
            toolbox.fillStyle = "#FFFFFF"
        } else {
            toolbox.fillStyle = "#000000";
        }
            //Flip color if in center area

            
        if(c > 1/4* W && c < 3/4*W && r > 1/4*H && r < 3/4*H){
            if (toolbox.fillStyle === "#ffffff"){
                toolbox.fillStyle = "#000000";
            }else{ 
                toolbox.fillStyle ="#FFFFFF";
            }
        }
        
        toolbox.fillRect(x, y, small, small); 
              
                    
        }
       
}





 