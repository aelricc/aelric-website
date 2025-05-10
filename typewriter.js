
// set up text to print, each item in array is new line

    var isOut = true;

    function typewriter(txt) {
        i = 0;
        speed = 50;
        isOut = false;
        actuallyType()
        function actuallyType(){
            if (i < txt.length && isOut == false) {
                document.getElementById("dialog").innerHTML += txt.charAt(i);
                i++;
                setTimeout(actuallyType, speed);
            }
        }
    }

    function clearText(){
        isOut = true;
        document.getElementById("dialog").innerHTML = " ";
    }

    
    


    
