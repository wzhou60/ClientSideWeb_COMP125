let username = "Desmond Jennings";
let nameCode = encodeURIComponent(username);
let f = document.cookie = "name=" + nameCode;
console.log(f);
