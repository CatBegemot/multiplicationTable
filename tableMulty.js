var imgBackgroud = document.createElement("img");
  imgBackgroud.id = "imgBackgroud";
document.body.appendChild(imgBackgroud);
  imgBackgroud.style.zIndex = -1;
  imgBackgroud.src = imgPath + "kletka.png";

var divLevel = document.createElement("div");
divLevel.id = "divLevel";
document.body.appendChild(divLevel);
var textBegin = document.createElement("p");
  textBegin.id = "textBegin";
  divLevel.appendChild(textBegin);
  textBegin.style.fontFamily = "Arial"; 
  textBegin.style.fontStyle = "Italic"; 
  textBegin.style.fontSize = "30px";
  textBegin.zIndex = 1;
  textBegin.style.position = "absolute";
  textBegin.style.top = "-85px";
  textBegin.style.left = "15px";
  textBegin.style.color = "darkblue";
  textBegin.innerHTML = "It`s a test for multiplication table";

var imgLevel = document.createElement("img");
imgLevel.id = "imgLevel";
  divLevel.appendChild(imgLevel);
  divLevel.style.position = "absolute";
  divLevel.style.zIndex = 1;
  divLevel.style.top = "100px";
  divLevel.style.left = "80px";
 
var index;
  for (var index = 0; index <= 9; index++) {
var imgLevel = document.createElement("img");
  divLevel.appendChild(imgLevel);
  imgLevel.style.margin = "5px";
  imgLevel.style.left = (45*index) +"px";
  imgLevel.src = imgPath + "dig" + index + ".png";
}

var divMain = document.createElement("div");
divMain.id = "divMain";
document.body.appendChild(divMain);
  divMain.style.position = "absolute";
  divMain.style.zIndex = 1;
  divMain.style.top = "160px";
  divMain.style.left = "95px";

var textChoise = document.createElement("p");
  textChoise.id = "textChoise";
  divMain.appendChild(textChoise);
  textChoise.style.fontFamily = "Arial";
  textChoise.style.fontStyle = "Italic";
  textChoise.style.color = "darkblue";
  textChoise.style.fontSize = "30px";
  textChoise.innerHTML = "Choose the value of the first factor";

var imgMainMulty = document.createElement("img");
  divMain.appendChild(imgMainMulty);

  for (var index = 0; index <= 9; index++) {
    imgLevel.onclick = function() {getNum(imgMainMulty)};
  imgMainMulty.src = imgPath + "case";   
      
    }


  

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
