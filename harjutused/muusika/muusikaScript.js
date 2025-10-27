function valiAnsambel(){
    let vastus1=document.getElementsByClassName("vastus");

    let valik="";

    if(abba.checked){
        valik+=abba.value+", "
    }
    if(the.checked){
        valik+=the.value+", "
    }
    if(system.checked){
        valik+=the.value+", "
    }

    vastus1.innerHTML="Sinu valitud muusikud: " + valik;
    vastus1.style.color="red";
}

function arvamus(){
    let arvamus=document.getElementsByClassName("arvamus");
    let vastus2=document.getElementsByClassName("vastus2");

    vastus2.innerHTML="Sinu arvamus:"+arvamus.value;
}

