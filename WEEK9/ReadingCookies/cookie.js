/*function check() {
    var expiresDate = new Date();
    var username = document.getElementById("username").value;
    var member = document.getElementById("member").value; // changed variable name to lowercase 'm'
    var audio = document.getElementById("audio").value; // changed variable name to lowercase 'a'

    window.alert(document.cookie);
    document.cookie = "username=" + encodeURIComponent(username);
    document.cookie = "member=" + encodeURIComponent(member); // changed variable name to lowercase 'm'
    document.cookie = "audio=" + encodeURIComponent(audio); // changed variable name to lowercase 'a'
    var cookieString = decodeURIComponent(document.cookie);
    var cookieArray = cookieString.split("; ");
    var currentUsername;
    var unBox = document.getElementById("username");
    for (var i = 0; i < cookieArray.length; i++) {
        currentUsername = cookieArray[i];
        if (currentUsername.substring(0, currentUsername.indexOf("=")) === "username") {
            unBox.value = currentUsername.substring(currentUsername.indexOf("=") + 1, currentUsername.length);
            console.log(cookieArray);
            //break;
        }
    }

    expiresDate.setDate(expiresDate.getDate() - 7);
    document.cookie = "username=" + encodeURIComponent(username) + "; expires=" + expiresDate.toUTCString();
}

document.getElementById("submit").addEventListener("click", check, false);
*/

function check() {
    var expiresDate = new Date();
    expiresDate.setDate(expiresDate.getDate() + 7); // Set cookie to expire in 7 days

    var username = document.getElementById("username").value;
    var member = document.getElementById("member").value;
    var audio = document.getElementById("audio").value;

    // Set cookies
    document.cookie = "username=" + encodeURIComponent(username) + "; expires=" + expiresDate.toUTCString();
    document.cookie = "member=" + encodeURIComponent(member) + "; expires=" + expiresDate.toUTCString();
    document.cookie = "audio=" + encodeURIComponent(audio) + "; expires=" + expiresDate.toUTCString();

    // Read cookies
    var cookieString = decodeURIComponent(document.cookie);
    var cookieArray = cookieString.split("; ");
    //var currentUsername;
    //var unBox = document.getElementById("username");
    //var unBox1 = document.getElementById("member");
    //var unBox2 = document.getElementById("audio");
    
    console.log("Cookies: ", cookieArray); // Debugging: log all cookies

    for (var i = 0; i < cookieArray.length; i++) {
        var currentCookie = cookieArray[i];
        var cookieName = currentCookie.substring(0, currentCookie.indexOf("="));
        var cookieValue = currentCookie.substring(currentCookie.indexOf("=") + 1);

        console.log("Cookie Name: ", cookieName, ", Cookie Value: ", cookieValue); // Debugging: log each cookie

        if (cookieName === "username"&& cookieName === "member"&& cookieName === "audio") {
            //unBox.value = cookieValue;
            console.log(cookieValue)
            //break;
        }
    }
}

document.getElementById("submit").addEventListener("click", check, false);