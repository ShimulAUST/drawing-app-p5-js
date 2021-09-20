//global variables that will store the toolbox colour palette
//amnd the helper functions
var toolbox = null;
var colourP = null;
var helpers = null;
var textInput = null;
var input;
var button;

function setup() {


	//create a canvas to fill the content div from index.html
	canvasContainer = select('#content');
	var c = createCanvas(canvasContainer.size().width, canvasContainer.size().height);
	c.parent("content");

	//create helper functions and the colour palette
	helpers = new HelperFunctions();
	colourP = new ColourPalette();
	pixelDensity(1);

	greeting = createElement('h2', 'Enter your text..');
	greeting.position(315, 565);
	input = createInput();
	//input = createInput([value], ["Enter Text"]);

	input.position(315, 620);

	button = createButton("submit");
	button.position(495, 620);

	button.mousePressed(drawName);





	text("Enter your name.", 20, 20);
	//create a toolbox for storing the tools
	toolbox = new Toolbox();

	//add the tools to the toolbox.
	toolbox.addTool(new FreehandTool());
	toolbox.addTool(new LineToTool());
	toolbox.addTool(new SprayCanTool());
	toolbox.addTool(new mirrorDrawTool());
	toolbox.addTool(new EraseToTool());
	toolbox.addTool(new BrushTool());
	toolbox.addTool(new PaintBucketTool());
	toolbox.addTool(new LineCurveTool());
	background(255);

}

function draw() {
	//call the draw function from the selected tool.
	//hasOwnProperty is a javascript function that tests
	//if an object contains a particular method or property
	//if there isn't a draw method the app will alert the user
	if (toolbox.selectedTool.hasOwnProperty("draw")) {
		toolbox.selectedTool.draw();
	} else {
		alert("it doesn't look like your tool has a draw method!");
	}
}