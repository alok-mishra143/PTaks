import bun from 'bun';
const password = "super-secure-pa$$word";

const hash = await Bun.password.hash(password.repeat(100),{
    algorithm:'bcrypt',
  
});
console.log(hash);


const isMatch = await Bun.password.verify(password, hash);
console.log(isMatch);