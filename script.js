// trovare un elemento nel dom

// getElementById
const divOne = document.getElementById('div1');
console.log(divOne);

//getElementsByClassName
const pCollection = document.getElementsByClassName('pippo'); // prende per calsse
console.log(pCollection);

const divCollection = document.getElementsByClassName('pluto');// per classe 
console.log(divCollection);

//getElementsByTagName
const tagCollection = document.getElementsByTagName('p');
console.log(tagCollection);

//querySelector
const firstP = document.querySelector('p');// 
console.log(firstP);

//querySelectorAll
const allPs = document.querySelectorAll('p');// tutti i p
console.log(allPs);

const allPippo = document.querySelectorAll('.pippo');// con la clasee 
console.log(allPippo);

const divOneA = document.querySelector('#div1'); // indagare 
console.log(divOneA);


///// LEGGERE IL CONTENUTO

console.log(divOne.innerText);
console.log(divOne.textContent);
console.log(divOne.innerHTML);
console.log(divOne.outerHTML);
console.log(divOne.children);



const newP = document.createElement('p');
divOne.appendChild(newP);

////createTextNode
const node = document.createTextNode('quarto');
newP.appendChild(node);


//innerHTML
newP.innerHTML = 'quarto paragrafo'
newP.innerHTML = '<strong>quarto paragrafo</strong>'


//esempio

const student1 = {name: 'alexander', surname:'macias', age: 26, gender:'male'};
const student2 = {name: 'evelyn', surname:'medina', age: undefined, gender:'female'};



const fruits = [
    {name: "banana", origin: "ecuador", weight: 100},
    {name: "mela", origin: "italia", weight: 200},
    {name: "mango", origin: "venezuela", weight: 50},
    {name: "avocado", origin: "perù", weight: 10},
    {name: "papaya", origin: "guatemala", weight: 70},
];

//appent 
const emtyDiv = document.getElementById("empty-div");
const cardDiv = document.createElement("div");

cardDiv.id= "fist-card";

emtyDiv.appendChild(cardDiv);

const nameP = document.createElement("p");
const namenode = document.createTextNode("nome "+student1.name);
nameP.appendChild(namenode);
cardDiv.appendChild(nameP);

const surnameP = document.createElement("p");
const surnamenode = document.createTextNode("nome "+student1.surname);
surnameP.appendChild(surnamenode);
cardDiv.appendChild(surnameP);


const ageP = document.createElement("p");
ageP.appendChild(document.createTextNode("eta" + student1.age));
cardDiv.appendChild(ageP);



const genderP = document.createElement("p");
genderP.appendChild(document.createTextNode("genere " + student1.gender));
cardDiv.appendChild(genderP);
/////

const emptyDiv2 = document.getElementById("empty-div2");
const cardDiv2 = document.createElement("div");

emptyDiv2.appendChild(cardDiv2);
for(let i =  0 ; i<fruits.length ; i++){
const namef = document.createElement('p');
const nameNodef = document.createTextNode('nome: ' + fruits[i].name);
namef.appendChild(nameNodef);
cardDiv2.appendChild(namef);

const orif = document.createElement('p');
const oriNodef = document.createTextNode('provenienza: ' + fruits[i].origin);
orif.appendChild(oriNodef);
cardDiv2.appendChild(orif);

const weightf = document.createElement('p');
const weightNodef = document.createTextNode('peso: ' + fruits[i].weight);
weightf.appendChild(weightNodef);
cardDiv2.appendChild(weightf);

}

// innerhtml
const htmlstr = `<div class = "card">
    <p>nome :${student2.name}</p>
    <p>cognome :${student2.surname} </p>
    <p>età :${student2.age}</p>
    <p>genere :${student2.gender}</p>
</div>`;
console.log(htmlstr);
console.log(emtyDiv.innerHTML);
emtyDiv.innerHTML += htmlstr; 


// aggiungo cvlaswse


const card = document.getElementById("fist-card");
// card.className = "card";
// card.className = "green"

card.classList.add("card");
card.classList.toggle("green")




