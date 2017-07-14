/*

function Start(){
  confirm("Player X Begin")
};

*/

// set initial user//
var user= "X";

//array for the board game to make verifying a winner easier//
var bA = [[0,0,0],[0,0,0],[0,0,0]];

/*when player selects a box this will mark the box with either an X or an O
depending on the current player. */

function check(row,column,id){
  var b=bA[row][column];
  if (b!=0){
    alert("Choose another box");
    return;
  }
  bA[row][column]=user;
  document.getElementById(id).innerHTML=user;

  //switches  between users as they take turns///

  if (user=="X"){
    user="O";
  }
  else{
    user="X";
  }

//check for a row of 3 matching letters to see if there is a winner///
    if ((bA[0][0] == bA[0][1]) && (bA[0][1] == bA[0][2]) && bA[0][2] !=0){
      document.getElementById('m').innerHTML = "Winner!"
    }
    if ((bA[1][0] == bA[1][1]) && (bA[1][1]== bA[1][2]) && bA[1][2] !=0){
      document.getElementById('m').innerHTML = "Winner!"
    }
    if ((bA[2][0] == bA[2][1]) && (bA[2][1] == bA[2][2]) && bA[2][2] !=0){
      document.getElementById('m').innerHTML = "Winner!"
    }
    if ((bA[0][0] == bA[1][0]) && (bA[1][0] == bA[2][0]) && bA[2][0] !=0){
      document.getElementById('m').innerHTML = "Winner!"
    }
    if ((bA[0][1] == bA[1][1]) && (bA[1][1] == bA[2][1]) && bA[2][1] !=0){
      document.getElementById('m').innerHTML = "Winner!"
    }
    if ((bA[0][2] == bA[1][2]) && (bA[1][2] == bA[2][2]) && bA[2][2] != 0){
      document.getElementById('m').innerHTML = "Winner!"
    }
    if ((bA[0][0] == bA[1][1]) && (bA[1][1]== bA[2][2]) && bA[2][2] !=0){
      document.getElementById('m').innerHTML = "Winner!"
    }
    if ((bA[0][2] == bA[1][1]) && (bA[1][1]== bA[2][0]) && bA[2][0] !=0){
      document.getElementById('m').innerHTML = "Winner!"
    }
}


/* Reset Function to reset the board game*/
function Reset(){
    bA = [[0,0,0],[0,0,0],[0,0,0]];
    var r = document.getElementsByClassName("box");
    var l = r.length;
    for (var i=0; i<l; i++){
      r[i].innerHTML=" ";
    }
    document.getElementById('m').innerHTML=' ';
    Start();
}
