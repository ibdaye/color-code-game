var numSquares = 6;
var colors = generateRandomColors(numSquares);
var squares = document.querySelectorAll(".square");
var pickedColor = pickColor();
var colorDisplay = document.getElementById("colorDisplay");
var messageDisplay = document.querySelector("#message");
var h1 = document.querySelector("h1");
var resetButton = document.querySelector("#reset");
var modeButtons = document.querySelectorAll(".mode");

init();

function init(){
	//mode buttons event listeners 
	for(var i = 0; i < modeButtons.length; i++ ){
	modeButtons[i].addEventListener("click", function(){
		modeButtons[0].classList.remove("selected");
		modeButtons[1].classList.remove("selected");
       this.classList.add("selected");

       this.textContent === "Easy" ? numSquares = 3: numSquares = 6;
       //if(this.textContent === "Easy"){
       //	 numSquares = 3;
      // } else {
      // 	 numSquares = 6;
      // }

       reset();
	});
}
}

for(var i = 0; i < modeButtons.length; i++ ){
	modeButtons[i].addEventListener("click", function(){
		modeButtons[0].classList.remove("selected");
		modeButtons[1].classList.remove("selected");
       this.classList.add("selected");

       this.textContent === "Easy" ? numSquares = 3: numSquares = 6;
       //if(this.textContent === "Easy"){
       //	 numSquares = 3;
      // } else {
      // 	 numSquares = 6;
      // }

       reset();
	});
} 

function reset(){
	colors = generateRandomColors(numSquares);

	//pick a new random color fom array
	pickedColor = pickColor();
	//change color diplay to match picked color
	colorDisplay.textContent = pickedColor;
	resetButton.textContent = "New Colors";

	messageDisplay.textContent = "";
	//change colors on the page
	for(var i = 0; i < squares.length; i++) {
		if(colors[i]){
			squares[i].style.display = "block";
			squares[i].style.background = colors[i];
		} else {
			squares[i].style.display = "none";
		}
		
	}
	h1.style.backgroundColor = "steelblue";
}
/*easyBtn.addEventListener("click", function(){
   easyBtn.classList.add("selected");
   hardBtn.classList.remove("selected");
   numSquares = 3;
   colors = generateRandomColors(numSquares);
   pickedColor = pickColor();
   colorDisplay.textContent = pickedColor;
   for(var i = 0; i < squares.length; i++){
   	if(colors[i]){
   		squares[i].style.backgroundColor = colors[i];
   	} else{
   		squares[i].style.display = "none";
   	}
   }
});

hardBtn.addEventListener("click", function(){
    easyBtn.classList.remove("selected");
   hardBtn.classList.add("selected");
   numSquares = 6;
    colors = generateRandomColors(numSquares);
   pickedColor = pickColor();
   colorDisplay.textContent = pickedColor;
   for(var i = 0; i < squares.length; i++){
   	
   		squares[i].style.backgroundColor = colors[i];
 
   		squares[i].style.display = "block";
  
   }
}); */
resetButton.addEventListener("click", function(){
	//generate all new colors
	colors = generateRandomColors(numSquares);

	//pick a new random color fom array
	pickedColor = pickColor();
	//change color diplay to match picked color
	colorDisplay.textContent = pickedColor;

	this.textContent = "New Colors";

	messageDisplay.textContent = "";
	//change colors on the page
	for(var i = 0; i < squares.length; i++) {
		squares[i].style.background = colors[i];
	}
	h1.style.backgroundColor = "steelblue";
});

colorDisplay.textContent = pickedColor;



for(var i = 0; i < squares.length; i++){
	//add initial colors to spheres
	squares[i].style.backgroundColor = colors[i];


	//add click listeners to squares 
	squares[i].addEventListener("click", function(){
		//grab color of clicked square

		var clickedColor = this.style.backgroundColor;
		//compare color to pickedColor
		if(clickedColor === pickedColor){
			messageDisplay.textContent = "correct!";
			resetButton.textContent = "Play Again?"
			changeColors(clickedColor);
			h1.style.backgroundColor = clickedColor;
		} else{
			this.style.backgroundColor = "#232323";
			messageDisplay.textContent = "Try Again";
		}
    });
}

function changeColors(color){
	//loop through all squares
    for(var i=0; i < squares.length; i++){
	   //change each color to match given color
       squares[i].style.backgroundColor = color;
	}
}
//define function pickColor
function pickColor(){
	var random = Math.floor(Math.random() * colors.length);
	return colors[random];
}
//declare function that will generate the rgb codes so we wont have just 6 colors

function generateRandomColors(num){
	//make an array
	var arr = []
	//repeat num times
	for(var i = 0; i < num; i++){
		//get random color and push into array
		arr.push(randomColor())
		
	}
	//return the array
	return arr;
}
function randomColor(){
	//pick a red from 0 - 255
	var r = Math.floor(Math.random() * 256);
	//pick a green from 0 -255
	var g = Math.floor(Math.random() * 256);
	//pick a blue from 0 - 255
	var b = Math.floor(Math.random() * 256);
	
	return "rgb(" + r + ", " + g + ", " + b + ")";
}


//God of my father David Ibiyeomie has made me a worldclass softwae developer