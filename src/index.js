// write your code here

fetch('http://localhost:3000/ramens')
.then(res=> res.json)
.then(obj=> console.log(obj))