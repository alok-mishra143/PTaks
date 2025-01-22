// code 1

let t1=performance.now();

for(let i=1;i<=100;i++){
    let newele=document.createElement('p');
    newele.textContent="the is para number "+i;
    document.body.appendChild(newele);
}
let t2=performance.now();
console.log("this is code1 : ",t2-t1);


// code 2
let t3=performance.now();
let test_div=document.createElement('div');

for(let i=1;i<=100;i++){
    let newele=document.createElement('p');
    newele.textContent="the is para number "+i;
    test_div.appendChild(newele);
}

document.body.appendChild(test_div);
let t4=performance.now();
console.log("this is code2 : ",t4-t3);


// code 3 best 
let t5=performance.now();
let fragment=document.createDocumentFragment();

for(let i=1;i<=100;i++){
    let newele=document.createElement('p');
    newele.textContent="the is para number "+i;
    fragment.appendChild(newele);
}
document.body.appendChild(fragment);
let t6=performance.now();
console.log("this is code3 : ",t6-t5);