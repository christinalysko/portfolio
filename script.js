// Get the modal
var modal = document.getElementById('myModal');
 
// Get the image and insert it inside the modal - use its "alt" text as a caption
var img = document.getElementById('chew');
var modalImg = document.getElementById("img01");
var captionText = document.getElementById("caption");
img.onclick = function(){
    modal.style.display = "block";
    modalImg.src = this.src;
    captionText.innerHTML = this.alt;
}
 
// fine
var img = document.getElementById('fine');
var modalImg = document.getElementById("img01");
var captionText = document.getElementById("caption");
img.onclick = function(){
    modal.style.display = "block";
    modalImg.src = this.src;
    captionText.innerHTML = this.alt;
}

// bodoni
var img = document.getElementById('bodoni');
var modalImg = document.getElementById("img01");
var captionText = document.getElementById("caption");
img.onclick = function(){
    modal.style.display = "block";
    modalImg.src = this.src;
    captionText.innerHTML = this.alt;
}

// fig1
var img = document.getElementById('fig1');
var modalImg = document.getElementById("img01");
var captionText = document.getElementById("caption");
img.onclick = function(){
    modal.style.display = "block";
    modalImg.src = this.src;
    captionText.innerHTML = this.alt;
}

// head
var img = document.getElementById('head');
var modalImg = document.getElementById("img01");
var captionText = document.getElementById("caption");
img.onclick = function(){
    modal.style.display = "block";
    modalImg.src = this.src;
    captionText.innerHTML = this.alt;
}

// grasp
var img = document.getElementById('grasp');
var modalImg = document.getElementById("img01");
var captionText = document.getElementById("caption");
img.onclick = function(){
    modal.style.display = "block";
    modalImg.src = this.src;
    captionText.innerHTML = this.alt;
}

// moose
var img = document.getElementById('moose');
var modalImg = document.getElementById("img01");
var captionText = document.getElementById("caption");
img.onclick = function(){
    modal.style.display = "block";
    modalImg.src = this.src;
    captionText.innerHTML = this.alt;
}

// betta
var img = document.getElementById('betta');
var modalImg = document.getElementById("img01");
var captionText = document.getElementById("caption");
img.onclick = function(){
    modal.style.display = "block";
    modalImg.src = this.src;
    captionText.innerHTML = this.alt;
}

// plane
var img = document.getElementById('plane');
var modalImg = document.getElementById("img01");
var captionText = document.getElementById("caption");
img.onclick = function(){
    modal.style.display = "block";
    modalImg.src = this.src;
    captionText.innerHTML = this.alt;
}

// me
var img = document.getElementById('me');
var modalImg = document.getElementById("img01");
var captionText = document.getElementById("caption");
img.onclick = function(){
    modal.style.display = "block";
    modalImg.src = this.src;
    captionText.innerHTML = this.alt;
}

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

// When the user clicks on <span> (x), close the modal
span.onclick = function() { 
    modal.style.display = "none";
}

var boxid = "myModal";
 window.onkeyup = function (event) {
  if (event.keyCode == 27) {
    document.getElementById(boxid).style.display="none";
  }}


// for hovering on chew
var img = document.getElementById("chew");
var a = document.getElementById('chewText');
img.onmouseover = function(){
    chewText.style.display = "block";
    
}
// for hovering pt2 chew
var img = document.getElementById("chew");
var a = document.getElementById('chewText');
img.onmouseout = function(){
    chewText.style.display = "none";
}

// for hovering on fine
var img = document.getElementById("fine");
var a = document.getElementById('fineText');
img.onmouseover = function(){
    fineText.style.display = "block";
}
// for hovering pt2 fine
var img = document.getElementById("fine");
var a = document.getElementById('fineText');
img.onmouseout = function(){
    fineText.style.display = "none";
}

// for hovering on bodoni
var img = document.getElementById("bodoni");
var a = document.getElementById('bodoniText');
img.onmouseover = function(){
    bodoniText.style.display = "block";
}
// for hovering pt2 fine
var img = document.getElementById("bodoni");
var a = document.getElementById('bodoniText');
img.onmouseout = function(){
    bodoniText.style.display = "none";
}


console.log('is this working?')