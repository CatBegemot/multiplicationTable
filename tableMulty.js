var imgBackgroud = document.createElement("img");
imgBackgroud.id = "imgBackgroud";
document.body.appendChild(imgBackgroud);
imgBackgroud.style.zIndex = 0;
imgBackgroud.src = imgPath + "kletka.png";

var divLevel = document.createElement("div");
divLevel.id = "divLevel";
document.body.appendChild(divLevel);
var imgLevel = document.createElement("img");
imgLevel.id = "imgLevel";
divLevel.appendChild(imgLevel);
  
  divLevel.style.position = "absolute";
  divLevel.style.zIndex = 1;
  divLevel.style.border = "1px solid #3eff03";
  divLevel.style.top = "100px";
  divLevel.style.left = "100px";
    
var item = document.getElementsByClassName("dig");
var i;
for (i = 0; i < item.length; i++) {
  item[i].style.left = 45 * i + 10;
  item[i].src = imgLevel.src (imgPath + "dig[i].png");
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
