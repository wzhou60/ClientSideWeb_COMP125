function check() {
    var expiresDate = new Date();
    var username = document.getElementById("username").value;
    expiresDate.setDate(expiresDate.getDate() - 7);
    let u =document.cookie = "username=" + encodeURIComponent(username) + "; expires=" + expiresDate.toUTCString();
    console.log(u);
}
document.getElementById("submit").addEventListener("click", check, false);
