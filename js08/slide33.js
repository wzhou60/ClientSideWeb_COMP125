function outer() {
    let msg = "ace of spades";
    function inner() {
       console.log(msg);
    }
    inner();
    console.log("is my card");
 }
 
 outer(); // Call the outer function to execute it
 