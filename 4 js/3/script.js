// let obj ={
//     name:"alok",
//     age:23,
//     email:"test@gmail.com"
// }

// console.log("this is original obj : ",obj); 

// let a={...obj};

// let a=Object.assign({},obj);    

// console.log("this is copy  a:",a);

// obj.name="Alok Kumar";

// console.log("this is original  obj after change : ",obj);

// console.log("this is copy a after change : ",a);    


// obj.name="Alok Kumar";
// console.log(obj);


// const pro=new Promise((resolve,reject)=>{
//     setTimeout(()=>{
//         // resolve("this is resolve");
//         reject("this is reject");
//     },1000)
// })

// console.log("before Resolving the Promise",pro);

// pro.then((data)=>{
//     console.log("this is then block",data);
// })
// .catch((err)=>{
//     console.log("this is catch block",err);
// }   )


// console.log("this is test")

// let fhead=document.querySelector("#fhead");


// console.log("this is the initial fhead -->",fhead.innerHTML);

// fhead.innerHTML="this is changes fhead";
// console.log("this is the changes fhead -->",fhead.innerHTML);

// console.log("this is outerHTML",fhead.outerHTML);   
// console.log("this is innerHTML",fhead.innerHTML);

let child=document.querySelector("#child");
// console.log("this is the initial child -->",child.innerHTML);

// find the parent of the child
// let parent=child.parentElement;
// console.log("this is the parent of the child -->",parent);