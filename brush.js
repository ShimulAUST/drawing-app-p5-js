
function BrushTool() {
    this.icon = "assets/brush.jpg";
    this.name = "BrushTo";

    // createCanvas of brush
    var brushSize = 20;
    // related to brush shape
    var lastX, lastY;
    // increment value
    var inc = 20;

    //draws the line to the screen 
    this.draw = function () {

        if (mouseIsPressed == true) {
            for (var i = 0; i < brushSize; i += 1) {
                var thisX = mouseX + random(-i, i);
                var thisY = mouseY + random(-i, i);

                //noStroke();
                // fill();
                //beginShape();
                vertex(mouseX, mouseY);
                // bezierVertex(lastX, lastY, thisX, thisY, thisX, thisY);
                // bezierVertex(mouseX, mouseY, mouseX, mouseY, mouseX, mouseY);
                ellipse(mouseX, mouseY, 15, 15);
                lastX = thisX;
                lastY = thisY;
                //endShape();

            }


            //2nd process
            // colorMode(HSL, 360);
            // noStroke();

            //ellipse(mouseX, mouseY, 20, 20);
            // stroke('black');



        }





    };
}
