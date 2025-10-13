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

// pilt
function pilt(){
    const tahvel=document.getElementById("tahvel");
    if(tahvel.getContext){
        let t = tahvel.getContext("2d");

        const fail=new Image();
        fail.src="https://picsum.photos/200/300?random=1";
        t.drawImage(fail, 50, 50, 100, 200);
    }
}