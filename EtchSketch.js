const body = document.body;

const flexGrid = document.querySelector(".grid");

const d = document.createElement('div');

(function () {
    for (i = 1 ; i < (16*16) + 1; i++) {
        var d = document.createElement(`div`);
            d.setAttribute('id', `box`)
            addColor(d);
            flexGrid.appendChild(d);
         d.innerHTML = `B-${i}`; 
    }
}) ();

function addColor(d) { 
    d.addEventListener('mouseover', event => {
        event.target.style.color = "orange";
        event.stopPropagation();
        setTimeout(function() {
            event.target.style.color = '';
        }, 500);
    });
};


/*
var test = document.getElementsByClassName('.grid');
var numTest = test.length;
  for (var i = 0 ; i < numTest; i++ ) {
        test[0].addEventListener('click', function(event) {
            event.target.text.color= "orange";
            alert ('Hi');
        });
    };
    */
