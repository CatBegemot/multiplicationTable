function startTabl() {
    var viz = document.getElementById("imgLevel");
    viz.style.visibility = "visible";
    
  var elem = document.getElementById("imgLevel");   
    var pos = 100;
    var id = setInterval(frame, 1);
    function frame() {
      if (pos == 600) {
        clearInterval(id);
      } else {
        pos++; 
        elem.style.left = pos + "50px"; 
        }
      }
  }

switch(imgLevel) {
  case "dig0.png":
    return "0";
    break;
  case "dig1.png":
    return "1";
    break;
  case "dig2.png":
    return "2";
    break;
  case "dig3.png":
    return "3";
    break;
  case "dig4.png":
    return "4";
    break;  
  case "dig5.png":
    return "5";
    break;
  case "dig6.png":
    return "6";
    break;
  case "dig7.png":
    return "7";
    break;
  case "dig8.png":
    return "8";
    break;
  case "dig9.png":
    return "9";
    break;
}


tens = getNum(tensImg)