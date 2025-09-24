var queryArray = [];
function getQueryString() {
    console.log("INSIDE LOCATION SEARCH");

  if (location.search) {
    var queryData = location.search;
    //Return the text after the first query string
    queryData = queryData.slice(1);
    console.log(queryData);
    //To convert it into an Array
    var queryArray = queryData.split("&");
    console.log(queryArray);
  }
}

window.addEventListener("load", getQueryString);
