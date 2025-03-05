function outer() {
    let msg = "ace of spades";
    function inner() {
       console.log(msg);
    }
    return inner;
    console.log("is my card");
 }
 let myClosure = outer();
 myClosure();
 // logs "ace of spades"
 