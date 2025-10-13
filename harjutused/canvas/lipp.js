function eestiLipp(){
    const lipp=document.getElementById("lipp");
    if(lipp.getContext){
        let l = lipp.getContext("2d");
        l.fillStyle="blue";
        l.fillRect(0,0,330,70);
        l.fillStyle="black";
        l.fillRect(0,70,330,70);
        l.fillStyle="white";
        l.fillRect(0,140,330,70);
    }
}

function itaaliaLipp(){
    const lipp=document.getElementById("lipp");
    if(lipp.getContext){
        let l = lipp.getContext("2d");
        l.fillStyle="green";
        l.fillRect(0,0,110,210);
        l.fillStyle="white";
        l.fillRect(110,0,110,210);
        l.fillStyle="red";
        l.fillRect(220,0,110,210);
    }
}

function albaaniaLipp(){
    const lipp=document.getElementById("lipp");
    if(lipp.getContext){
        let l = lipp.getContext("2d");
        l.fillStyle="red";
        l.fillRect(0,0,330,210);

        const insignia=new Image();
        insignia.src="https://upload.wikimedia.org/wikipedia/commons/b/b7/Albanian_Eagle.svg";
        insignia.onload = () => {
            l.drawImage(insignia, 110,50,110,120);
        }
    }
}

/*

1. lipp kus on vapp/logo
2. tahvel canvas peal joonisstab valgusfoor (kolm nupu - go, wait, hold)

*/