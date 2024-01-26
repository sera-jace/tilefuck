var rows = 3;
var columns = 3;

var currTile;
var otherTile;

var turns = 0;

// var imgOrder = ["1", "2", "3", "4", "5", "6", "7", "8", "9"]; 

var imgOrder = ["4", "2", "8", "5", "1", "7", "9", "6", "3"];


window.onload = function() {
  for (let r=0; r < rows; r++) {
    for (let c=0; c < columns; c++) {


      //<img id="0-0" src="1.jpg"> //
      
      let tile = document.createElement("img");
      tile.id = r.toString() + "-" + c.toString();
      tile.src = imgOrder.shift() + ".jpg";

      
      tile.addEventListener("dragstart", dragStart);
      tile.addEventListener("dragover", dragOver);
      tile.addEventListener("dragenter", dragEnter);
     //tile.addEventListener("dragleave", dragLeave);
     //tile.addEventListener("drop", dragDrop);
      //tile.addEventListener("dragend", dragEnd);

 
  document.getElementById("board").append(tile); console.log(tile, r, c, tile.id, tile.src);

    }
  }
}


function dragStart() {
  currTile = this;

}

function dragOver(e) {
  e.preventDefault();
}

function dragEnter(e) {
  e.preventDefault();

}
