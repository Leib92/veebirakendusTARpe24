function snowflakes(){
    const christmas=document.getElementById("christmas");
    if(christmas.getContext){
        let c = christmas.getContext("2d");
        c.fillStyle="darkblue";
        c.fillRect(0,0,600,400);

        const flake=new Image();
        flake.src="https://static.vecteezy.com/system/resources/previews/001/194/635/non_2x/snowflake-png.png";
        c.drawImage(flake, 50,50,25,25);
    }
}

function christmastree(){
    const christmastree=document.getElementById("christmas");
    if(christmastree.getContext){
        let t = christmastree.getContext("2d");
        const tree=new Image();
        tree.src="https://static.vecteezy.com/system/resources/previews/057/630/604/non_2x/a-beautiful-norway-spruce-with-lush-green-needles-and-a-perfect-conical-shape-set-against-a-transparent-background-emphasizing-its-natural-symmetry-free-png.png";
        t.drawImage(tree, 150,50,350,350);
    }
}

function christmasstar(){
    const christmasstar=document.getElementById("christmas");
    var x=Math.random()*(canvas.width-100)-25;
    var y=Math.random()*(canvas.height-100)-25;
    if(christmasstar.getContext){
        let s = christmasstar.getContext("2d");
        const star=new Image();
        star.src="https://static.vecteezy.com/system/resources/thumbnails/051/420/427/small/glittering-gold-star-decoration-shining-brightly-and-adding-festive-charm-free-png.png";
        s.drawImage(star, 300,40,50,50);
    }
}
