// sirge joon
function sirgeJoon(){
    // määrame tahvli
    const tahvel=document.getElementById("tahvel");
    if(tahvel.getContext){
        let t=tahvel.getContext("2d"); // anname tahvlinimi on t
        // joon
        t.beginPath();
        t.strokeStyle="blue";
        t.lineWidth = 1;
        t.moveTo(20,80); // alguspunkt
        t.lineTo(50,30); // lõpppunkt
        t.stroke();
    }
}

// kolmnurk joob
function kolmnurk(){
    // määrame tahvli
    const tahvel=document.getElementById("tahvel");
    if(tahvel.getContext){
        let t=tahvel.getContext("2d"); // anname tahvlinimi on t
        // joon
        t.beginPath();
        t.strokeStyle="red";
        t.fillStyle="red";
        t.lineWidth = 1;
        t.moveTo(50,100); // alguspunkt
        t.lineTo(150,100);
        t.lineTo(150,200);
        t.lineTo(50,100); // lõpppunkt
        t.stroke();
        t.fill();
    }
}

// puhasta
function puhasta(){
    const tahvel=document.getElementById("tahvel");
    if(tahvel.getContext){
        let t = tahvel.getContext("2d");
        // 0,0 - vasak üleval tahvli nurk, 300 tahvli laius, 250 tahvli kõrgus
        t.clearRect(0,0,300,250);
    }
}

// ring
function ring(){
    // määrame tahvli
    const tahvel=document.getElementById("tahvel");
    let r=document.getElementById("raadius");
    if(tahvel.getContext){
        let t=tahvel.getContext("2d"); // anname tahvlinimi on t
        // ümberjoon
        t.beginPath();
        t.strokeStyle="green";
        t.lineWidth = 1;
        t.arc(50,50, 30, 0, 2*Math.PI, true); // x, y-keskpunkt, R (raadius)
        t.stroke();
        // ring
        t.beginPath();
        t.fillStyle="green";
        t.lineWidth = 1;
        t.arc(50,120, r.value, 0, 2*Math.PI, true); // x, y-keskpunkt, R (raadius)
        t.fill();


    }
}

// ristkylik
function ristkylik(){
    const tahvel=document.getElementById("tahvel");
    let laius=document.getElementById("laius");
    let korgus=document.getElementById("korgus");
    if(tahvel.getContext){
        let t = tahvel.getContext("2d");
        t.fillStyle="yellow";
        // 0,0 - vasak üleval tahvli nurk, tahvli laius, tahvli kõrgus
        t.fillRect(50,30,laius.value,korgus.value);
    }
}

// pildid
function pilt(){
    const tahvel=document.getElementById("tahvel");
    if(tahvel.getContext){
        let t = tahvel.getContext("2d");

        const fail=new Image();
        fail.src="https://picsum.photos/200/300?random=1";
        t.drawImage(fail, 50, 50, 100, 200);
    }
}

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
        l.drawImage(insignia, 110,50,110,120);
    }
}

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