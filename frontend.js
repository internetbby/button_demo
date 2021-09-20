var button = document.getElementById("daButton");
var howMuchClicked = 0  ;

function RespondClick() {
    howMuchClicked++;
    console.log(howMuchClicked);
}

button.addEventListener("click", RespondClick, false);

exports.AmountOfClicks = function () {
    return howMuchClicked;
}

