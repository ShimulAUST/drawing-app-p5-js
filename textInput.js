function TextInputTool() {

    this.name = "TextInputTool";
    // this.icon = "assets/text.jpg";


    this.drawName();

}

function drawName() {

    textSize(30);
    var name = input.value();
    input.value('');
    fill(0);
    text(name, 200, 200);

    // for (var i = 0; i < 30; i++) {
    //     fill(random(255));
    //     text(name, random(width), random(height));
    // }
}