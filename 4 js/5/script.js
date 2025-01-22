let firstP=new Promise((resolve,reject)=>{
    console.log('first promise');
    reject( new Error('inter server error'));
})

console.log(firstP)