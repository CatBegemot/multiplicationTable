var imgBackgroud = document.createElement("img");
imgBackgroud.id = "imgBackgroud";
document.body.appendChild(imgBackgroud);
  imgBackgroud.style.zIndex = 0;
  imgBackgroud.src = imgPath + "kletka.png";

var divLevel = document.createElement("div");
divLevel.id = "divLevel";
document.body.appendChild(divLevel);
  divLevel.style.position = "absolute";
  divLevel.style.zIndex = 1;
  divLevel.style.top = "95px";
  divLevel.style.left = "95px";
  
var index;
  for (var index = 0; index <= 9; index++) {
  var imgLevel = document.createElement("img");
  divLevel.appendChild(imgLevel);
  imgLevel.style.border = "1px solid #3eff03";
  imgLevel.style.margin = "5px";
  imgLevel.style.left = (45*index) +"px";
  imgLevel.src = imgPath +  "dig" + index + ".png";
}

var divMain = document.createElement("div");
divMain.id = "divMain";
document.body.appendChild(divMain);
  divMain.style.position = "absolute";
  divMain.style.zIndex = 1;
  divMain.style.top = "200px";
  divMain.style.left = "100px";
  divMain.style.border = "1px solid #3eff03";

var divSelector = document.createElement("div");
divSelector.id = "divSelector";
document.body.appendChild(divSelector);
  divSelector.style.position = "absolute";
  divSelector.style.zIndex = 1;
  divSelector.style.top = "300px";
  divSelector.style.left = "100px";
  divSelector.style.border = "1px solid #3eff03";

var divScore = document.createElement("div");
divScore.id = "divScore";
document.body.appendChild(divScore);
  divScore.style.position = "absolute";
  divScore.style.zIndex = 1;
  divScore.style.top = "400px";
  divScore.style.left = "100px";
  divScore.style.border = "1px solid #3eff03";

// imgMulty.onclick = function() {getNum(imgMultySrc)};