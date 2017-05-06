var star = document.getElementById("star");

star.onclick = function() {
  if (star.className == "active") {
    star.className = "";
  } else {
    star.className = "active";
  }

};
