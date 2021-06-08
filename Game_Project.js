//Restart the Game
var restart = document.querySelector('#b')

//Grab all the Squares
var cell = document.querySelectorAll('td')

// cell.addEventListener('click',function(){
//   cell.textContent = 'X'
//   cell.textContent = 'O'
//
// })

//Clear all the Squares
function clearboard(){
  for (var i = 0; i < cell.length; i++) {
    cell[i].textContent = "";
  }
}

restart.addEventListener('click',clearboard);


//Check the square marker

function checkMarker(){
  if (this.textContent==='') {
    this.textContent = "X"
  }
  else if (this.textContent==="X") {
    this.textContent = "O"
  }
  else {
    this.textContent = ""
  }
}

for (var i = 0; i < cell.length; i++) {
  cell[i].addEventListener('click',checkMarker);
}
