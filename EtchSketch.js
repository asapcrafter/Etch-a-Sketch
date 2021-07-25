const body = document.body;

const flexGrid = document.querySelector(".grid");

var root = document.querySelector(':root');

var gridSize = 20;

function setGridSize() {
    root.style.setProperty('--gridSize', gridSize)
}
//Grid creation 
(function () {
    for (i = 1 ; i < (gridSize * gridSize) + 1; i++) {
        var d = document.createElement(`div`);
            d.setAttribute('id', `box`)
            changeColor(d);
            flexGrid.appendChild(d);
        d.innerHTML = `${i}`; 
    }
}) ();

function changeColor(d) { 
    d.addEventListener('mouseover', event => {
        event.target.style.backgroundColor = "var(--customPurple)";
        event.stopPropagation();
        setTimeout(function() {
            event.target.style.backgroundColor = '';
        }, 5000);
    });
};

const btnRestart = document.querySelector('#restartBtn');
    btnRestart.onclick = () => {
        resetCanvas();
        promptUser();
    };

function resetCanvas() {
    document.querySelectorAll('#box').forEach(e => {
        e.style.backgroundColor = 'var(--customGreen)';
    });
};

function promptUser() {
    var inputStr = prompt("Enter new canvas size (1-100)", "16");
    var inputNum = Number (inputStr);
        if (inputStr == null) {
            return true;
        } else if (isNaN(inputStr)) {
            alert("Invalid input");
        } else if (inputNum > 99) {
            alert("This value is too large");
        } else {
            alert("Nice number");
            changeGrid(inputNum);
        }
};

function changeGrid(x) {
    gridSize = x;
    createGrid();
    createGridTwo();
    setGridSize();
    return gridSize;
}

function createGrid() {
    document.querySelectorAll('#box').forEach(e => {
        e.remove();
    });
};

function createGridTwo() {
    for (i = 1 ; i < (gridSize * gridSize) + 1; i++) {
            var d = document.createElement(`div`);
                d.setAttribute('id', `box`)
                changeColor(d);
                flexGrid.appendChild(d);
            d.innerHTML = `${i}`; 
        }; 
};

