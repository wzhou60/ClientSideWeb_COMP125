function check() {
    //var expiresDate = new Date();
    var username = document.getElementById("username").value;
    var Member = document.getElementById("member").value;
    var Audio = document.getElementById("audio").value;
    //expiresDate.setDate(expiresDate.getDate() - 7);
    //document.cookie = "username=" + encodeURIComponent(username) + "; expires=" + expiresDate.toUTCString();
    //window.alert(document.cookie);
    document.cookie = "username=" + encodeURIComponent(username);
    document.cookie = "member=" + encodeURIComponent(Member);
    document.cookie = "audio=" + encodeURIComponent(Audio);
    var cookieString = decodeURIComponent(document.cookie);
    var cookieArray = cookieString.split("; ");
    console.log(cookieArray);
    //window.alert(cookieArray);

}

document.getElementById("submit").addEventListener("click", check, false);
