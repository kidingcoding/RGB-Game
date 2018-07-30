var colors=generateRandomColors(6);
var square=document.querySelectorAll(".square");
var pickcolor=pickedcolor();
var colorDisplay=document.getElementById("colorDisplay");
colorDisplay.textContent=pickcolor;
var h1=document.querySelector("h1");
var reset=document.getElementById("reset");
var easy=document.getElementById("easy");
var hard=document.getElementById("hard");
var num=6;

var message=document.getElementById("message");
easy.addEventListener("click",function(){
	easy.classList.add("selected");
	hard.classList.remove("selected");
	h1.style.backgroundColor="steelblue";
	num=3;
	colors=generateRandomColors(num);
	pickcolor=pickedcolor();
	colorDisplay.textContent=pickcolor;
	for(var i=0;i<square.length;i++){
		if(colors[i]){
			square[i].style.backgroundColor=colors[i];
		}
		else
			square[i].style.display="none";
	}

})
hard.addEventListener("click",function(){
	hard.classList.add("selected");
	easy.classList.remove("selected");
	h1.style.backgroundColor="steelblue";
	num=6;
	reset.textContent="New Colors";
	colors=generateRandomColors(num);
	pickcolor=pickedcolor();
	colorDisplay.textContent=pickcolor;
	for(var i=0;i<square.length;i++){
		square[i].style.backgroundColor=colors[i];
		square[i].style.display="block";
		
	}
})
reset.addEventListener("click",function(){
	colors=generateRandomColors(num);
	pickcolor=pickedcolor();
	h1.style.backgroundColor="steelblue";
	message.textContent="";
	colorDisplay.textContent=pickcolor;
	for(var i=0;i<square.length;i++){
	square[i].style.backgroundColor=colors[i];}
})

for(var i=0;i<square.length;i++){
	square[i].style.backgroundColor=colors[i];
	square[i].addEventListener("click",function(){
		var clickcolor = this.style.backgroundColor;
		if(pickcolor === clickcolor){
			message.textContent="WOW";
			reset.textContent="Play Again!!";
			changeColors(pickcolor);
			h1.style.backgroundColor=pickcolor;
			}
		else{ 
			this.style.backgroundColor = "#232323";
			message.textContent="TRY AGAIN";
			reset.textContent="New Colors";
		}
	})
	
}
function pickedcolor(){
	var random = (Math.floor(Math.random()*colors.length));
	return colors[random];
}
function generateRandomColors(num){
	var arr = [];
	for(var i=0;i<num;i++){
		arr.push(randomColor());
	}
	return arr;
}
function changeColors(color){
	for(var i=0;i<square.length;i++){
		square[i].style.backgroundColor=color;
	}
}
function randomColor(){
	var r = Math.floor(Math.random()*256);
	var g = Math.floor(Math.random()*256);
	var b = Math.floor(Math.random()*256);
	var s="rgb("+r+", "+g+", "+b+")";
	return s;
}