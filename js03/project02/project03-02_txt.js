/*    JavaScript 7th Edition
      Chapter 3
      Project 03-02

      Application to generate a slide gallery
      Author: 
      Date:   

      Filename: project03-02.js
*/

let captions = new Array(14);
captions[0] = "International Space Station fourth expansion [2009]";
captions[1] = "Assembling the International Space Station [1998]";
captions[2] = "The Atlantis docks with the ISS [2001]";
captions[3] = "The Atlantis approaches the ISS [2000]";
captions[4] = "The Atlantis approaches the ISS [2000]";
captions[5] = "International Space Station over Earth [2002]";
captions[6] = "The International Space Station first expansion [2002]";
captions[7] = "Hurricane Ivan from the ISS [2008]";
captions[8] = "The Soyuz spacecraft approaches the ISS [2005]";
captions[9] = "The International Space Station from above [2006]";
captions[10] = "Maneuvering in space with the Canadarm2 [2006]";
captions[11] = "The International Space Station second expansion [2006]";
captions[12] = "The International Space Station third expansion [2007]";
captions[13] = "The ISS over the Ionian Sea [2007]";

let prices = new Array(14);
prices[0] = "5";
prices[1] = "8";
prices[2] = "9";
prices[3] = "10";
prices[4] = "67";
prices[5] = "6";
prices[6] = "4";
prices[7] = "5";
prices[8] = "4";
prices[9] = "3";
prices[10] = "9";
prices[11] = "3";
prices[12] = "9";
prices[13] = "5";
let htmlCode = "";
for (let i = 0; i < captions.length; i++) {
  htmlCode += "<figure>";
  htmlCode += "<img src = 'slide" + i + ".jpg' />";
  htmlCode += "<p>" + "$" + prices[i] + "</p>";
  htmlCode += "<figcaption>" + captions[i] + "</figcaption>";
  htmlCode += "</figure>";
}
document.getElementById("gallery").innerHTML = htmlCode;
