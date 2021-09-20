
function EraseToTool() {
    this.icon = "assets/erase.jpg";
    this.name = "EraseTo";

    var erase = false;

    //draws the line to the screen 
    this.draw = function () {


        if (mouseIsPressed) {
            erase = true;

            stroke('white');
            fill('white');
            //stroke(255, 255, 255);
            ellipse(mouseX, mouseY, 20, 20);
            x = mouseY;
            y = mouseX;
            //console.log(this.selectedColour);
            fill('black')
            stroke('black');


        }
        else if (!mouseIsPressed) {
            noFill();
            erase = false;
            console.log(erase);
        }




    };

}
