let username = "Desmond Jennings";
let nameCode = encodeURIComponent(username);
let maxAge = 60*60*24*365;
let y = document.cookie = "name=" + nameCode + ";max-age=" + maxAge;
console.log(y);