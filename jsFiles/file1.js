
function myFunction(){
	var checkBox = document.getElementById("myCheck");
	var text = document.getElementById("text");
	var x = document.getElementsByTagName("BODY")[0];
	var y = document.getElementById("arrowUp");
	var h = document.getElementsByTagName("h2")[0];
	var t = document.getElementById("line");
	var c1 = document.getElementsByClassName("animations")[0];
	var c2 = document.getElementsByClassName("illustrations")[0];

	if(checkBox.checked == true){
		text.style.color = "white";
		x.style.transition = ".4s";
		x.style.backgroundColor = "#191970";
		y.style.color = "pink";
		h.style.color = "#87CEFA";
		t.style.color = "white";
		c1.style.borderImageSource = "linear-gradient(" + "to left" + "," +  "#00FFFF" + "," +  "#B2FF59)";
		c2.style.borderImageSource = "linear-gradient(" + "to left" + "," + "#00FFFF" + "," + "#B2FF59)";

		
	}
	else{
		text.style.color = "black";
		x.style.backgroundColor = "#F0F8FF";
		y.style.color = "#2f4f4f";
		h.style.color = "indigo";
		t.style.color = "black";
		c1.style.borderImageSource = "linear-gradient(" + "to left" + "," +  "#00FFFF" + "," +  "#743ad5)";
		c2.style.borderImageSource = "linear-gradient(" + "to left" + "," + "#00FFFF" + "," + "#743ad5)";

	}
}

function myFunction2(){

	document.getElementById("playAudio").addEventListener("click", function(){
	var audio = document.getElementById('testAudio');
	  if(this.className == 'is-playing'){
	    this.className = "";
	    this.innerHTML = "Play";
	    audio.pause();
	  }else{
	    this.className = "is-playing";
	    this.innerHTML = "Pause";
	    audio.play();
	  }

	});
}


