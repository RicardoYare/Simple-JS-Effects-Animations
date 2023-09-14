
window.onload = function(){

const canvas = document.querySelector("canvas");
const ctx = canvas.getContext("2d"); // Context
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

const img = new Image();
img.src = "snowflake.png";

const sfMax = 230; //Number max of snowflakes
const sfArray = []; 

for (let i = 0; i < sfMax; i++) {
   
    sfArray.push({

        x: Math.random()*canvas.width, 
        y: Math.random()*canvas.height,        
        w: Math.random()*1,  //weight of the snow flake, speed at which they will fall

    })   
    
}

const draw = () =>{     

    ctx.clearRect(0,0, canvas.width, canvas.height);

    sfArray.forEach(e => {
        ctx.drawImage(img, e.x,e.y, 3, 3);      
    });   
    
    requestAnimationFrame(draw);
    move();
}

// let swing = 0; if I want it to swing left & right


const move = ()=>{   
    
    // swing += 0.01; 

    sfArray.forEach(e => {
       
        e.y += e.w ;
        e.x +=  0.3;  
        // e.x +=  Math.sin(swing)*0.5;          
        
       if(e.y > canvas.height)e.y = -20; // Restart position if they got out of the canvas
       if(e.x > canvas.width) e.x = -20; 
        
    });    

}

draw();

}

