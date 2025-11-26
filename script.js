// // trovare un elemento nel dom

// // getElementById
// const divOne = document.getElementById('div1');
// console.log(divOne);

// //getElementsByClassName
// const pCollection = document.getElementsByClassName('pippo'); // prende per calsse
// console.log(pCollection);

// const divCollection = document.getElementsByClassName('pluto');// per classe 
// console.log(divCollection);

// //getElementsByTagName
// const tagCollection = document.getElementsByTagName('p');
// console.log(tagCollection);

// //querySelector
// const firstP = document.querySelector('p');// 
// console.log(firstP);

// //querySelectorAll
// const allPs = document.querySelectorAll('p');// tutti i p
// console.log(allPs);

// const allPippo = document.querySelectorAll('.pippo');// con la clasee 
// console.log(allPippo);

// const divOneA = document.querySelector('#div1'); // indagare 
// console.log(divOneA);


// ///// LEGGERE IL CONTENUTO

// console.log(divOne.innerText);
// console.log(divOne.textContent);
// console.log(divOne.innerHTML);
// console.log(divOne.outerHTML);
// console.log(divOne.children);



// const newP = document.createElement('p');
// divOne.appendChild(newP);

// ////createTextNode
// const node = document.createTextNode('quarto');
// newP.appendChild(node);


// //innerHTML
// newP.innerHTML = 'quarto paragrafo'
// newP.innerHTML = '<strong>quarto paragrafo</strong>'


// //esempio

// const student1 = {name: 'alexander', surname:'macias', age: 26, gender:'male'};
// const student2 = {name: 'evelyn', surname:'medina', age: undefined, gender:'female'};



// const fruits = [
//     {name: "banana", origin: "ecuador", weight: 100},
//     {name: "mela", origin: "italia", weight: 200},
//     {name: "mango", origin: "venezuela", weight: 50},
//     {name: "avocado", origin: "perù", weight: 10},
//     {name: "papaya", origin: "guatemala", weight: 70},
// ];

// //appent 
// const emtyDiv = document.getElementById("empty-div");
// const cardDiv = document.createElement("div");

// cardDiv.id= "fist-card";

// emtyDiv.appendChild(cardDiv);

// const nameP = document.createElement("p");
// const namenode = document.createTextNode("nome "+student1.name);
// nameP.appendChild(namenode);
// cardDiv.appendChild(nameP);

// const surnameP = document.createElement("p");
// const surnamenode = document.createTextNode("nome "+student1.surname);
// surnameP.appendChild(surnamenode);
// cardDiv.appendChild(surnameP);


// const ageP = document.createElement("p");
// ageP.appendChild(document.createTextNode("eta" + student1.age));
// cardDiv.appendChild(ageP);



// const genderP = document.createElement("p");
// genderP.appendChild(document.createTextNode("genere " + student1.gender));
// cardDiv.appendChild(genderP);
// /////

// const emptyDiv2 = document.getElementById("empty-div2");
// const cardDiv2 = document.createElement("div");

// emptyDiv2.appendChild(cardDiv2);


// const containerF = document.getElementById("empty-div2");

// for(let i =  0 ; i<fruits.length ; i++){
//     const newcard2 = document.createElement("div");
//     newcard2.classList.add("fru-card");

//     const namef = document.createElement('p');
//     const nameNodef = document.createTextNode('nome: ' + fruits[i].name);
//     namef.appendChild(nameNodef);
//     cardDiv2.appendChild(namef);

//     const orif = document.createElement('p');
//     const oriNodef = document.createTextNode('provenienza: ' + fruits[i].origin);
//     orif.appendChild(oriNodef);
//     cardDiv2.appendChild(orif);

//     const weightf = document.createElement('p');
//     const weightNodef = document.createTextNode('peso: ' + fruits[i].weight);
//     weightf.appendChild(weightNodef);
//     cardDiv2.appendChild(weightf);

// }

// // innerhtml
// const htmlstr = `<div class = "card">
//     <p>nome :${student2.name}</p>
//     <p>cognome :${student2.surname} </p>
//     <p>età :${student2.age}</p>
//     <p>genere :${student2.gender}</p>
// </div>`;
// console.log(htmlstr);
// console.log(emtyDiv.innerHTML);
// emtyDiv.innerHTML += htmlstr; 


// // aggiungo cvlaswse


// const card = document.getElementById("fist-card");
// // card.className = "card";
// // card.className = "green"

// card.classList.add("card");
// card.classList.toggle("green")





// const cosmetici = [
//     {
//         id: 1,
//         nome: "Crema Idratante Viso",
//         marca: "Nivea",
//         categoria: "Skincare",
//         prezzo: 12.99,
//         ingredientiPrincipali: ["Aloe Vera", "Acido Ialuronico", "Vitamina E"],
//         usoConsigliato: "Mattina e sera",
//         recensioni: 4.5,
//         inStock: true
//     },
//     {
//         id: 2,
//         nome: "Mascara Volume",
//         marca: "Maybelline",
//         categoria: "Makeup",
//         prezzo: 9.99,
//         ingredientiPrincipali: ["Cera d'Api", "Pigmenti Minerali"],
//         usoConsigliato: "Ogni volta che si desidera",
//         recensioni: 4.7,
//         inStock: true
//     },
//     {
//         id: 3,
//         nome: "Shampoo Antiforfora",
//         marca: "Head & Shoulders",
//         categoria: "Haircare",
//         prezzo: 6.49,
//         ingredientiPrincipali: ["Piroctone Olamine", "Zinco Pyrithione"],
//         usoConsigliato: "2-3 volte a settimana",
//         recensioni: 4.3,
//         inStock: true
//     },
//     {
//         id: 4,
//         nome: "Balsamo Labbra",
//         marca: "Burt's Bees",
//         categoria: "Skincare",
//         prezzo: 4.99,
//         ingredientiPrincipali: ["Cera d'Api", "Olio di Cocco"],
//         usoConsigliato: "Quotidianamente",
//         recensioni: 4.8,
//         inStock: true
//     },
//     {
//         id: 5,
//         nome: "Fondotinta Liquido",
//         marca: "L'Oréal Paris",
//         categoria: "Makeup",
//         prezzo: 14.99,
//         ingredientiPrincipali: ["Olio di Jojoba", "SPF 15"],
//         usoConsigliato: "Mattina",
//         recensioni: 4.2,
//         inStock: true
//     },
//     {
//         id: 6,
//         nome: "Siero Anti-Age",
//         marca: "The Ordinary",
//         categoria: "Skincare",
//         prezzo: 19.99,
//         ingredientiPrincipali: ["Retinolo", "Vitamina C"],
//         usoConsigliato: "Sera",
//         recensioni: 4.6,
//         inStock: false
//     },
//     {
//         id: 7,
//         nome: "Ombretto Palette",
//         marca: "NYX",
//         categoria: "Makeup",
//         prezzo: 16.99,
//         ingredientiPrincipali: ["Pigmenti Minerali", "Olio di Ricino"],
//         usoConsigliato: "Occasioni speciali",
//         recensioni: 4.4,
//         inStock: true
//     },
//     {
//         id: 8,
//         nome: "Detergente Viso",
//         marca: "La Roche-Posay",
//         categoria: "Skincare",
//         prezzo: 13.99,
//         ingredientiPrincipali: ["Acqua Termale", "Glicerina"],
//         usoConsigliato: "Mattina e sera",
//         recensioni: 4.7,
//         inStock: true
//     },
//     {
//         id: 9,
//         nome: "Lacca per Capelli",
//         marca: "TRESemmé",
//         categoria: "Haircare",
//         prezzo: 7.99,
//         ingredientiPrincipali: ["Alcool Denat.", "Pantenolo"],
//         usoConsigliato: "Dopo lo styling",
//         recensioni: 4.0,
//         inStock: true
//     },
//     {
//         id: 10,
//         nome: "Correttore Occhiaie",
//         marca: "MAC",
//         categoria: "Makeup",
//         prezzo: 22.99,
//         ingredientiPrincipali: ["Olio di Argan", "Caffeina"],
//         usoConsigliato: "Mattina",
//         recensioni: 4.9,
//         inStock: true
//     },
//     {
//         id: 11,
//         nome: "Maschera Capelli",
//         marca: "Garnier",
//         categoria: "Haircare",
//         prezzo: 5.99,
//         ingredientiPrincipali: ["Olio di Avocado", "Cheratina"],
//         usoConsigliato: "1 volta a settimana",
//         recensioni: 4.5,
//         inStock: true
//     },
//     {
//         id: 12,
//         nome: "Blush in Polvere",
//         marca: "Milani",
//         categoria: "Makeup",
//         prezzo: 10.99,
//         ingredientiPrincipali: ["Mica", "Olio di Jojoba"],
//         usoConsigliato: "Quotidianamente",
//         recensioni: 4.3,
//         inStock: true
//     },
//     {
//         id: 13,
//         nome: "Tonico Viso",
//         marca: "Clinique",
//         categoria: "Skincare",
//         prezzo: 18.99,
//         ingredientiPrincipali: ["Acido Salicilico", "Camomilla"],
//         usoConsigliato: "Dopo la detersione",
//         recensioni: 4.6,
//         inStock: true
//     },
//     {
//         id: 14,
//         nome: "Smalto Semipermanente",
//         marca: "OPI",
//         categoria: "Nailcare",
//         prezzo: 11.99,
//         ingredientiPrincipali: ["Resine Acriliche", "Pigmenti"],
//         usoConsigliato: "Ogni 2 settimane",
//         recensioni: 4.8,
//         inStock: false
//     },
//     {
//         id: 15,
//         nome: "Profumo Donna",
//         marca: "Chanel",
//         categoria: "Fragrance",
//         prezzo: 99.99,
//         ingredientiPrincipali: ["Note di Vaniglia", "Fiori Bianchi"],
//         usoConsigliato: "Occasioni speciali",
//         recensioni: 4.9,
//         inStock: true
//     },
//     {
//         id: 16,
//         nome: "Scrub Corpo",
//         marca: "The Body Shop",
//         categoria: "Bodycare",
//         prezzo: 15.99,
//         ingredientiPrincipali: ["Zucchero di Canna", "Olio di Mandorle"],
//         usoConsigliato: "2 volte a settimana",
//         recensioni: 4.4,
//         inStock: true
//     },
//     {
//         id: 17,
//         nome: "Eyeliner Liquido",
//         marca: "Kiko Milano",
//         categoria: "Makeup",
//         prezzo: 8.99,
//         ingredientiPrincipali: ["Pigmenti Neri", "Glicerina"],
//         usoConsigliato: "Quotidianamente",
//         recensioni: 4.2,
//         inStock: true
//     },
//     {
//         id: 18,
//         nome: "Crema Mani",
//         marca: "Neutrogena",
//         categoria: "Skincare",
//         prezzo: 6.99,
//         ingredientiPrincipali: ["Glicerina", "Olio di Karité"],
//         usoConsigliato: "Quotidianamente",
//         recensioni: 4.5,
//         inStock: true
//     },
//     {
//         id: 19,
//         nome: "Spray Fissante Makeup",
//         marca: "Urban Decay",
//         categoria: "Makeup",
//         prezzo: 24.99,
//         ingredientiPrincipali: ["Alcool Denat.", "Glicerina"],
//         usoConsigliato: "Dopo il trucco",
//         recensioni: 4.7,
//         inStock: true
//     },
//     {
//         id: 20,
//         nome: "Olio per Capelli",
//         marca: "Moroccanoil",
//         categoria: "Haircare",
//         prezzo: 39.99,
//         ingredientiPrincipali: ["Olio di Argan", "Vitamina E"],
//         usoConsigliato: "1-2 volte a settimana",
//         recensioni: 4.8,
//         inStock: true
//     }
// ];

// const container2 = document.getElementById('cosmetic');

// for (const cosme of cosmetici) {
    
//     const costHtml = `<div class="card">
//     <p>nome: ${cosme.nome}</p>
//     <p>marca: ${cosme.marca}</p>
//     <p>categoria: ${cosme.categoria} </p>
//     <p>ingredienti: ${cosme.ingredientiPrincipali.join(", ")} </p>
    
// </div>`

// container2.innerHTML += costHtml;

// }


/// eventi 
function pressButt(){
    alert("sads!!!!da");
}
//ADD EVENT LISTER
const mybuttom = document.getElementById('preescounter');

let totalpress= 0 ;
function addpress(){
    totalpress+= 1;
    console.log(totalpress);
    const disp = document.getElementById("pressdisp");
    disp.innerHTML += "hai schiacciato "+ totalpress+ "  volte " ;


}
mybuttom.addEventListener("click", addpress)



///CLAASSS TOGLE

const swichButtom = document.getElementById("change");
function swichN() {
    console.log("accesso");
    swichButtom.classList.toggle("on");
    const span = document.querySelector("#change span")
    if (span.innerText === 'OFF'){
        span.innerText = 'ON';
    }else {
        span.innerText = 'OFF';
    }
}
swichButtom.addEventListener("click", swichN);

const baddy = document.getElementById("bad-div");

baddy.addEventListener("mouseenter", ()=>baddy.innerHTML = "che fai mi tocchi ??")
baddy.addEventListener("mouseleave", ()=>baddy.innerHTML = "fai attenzione")



