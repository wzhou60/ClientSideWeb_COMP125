let pokerGame = new Object();
pokerGame.currentBank = null;
pokerGame.currentBet = null;
pokerGame.placeBet = function() {
   this.currentBank -= this.currentBet;
   return this.currentBank;
};

console.log(pokerGame.currentBet);
