// Q1

let elemnt = document.getElementsByClassName("text")[0];
elemnt.style.color = "white"
elemnt.style.backgroundColor  = "crimson";



// Q2
let elemnt1 = document.getElementById("miss1");
elemnt1.style.fontWeight = "bold";
elemnt1.classList.add =("miss")


// Q3
let elemnt3 = document.getElementsByTagName("img")[0];
elemnt3.src ="https://cdn.tuwaiq.edu.sa/landing/images/logo/logo-h.png";


// Q4
let element4 = document.querySelector('#myul');


for (let i = 1; i <= 3; i++) {
    let li = document.createElement('li');
    li.textContent = `Tuwaiq ${i}`;
    element4.appendChild(li);

}


// Q5


const table = document.createElement('table');
table.classList.add('width_table'); 


for (let row = 1; row <= 2; row++) {
    let tr = document.createElement('tr'); 

    
    for (let col = 1; col <= 3; col++) {
        let td = document.createElement('td'); 
        td.textContent = `Abdulaziz`; 
        tr.appendChild(td); 
    }

    table.appendChild(tr); 
}


document.getElementById('table').appendChild(table);



