function emptyFoor(){
    const valgus=document.getElementById("valgus");
    if(valgus.getContext){
        let f=valgus.getContext("2d");
        f.beginPath();
        f.strokeStyle="black";
        f.lineWidth = 1;
        f.arc(50,50, 20, 0, 2*Math.PI, true);
        f.arc(50,100, 20, 0, 2*Math.PI, true);
        f.arc(50,150, 20, 0, 2*Math.PI, true);
        f.strokeStyle();
    }
}
function rohelineFoor(){
    const valgus=document.getElementById("valgus");
    if(valgus.getContext){
        let f=valgus.getContext("2d");
        //1
        f.beginPath();
        f.strokeStyle="black";
        f.lineWidth = 1;
        f.arc(50,50, 20, 0, 2*Math.PI, true);
        f.stroke();
        //2
        f.beginPath();
        f.strokeStyle="black";
        f.lineWidth = 1;
        f.arc(50,100, 20, 0, 2*Math.PI, true);
        f.stroke();
        //3
        f.beginPath();
        f.fillStyle="green";
        f.lineWidth = 1;
        f.arc(50,150, 20, 0, 2*Math.PI, true);
        f.fill();
    }
}
function kollaneFoor(){
    const valgus=document.getElementById("valgus");
    if(valgus.getContext){
        let f=valgus.getContext("2d");
        //1
        f.beginPath();
        f.strokeStyle="black";
        f.lineWidth = 1;
        f.arc(50,50, 20, 0, 2*Math.PI, true);
        f.stroke();
        //2
        f.beginPath();
        f.fillStyle="yellow";
        f.lineWidth = 1;
        f.arc(50,100, 20, 0, 2*Math.PI, true);
        f.fill();
        //3
        f.beginPath();
        f.strokeStyle="black";
        f.lineWidth = 1;
        f.arc(50,150, 20, 0, 2*Math.PI, true);
        f.stroke();
    }
}
function punaneFoor(){
    const valgus=document.getElementById("valgus");
    if(valgus.getContext){
        //1
        let f=valgus.getContext("2d");
        f.beginPath();
        f.fillStyle="red";
        f.lineWidth = 1;
        f.arc(50,50, 20, 0, 2*Math.PI, true);
        f.fill();
        //2
        f.beginPath();
        f.strokeStyle="black";
        f.lineWidth = 1;
        f.arc(50,100, 20, 0, 2*Math.PI, true);
        f.stroke();
        //3
        f.beginPath();
        f.strokeStyle="black";
        f.lineWidth = 1;
        f.arc(50,150, 20, 0, 2*Math.PI, true);
        f.stroke();
    }
}

function resetFoor(){
    const valgus=document.getElementById("valgus");
    if(valgus.getContext){
        let t = valgus.getContext("2d");
        t.clearRect(0,0,300,250);
    }
}