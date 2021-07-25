const body = document.body;

const flexGrid = document.querySelector(".grid");

//const d = document.createElement('div');

//Grid creation 
(function () {
    for (i = 1 ; i < (16*16) + 1; i++) {
        var d = document.createElement(`div`);
            d.setAttribute('id', `box`)
            addColor(d);
            flexGrid.appendChild(d);
        // d.innerHTML = `B${i}`; 
    }
}) ();

function addColor(d) { 
    d.addEventListener('mouseover', event => {
        event.target.style.backgroundColor = "orange";
        event.stopPropagation();
        setTimeout(function() {
            event.target.style.backgroundColor = '';
        }, 500);
    });
};

const btnRestart = document.querySelector('#restartBtn');
    btnRestart.onclick = () => {
        resetCanvas();

    };

function resetCanvas() {
    var grid = document.querySelector('.grid');
    var x = grid.querySelectorAll('#box');
    x.style.backgroundColor = "white";
}


