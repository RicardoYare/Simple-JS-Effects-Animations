
window.onload = function(){

const canvas = document.querySelector("canvas");
const ctx = canvas.getContext("2d"); // Context
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

const img = new Image();
img.src = "snowflake.png";

const sfMax = 210; //Number max of snowflakes
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
        ctx.drawImage(img, e.x,e.y, 10, 10);      
    });   
    
    requestAnimationFrame(draw);
    move();
}

const move = ()=>{    

    sfArray.forEach(e => {
       
        e.y += e.w ;
        e.x += 0.3;           
        
       if(e.y > canvas.height)e.y = -20; //when they pass bottom, spam the snowflake above the top of the window, so they just dont pop up
       if(e.x > canvas.width) e.x = -20; // same with width
        
    });    

}

draw();

}

