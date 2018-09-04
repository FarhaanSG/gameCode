

  // var currentPos =








  // if(d1 == "6"){
  // var fragmentGreenCounter1 = document.createDocumentFragment();
  // // Append desired element to the fragment:
  // fragment.appendChild(document.getElementById('green-1'));
  // // Append fragment to desired element:
  // document.getElementById('20').appendChild(fragmentGreenCounter1);
  //
  // // var firstGreenCounter = document.getElementById("green-1");
  // // firstCounter.remove();
  // // document.getElementById("20").appendChild(firstGreenCounter);
  // }
  // if (d1 !== "6") {
  //   var moves = 0;
  //   moves += d1;
  //
  //   whoseTurn = 1;
  // }



var players = [];
var whoseTurn = 0;
players[0] = "Green's Turn";
players[1] = "Red's Turn";
players[2] = "Yellow's Turn";
players[3] = "Blue's Turn";

var playerOne = [];
var playerTwo = [];
var playerThree = [];
var playerFour = [];
var gameOver = false;

document.getElementsByClassName('playerTurn')[0].innerHTML = players[whoseTurn];

function rollDice(){
  var die1 = document.getElementById("die1");
  var status = document.getElementById("status");
  var d1 = Math.floor(Math.random() * 6) + 1;
  die1.innerHTML = d1;
  status.innerHTML = "You rolled "+d1+".";
  if(d1 == "6"){
    status.innerHTML += " roll again!";
    var fragmentGreenCounter1 = document.createDocumentFragment();
    // Append desired element to the fragment:
    fragmentGreenCounter1.appendChild(document.getElementById('green-1'));
    // Append fragment to desired element:
    document.getElementById('0').appendChild(fragmentGreenCounter1);
    console.log();
  }
  var currentSquareId = fragmentGreenCounter1.parent.id; //id of the current square
  var nextPosition = currentSquareId.substring(0,6) + (parseInt(currentSquareID.substring(6) + d1)); //"green-"+"5"(if current square is 1, and diceRoll is 4 for example)
  document.getElementById(nextPosition).appendChild(fragmentGreenCounter1);
  // if (d1 !== "6") {
  //   // var moves = 0;
  //   // moves += d1;
  //   game.next_player();
  //
  //   // whoseTurn = 1;
  // }
  // next_player: function () {
  //     allow = 0;
  //     turn++;
  //     turn %= k;
  // }
}
// var firstGreenCounter = document.getElementById("green-1");
// firstCounter.remove();
// document.getElementById("21").appendChild(firstGreenCounter);



// function movePiece();{
// //   return function(){
//     // rollDice();
//     if(d1 == "6"){
//     var fragmentGreenCounter1 = document.createDocumentFragment();
//     // Append desired element to the fragment:
//     fragment.appendChild(document.getElementById('green-1'));
//     // Append fragment to desired element:
//     document.getElementById('20').appendChild(fragmentGreenCounter1);
//
//     // var firstGreenCounter = document.getElementById("green-1");
//     // firstCounter.remove();
//     // document.getElementById("20").appendChild(firstGreenCounter);
//
//     if (d1 !== "6") {
//       var moves = 0;
//       moves += d1;
//
//       whoseTurn = 1;
//     }
//
//     }
//
// //   }
// }



// $("#table").on("click", "td", function() {
//   if (gameOver == false) {
//     if (whoseTurn == 0) {
//       if (diceTotal != "6") {
//         $( this ).addId("green-1")
//         $( this ).html('green-1');
//         whoseTurn = 1;
//         document.getElementsByClassName('playerTurn')[0].innerHTML = players[whoseTurn]; // changes the h2 into the player turn
//         playerOne.push(parseInt(this.dataset.num)) ; // push the square clicked in the var array for player one and converts it to a integer
//       }
//
//       if(checkWinner(playerOne)){
//         setTimeout(alert, 200, "Player 1 Won");
//         gameOver = true;
//       }
//
//     }
//   });
