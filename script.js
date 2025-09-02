// When the user scrolls down 50px from the top of the document, resize the header's font size
window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  /*
  if (document.body.scrollTop > 200 || document.documentElement.scrollTop > 200) {
    document.getElementById("header").style.display = "none";   
  } else */ if (document.body.scrollTop > 50 || document.documentElement.scrollTop > 50) {
    document.getElementById("header").style.fontSize = "12px";
    document.getElementsByTagName("h1")[0].style.fontSize = "12px";
    document.getElementsByTagName("header")[0].style.height = "70px"; // It would be nice to convert the rest of these over
    // document.getElementById("header").style.height = "20px";
    // document.getElementById("header").style.paddingLeft = "8000px";
    document.getElementById("header").style.textAlign = "right"; // redundant if not altered between conditions 
    document.getElementById("header").style.maxWidth = "100%";
    document.getElementById("header").style.borderLeft = "0px dashed #60605f";
    document.getElementById("header").style.borderRight = "0px dashed #60605f";
    document.getElementById("header").style.borderTop = "0px dashed #60605f";

  } else {

    document.getElementById("header").style.fontSize = "30px";
    document.getElementsByTagName("h1")[0].style.fontSize = "30px";
    document.getElementById("header").style.height = "var(--header-height)";
    document.getElementById("header").style.height = "245px";
    document.getElementById("header").style.textAlign = "right"; // redundant if not altered between conditions
    // document.getElementById("header").style.paddingLeft = "150px";
    // document.getElementById("header").style.display = "flex";   
    document.getElementById("header").style.maxWidth = "var(--content-width)";
	    document.getElementById("header").style.maxWidth = "85%";
    document.getElementById("header").style.border = "30px solid white";

  }
}

/*
function scrollFunctionBACKUP() {
  if (document.body.scrollTop > 50 || document.documentElement.scrollTop > 50) {
    document.getElementById("header").style.fontSize = "10px";
	document.getElementById("header").style.height = "10px";
  } else {
    document.getElementById("header").style.fontSize = "30px";
	document.getElementById("header").style.height = "145px";
  }
}
*/

function showContact() {
  document.getElementById("main-contents").innerHTML = "email:<br> c o n t a c t @drewloy.com</i>";
}




/*
  © 2022 apparentlysubliminal.github.io
*/