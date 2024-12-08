function myMove() {

    id = null;
    id = setInterval(frame, 5);
    pos = 0;
    function frame() {
        let animObj = document.getElementById("animate");
        if (pos == 500) {
            clearInterval(id);
        }
        else {
            pos++;
            animObj.style.top = pos + "px";
            animObj.style.left = pos + "px";
        }

    }

}