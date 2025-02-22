//slide8
//indexOf
let arr = "First Inaugural Address";
let farr = arr.indexOf(" ");
console.log(farr);

//lastIndexOf
let larr = arr.lastIndexOf(" ");
console.log(larr);

//slides12
let charat = "Abraham Lincoln".charAt(4); // returns "h"
console.log(charat);

//slide13
//slice
let sli = "Abraham Lincoln".slice(4, 10); // "ham Li"
console.log(sli);
//substring
let sub = "Abraham Lincoln".substring(4, 10); // "ham Li"
console.log(sub);
// substr
let substr = "Abraham Lincoln".substr(4, 10); // "ham Licoln"
console.log(substr);

//slice-backward
let sliceback = "Abraham Lincoln".slice(-7, -3); // "Linc"
console.log(sliceback);
//substring - backward
let substringback = "Abraham Lincoln".substring(-7); // "Abraham Lincoln"
console.log(substringback);
// substr - backward
let substrback = "Abraham Lincoln".substr(-7, 4); // "Linc"
console.log(substrback);

//slide14
let email = "lincoln@example.com";
let atIndex = email.indexOf("@"); // returns 7
console.log(atIndex);

let eem = email.slice(0, atIndex); // returns "lincoln
console.log(eem);

let eem2 = email.slice(atIndex + 1); // returns "example.com"
console.log(eem2);

//slide14b
let email1 = "lincoln@example.com";
let parts = email.split("@");
console.log(parts);
parts[0] = "lincoln";
console.log(parts[0]);

parts[1] = "example.com";
console.log(parts[1]);

//slide16
var str = "Welcome to Toronto";
var patt = /Me/;
var result = patt.test(str);
console.log(result); // false

var result2 = /Me/i.test(str);
console.log(result2); // true

//slide16b
var str = "Welcome to Toronto";
var patt1 = /to/i; // i: ignore case-sensitivity (returns first match)
// same as:  var patt1 = new RegExp("to", "i");

var result = str.match(patt1);
console.log(result); // to
console.log(result[0]); // to

//slide16c
var str = "Welcome to Toronto";
var patt1 = /to/g; // g: do a global search
var result = str.match(patt1);
console.log(result); // to,to

//slide16c2
var str = "Welcome to Toronto";
var result = str.match(/to/gi);
// ig: global and case-insensitive

console.log(result); // to, To, to

//slide16a
var hui = "land at Home";
let patt2 = /^land/;
let result1 = patt2.test(hui);
console.log(result1);
///^land/

//slide16b1
var hui = "at Home land";
let patt3 = /land$/;
let result3 = patt3.test(hui);
console.log(result3);

//slide16b2
var hui = "at Home land";
let patt4 = /^land$/;
let result4 = patt4.test(hui);
console.log(result4);

//slide17a
var hui = "article";
let patt5 = /\bart/;
let result5 = patt5.test(hui);
console.log(result5);

//slide17b
var hui = "article 12345";
let patt6 = /\d\d\d\d\d/;
let result6 = patt6.test(hui);
console.log(result6);

//slide17c
var hui = "article 12345";
let patt7 = /\b\d\d\d\d\d\b/;
let result7 = patt7.test(hui);
console.log(result7);

//slide17d
var hui = "12345";
let patt8 = /^\d\d\d\d\d$/;
let result8 = patt8.test(hui);
console.log(result8);

//slide20
var hui = "table";
let patt9 = /\bt[a-zA-Z]+\b/gi;
let result9 = patt9.test(hui);
console.log(result9);

//slide21a
var hui = "02/05/2023";
let patt10 = /^\d{1,2}\/\d{1,2}\/\d{4}$/;
let result10 = patt10.test(hui);
console.log(result10);

//slide21b
var hui = "12345-5678";
let patt11 = /^\d{5}$|^\d{5}-\d{4}$/;
let result11 = patt11.test(hui);
console.log(result11);

//slide22
var hui = "567-234-4567";
let patt12 = /^(\d{3}-)?\d{3}-\d{4}$/;
let result12 = patt12.test(hui);
console.log(result12);

//slide23a
var hui = "12345-5678";
let patternTest = "d{5}-d{4}";
let regx = new RegExp(patternTest, "g");
console.log(regx);

//slide23b
var hui = "567-234-4567";
let patt13 = /^(\d{3}-)?\d{3}-\d{4}$/;
let result13 = hui.search(patt13);
console.log(result13);

//slide24a
var hui = "567-234-4567";
let patte = /^(\d{3}-)?\d{3}-\d{4}$/;
let resulte = patte.exec(hui);
console.log(resulte);

//slide24b
var hui = "567-234-4567";
let patt112 = /^(\d{3}-)?\d{3}-\d{4}$/;
let result112 = patt112.toString();
console.log(result112);

//slide24c
var hui = "567-234-4567";
let patt113 = /^(\d{3}-)?\d{3}-\d{4}$/;
let result113 = hui.match(patt113);
console.log(result113);

//slide26
let oldtext = "1st Inaugural";
let gyu = oldtext.replace(/1st/g, "First"); // returns First Inaugural
console.log(gyu);

//slide30a
let words = "with malice towards none".match(/\b\w+\b/g);
console.log(words);

//slide 30b
words = "with malice towards none".split(/\s+/g); // words = ["with","malice","towards","none"]
console.log(words);

//slide32
let names = "Travis Lee, Darius Green, Alisha Draves";
let re = /(\w+)\s(\w+),?/g;
let names2 = names.replace(re, "$2, $1; "); // returns "Lee, Travis; Green, Darius; Draves, Alisha"
console.log(names2);

//slide35a
let cards = ["Ace", "King", "Queen", "Jack"];
let cardsrev = cards.reverse();
console.log(cardsrev);

//slide35b
let ghj = cards.sort();
console.log(ghj);

//slide40a
var colors = ["Red", "Green", "Blue", "Yellow", "White"];
var subclrs = colors.slice(1, 3);

console.log(colors); // [ "Red", "Green", "Blue", "Yellow", "White" ]
console.log(subclrs); // [ "Green", "Blue" ]

//slide40b
var colors = ["Red", "Green", "Blue", "Yellow", "White"];
var subclrs = colors.splice(1, 3);
console.log(subclrs);

//slide42a - pop and shift
var colors = ["Red", "Green", "Blue", "White", "Black"];
var last = colors.pop();
var first = colors.shift();
console.log(colors); // [ "Green", "Blue", "White" ]
console.log(last); // Black
console.log(first); // Red

//slide42b - push
var colors = ["Red", "Green", "Blue"];
colors.push("Pink");
console.log(colors); // [ "Red", "Green", "Blue", "Pink" ]

//slide42c - unshift
var colors = ["Red", "Green", "Blue"];
colors.unshift("peach");
console.log(colors);

//slide47a
let rf = Math.max(...[3, 8, 2, 4, 6]); // returns 8
console.log(rf);

//slide47b
let gt = Math.min(...[3, 8, 2, 4, 6]); // returns 2
console.log(gt);

//slide47c
let chars = ["a", ..."bcd ", "e"]; // returns ["a","b","c","d","e"]
console.log(chars);

//slide48a

let df = Math.random();
console.log(df);

//slide48b
let lowest = 5;
let size = 60;
let low = lowest + size * Math.random();
console.log(low);

//slide48c;
//Sample statement to generate a random integer from 21 to 30:
let qer = Math.floor(21 + 10 * Math.random());
console.log(qer);

//slide 48d;
//Sample compare function to randomly sort an array when passed in to the sort() method:
function randOrder() {
    return 0.5 - Math.random();
}

//slide 49
let today = new Date();
console.log(today);

//slide 50a
let date = new Date();
console.log(date);

//slide 50b
let year = date.getFullYear(); // stores the year
console.log(year);

//slide 50c
let dd=date.setFullYear(year + 1); // increases year by 1
console.log(dd);
