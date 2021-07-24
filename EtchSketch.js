const body = document.body;

const flexGrid = document.querySelector(".squares");

const d = document.createElement('div');

(function () {
    for (i = 0 ; i < (16*16) ; i++) {
        var d = document.createElement('div');
         flexGrid.appendChild(d);
         d.innerHTML = "Hi"; 
    }
}) ();
 //   boxes.appendChild(d);
  //  d.innerHTML="Hello"