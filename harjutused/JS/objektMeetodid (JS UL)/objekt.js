let raamatud = {
    pealkiri: "Making Skynet 101",
    autor: "Robert",
    aasta: 2002
};

raamatud["aasta"] = 2010
console.log(raamatud);

// const book = document.getElementById("raamat");
// console.log(book.innerHTML);
// book.innerHTML = console.log(raamat);

let raamatukogu = [
    { raamat: 'Barotrauma', autor: 'Antony', aasta: 1996 },
    { raamat: 'Rift Wizard', autor: 'Tanya', aasta: 2004 },
    { raamat: 'Volley Fire', autor: 'Koslov', aasta: 2013 }
];

raamatukogu.push({ raamat: 'Future Cars 2019', autor: 'Leopold', aasta: 2018 });



raamatukogu.forEach((raamat) => {
    console.log(`
    Pealkiri: ${raamat.raamat},
    Autor: ${raamat.autor},
    Aasta: ${raamat.aasta}
    `);
});

