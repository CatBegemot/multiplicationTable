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
  textBegin.style.width = "800px";
  textBegin.style.top = "-85px";
  textBegin.style.left = "15px";
  textBegin.style.color = "darkblue";
  textBegin.innerHTML = "Choose the value of the first factor";

var imgLevel = document.createElement("img");
imgLevel.id = "imgLevel";
  divLevel.appendChild(imgLevel);
  divLevel.style.position = "absolute";
  divLevel.style.zIndex = 1;
  divLevel.style.top = "100px";
  divLevel.style.left = "80px";
 
var index;
  for (var index = 2; index <= 9; index++) {
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
  divMain.style.top = "200px";
  divMain.style.left = "95px";

  var imgChoiseDigital = document.createElement("img");
  var Lvl = document.createElement("img");
  divMain.appendChild(imgChoiseDigital);
  imgLevel.onclick = function() {getNum(imgChoiseDigital)};
  imgChoiseDigital.src = imgPath + "dig" + "Lvl" + ".png";
  
// var textChoice = document.createElement("p"); // for test
//   textChoice.id = "textChoice";
//   divMain.appendChild(textChoice); 
//   textChoice.style.top = "-85px";
//   textChoice.style.left = "15px";
//   textChoice.style.color = "darkblue";
//   textChoice.innerHTML = "case";

var imgMulty = document.createElement("img");
  divMain.appendChild(imgMulty);   
  imgMulty.style.left = "160px"; 
  imgMulty.style.width = "30px";
  imgMulty.src = imgPath + "digMulty.png"

var imgRandomDigital = document.createElement("img");
  divMain.appendChild(imgRandomDigital);   
  imgRandomDigital.style.left = "240px"; 
var indexRandom;  
  indexRandom = Math.floor(Math.random() * 10);
  imgRandomDigital.src = imgPath + "dig" + indexRandom + ".png" // must choise from digNumber.png by case

var textRandom = document.createElement("p"); // for test
  divMain.appendChild(textRandom);
  textRandom.style.position = "absolute";
  textRandom.id = "textRandom";
  textRandom.style.fontFamily = "Arial"; 
  textRandom.style.fontStyle = "Italic";
  textRandom.style.fontSize = "20px";
  textRandom.style.top = "50px";
  textRandom.style.left = "60px";
  textRandom.style.color = "red";
  textRandom.innerHTML = indexRandom;


var imgEqual = document.createElement("img");
  divMain.appendChild(imgEqual);   
  imgEqual.style.left = "290px"; 
  imgEqual.style.width = "30px";
  imgEqual.src = imgPath + "digEqual.png"  

var imgRezult1 = document.createElement("img");
  divMain.appendChild(imgRezult1);   
var imgRezult2 = document.createElement("img");
  divMain.appendChild(imgRezult2);  

var rezult;
  rezult = "case" * "indexRandom";
  imgRezult1.style.left = "330px"; 
  imgRezult2.style.left = "380px"; 
  imgRezult1.onclick = function() {getNum(imgLevel)};
  imgRezult2.onclick = function() {getNum(imgLevel)};
  imgRezult1.src = imgPath + "case" + ".png" // must choise from digNumber.png by case
  imgRezult2.src = imgPath + "case" + ".png" // must choise from digNumber.png by case

var textCheck = document.createElement("p");
  textCheck.id = "textCheck";
  divMain.appendChild(textCheck);
  textCheck.style.fontFamily = "Arial"; 
  textCheck.style.fontStyle = "Italic"; 
  textCheck.style.fontSize = "30px";
  textCheck.zIndex = 1;
  textCheck.style.position = "absolute";
  textCheck.style.top = "100px";
  textCheck.style.left = "40px";
  textCheck.style.color = "red";
  textCheck.innerHTML = "?";
  
var divScore = document.createElement("div");
  divScore.id = "divScore";
  divMain.appendChild(divScore);
  divScore.style.position = "absolute";
  divScore.style.zIndex = 1;
  divScore.style.top = "140px";
  divScore.style.left = "200px";
  
var textScore = document.createElement("p");
  textScore.id = "textScore";
  divMain.appendChild(textScore);
  textScore.style.fontFamily = "Arial"; 
  textScore.style.fontStyle = "Italic"; 
  textScore.style.fontSize = "30px";
  textScore.zIndex = 1;
  textScore.style.position = "absolute";
  textScore.style.top = "100px";
  textScore.style.left = "100px";
  textScore.style.color = "red";
  textScore.innerHTML = "Score:";

  var imgScore = document.createElement("img");
  divScore.appendChild(imgScore); 
var score;
  //score = 
   
  imgScore.onclick = function() {getNum(imgLevel)};
  imgScore.src = imgPath + "score" + ".png" // must choise from digNumber.png by case



  // var textBegin = document.createElement("p");
  // textBegin.id = "textBegin";
  // divLevel.appendChild(textBegin);
  // textBegin.style.fontFamily = "Arial"; 
  // textBegin.style.fontStyle = "Italic"; 
  // textBegin.style.fontSize = "30px";
  // textBegin.zIndex = 1;
  // textBegin.style.position = "absolute";
  // textBegin.style.width = "800px";
  // textBegin.style.top = "-85px";
  // textBegin.style.left = "15px";
  // textBegin.style.color = "darkblue";
  // textBegin.innerHTML = "Choose the value of the first factor";