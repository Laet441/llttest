require("dotenv").config();

// let gh = "https://laet441.github.io/llttest/";
let db = "https://loett-f231.restdb.io/rest/test";

fetch(db, { headers: {
  'Content-Type': 'application/json',
  'cache-control': 'no-cache',
  'x-apikey': process.env.API_KEY
} })
.then(response => response.json())
.then(data => console.log(data))
.catch(error => console.error(error))

// console.log(process.env);//.API_KEY);
// 
// console.log("BRUH");

