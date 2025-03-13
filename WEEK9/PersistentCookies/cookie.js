function check() {
    var expiresDate = new Date();
    var username = document.getElementById("username").value;
    expiresDate.setFullYear(expiresDate.getFullYear() + 1);
    let p = document.cookie = "username=" + encodeURIComponent(username) + "; expires=" + expiresDate.toUTCString();
    console.log(p);
}
document.getElementById("submit").addEventListener("click", check, false);
