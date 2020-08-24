var nameInput, ageInput, genderInput, heightInput, weightInput, submitButton;

function setup() {
    
    createCanvas(displayWidth, displayHeight);

    nameInput = createInput("Name");
    nameInput.position(displayWidth/2 - 40, displayHeight/2 - 80);

    ageInput = createInput("Age");
    ageInput.position(displayWidth/2 - 40, displayHeight/2 - 40);

    genderInput = createInput("Gender");
    genderInput.position(displayWidth/2 - 40, displayHeight/2);

    heightInput = createInput("Height");
    heightInput.position(displayWidth/2 - 40, displayHeight/2 + 40);

    weightInput = createInput("Height");
    weightInput.position(displayWidth/2 - 40, displayHeight/2 + 80);

    submitButton = createButton("Submit");
    submitButton.position(displayWidth/2 - 40, displayHeight/2 + 120);

}

function draw() {

}