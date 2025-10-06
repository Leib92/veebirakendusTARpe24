function juhuslikPilt() {
    const pildid=[
        'images/orange.jpg',
        'images/black.jpg',
        'images/white.jpg',
        'images/grey.jpg',
        'images/lill.jpg'

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
const pilt0Hind=0;
const pilt1Hind=2;
const pilt2Hind=5;
const pilt3Hind=15.5;
const piltLillHind=100;

function arvutaPiltHind(){
    let vastus2=document.getElementById('vastus2');
    let tk=document.getElementById('tk');
    let v0=document.getElementById('v0');
    let v1=document.getElementById('v1');
    let v2=document.getElementById('v2');
    let v3=document.getElementById('v3');
    let v4=document.getElementById('v4');

    if(v0.checked){
        vastus2.innerHTML=arvuta(tk.value, pilt0Hind)+" euro";
    }
    if(v1.checked){
        vastus2.innerHTML=arvuta(tk.value, pilt1Hind)+" euro";
    }
    if(v2.checked){
        vastus2.innerHTML=arvuta(tk.value, pilt2Hind)+" euro";
    }
    if(v3.checked){
        vastus2.innerHTML=arvuta(tk.value, pilt3Hind)+" euro";
    }
    if(v4.checked){
        vastus2.innerHTML=arvuta(tk.value, piltLillHind)+" euro";
    }
}