// When the user scrolls down 50px from the top of the document, resize the header's font size
window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 50 || document.documentElement.scrollTop > 50) {
    document.getElementById("titlebox").style.fontSize = "10px";
	document.getElementById("titlebox").style.height = "10px";
  	document.getElementById("titlebox").style.textAlign = "center";
  } else {
    document.getElementById("titlebox").style.fontSize = "30px";
	document.getElementById("titlebox").style.height = "145px";
	document.getElementById("titlebox").style.textAlign = "left";
  }
}

/*
function scrollFunctionBACKUP() {
  if (document.body.scrollTop > 50 || document.documentElement.scrollTop > 50) {
    document.getElementById("titlebox").style.fontSize = "10px";
	document.getElementById("titlebox").style.height = "10px";
  } else {
    document.getElementById("titlebox").style.fontSize = "30px";
	document.getElementById("titlebox").style.height = "145px";
  }
}
*/

function showContact() {
  document.getElementById("main-contents").innerHTML = "dupeyloops<br><i>email@domain.com</i>";
}

/*
  © 2022 Andrew Loy
  dupeyloops.github.io
*/