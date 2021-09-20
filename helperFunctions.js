function HelperFunctions() {

	//Jquery click events. Notice that there is no this. at the
	//start we don't need to do that here because the event will
	//be added to the button and doesn't 'belong' to the object

	//event handler for the clear button event. Clears the screen
	select("#clearButton").mouseClicked(function () {
		background(255, 255, 255);
		//call loadPixels to update the drawing state
		//this is needed for the mirror tool
		loadPixels();
	});

	//event handler for the save image button. saves the canvsa to the
	//local file system.
	select("#saveImageButton").mouseClicked(function () {
		saveCanvas("myPicture", "jpg");
	});



	// helper function for shapes
	select("#shapes").mouseClicked(function () {
		if (shapes.value == "ellipse") {

			ellipse(mouseX - 200, mouseY + 320, random(120), random(120));
			shapes.value = '';
		}
		else if (shapes.value == "triangle") {

			triangle(random(mouseX) + 20, random(mouseY) + 200, random(mouseX) + 30, random(mouseY) + 100, mouseX + 20, mouseY + 210);
			shapes.value = '';
		}
		else if (shapes.value == "rectangle") {

			rect(mouseX + 200, mouseY + 300, 100, 100);
			shapes.value = '';
		}
	});
}