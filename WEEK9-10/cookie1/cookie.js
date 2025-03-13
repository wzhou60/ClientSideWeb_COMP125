let username = "Desmond Jennings";
let nameCode = encodeURIComponent(username);
let expire = new Date("June 1, 2024");
let expireCode = expire.toUTCString();
let r = document.cookie = "name=" + nameCode + ";expires=" + expireCode;
console.log(r);