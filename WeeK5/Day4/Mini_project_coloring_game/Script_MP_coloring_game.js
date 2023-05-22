document.addEventListener("DOMContentLoaded", function() {
    generateColors();
    let currentColor;
    let isMousePressed = false;
    const button = document.querySelector(".clear button");
    listenToClearButton();

    function listenToClearButton() {
        if (button) {
            button.addEventListener("click", clearCanvas);
        }
    }

    function clearCanvas() {
        currentColor = null;
        const squares = document.querySelectorAll("#main > div");
        for (const square of squares) {
            square.style.backgroundColor = 'white';
        }
        if (button) {
            button.style.backgroundColor = "white";
        }
    }

    function listenToMain() {
        const main = document.getElementById("main");
        main.addEventListener("mousedown", handleClick);
        main.addEventListener("mousemove", handleMove);
        document.body.addEventListener("mouseup", handleMouseRelease);
    }

    function handleMouseRelease() {
        isMousePressed = true;
    }

    function handleClick() {
        if (currentColor == null) return;
        isMousePressed = false;
    }

    function handleMove(e) {
        if (!isMousePressed) {
            console.log("coordinates:", e.x, e.y);
            const hoveredDiv = document.elementFromPoint(e.x, e.y);
            hoveredDiv.style.backgroundColor = currentColor;
        }
    }

    function generateColors() {
        const colorDivs = document.querySelectorAll(".color");
        for (const colorDiv of colorDivs) {
            const randomColor = generateRandomColor();
            colorDiv.style.backgroundColor = randomColor;
            colorDiv.dataset.color = randomColor;
            colorDiv.addEventListener("click", setCurrentColor);
        }
    }

    function generateRandomColor() {
        const hex = Math.floor(Math.random() * 16777205).toString(16);
        return "#" + hex;
    }

    function setCurrentColor(e) {
        const chosenColor = e.target.dataset.color;
        currentColor = chosenColor;
        if (button) {
            button.style.backgroundColor = chosenColor;
        }
    }

    listenToMain();
});
