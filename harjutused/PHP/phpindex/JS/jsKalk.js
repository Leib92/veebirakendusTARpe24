function juhuslikPilt() {
    const pildid=[
        'pilt/mtndew.jpg',
        'pilt/pepsi.jpg',
        'pilt/rootbeer.jpg'

    ];
    const randomPilt=document.getElementById('randomPilt');
    // Math.random() - juhuslik arv
    // Math.floor - võtab arvust täisosa
    // pildid.length - mitu pilti on massiivis
    const juhuslikArv=Math.floor(Math.random() * pildid.length);

    randomPilt.src=pildid[juhuslikArv];
}

function piltMyVastus(){
    let randomPilt=document.getElementById('randomPilt');
    let vastus=document.getElementById('vastus');
    // getElementsByName() - mitu elements ühe nimega valik
    let valik=document.getElementsByName('valik');

    // tsükel for
    for (let i = 0; i < valik.length; i++) {
        if(valik[i].checked){
            // radio nupust võtakse value mida võrdleme pildi asukohaga
            if(randomPilt.getAttribute('src')==valik[i].value){
                vastus.innerHTML="Õige vastus!";
                vastus.style.color='green';
            }
            else{
                vastus.innerHTML="Vale vastus!";
                vastus.style.color='red';
            }
        }
    }
}
function arvuta(kogus, hind){
    // toFixed - ümardab 2 numbri peale koma
    return (kogus*hind).toFixed(2);
}
const productHind1=1;
const productHind2=2;
const productHind3=3;

function arvutaProduct(){
    let vastus2=document.getElementById('vastus2');
    let tk=document.getElementById('tk');
    let v1=document.getElementById('v1');
    let v2=document.getElementById('v2');
    let v3=document.getElementById('v3');

    if(v1.checked){
        vastus2.innerHTML=arvuta(tk.value, productHind1)+" euro";
    }
    if(v2.checked){
        vastus2.innerHTML=arvuta(tk.value, productHind2)+" euro";
    }
    if(v3.checked){
        vastus2.innerHTML=arvuta(tk.value, productHind3)+" euro";
    }
}