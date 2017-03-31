function fadeOutSnowflake(){
  var elem = document.getElementById('display');
  elem.style.opacity = '0';
  elem.style.zIndex = '5';
}

function fadeInSnowflake(){
  var elem = document.getElementById('display');
  elem.style.opacity = '1';
  elem.style.zIndex = '10';
}

function fadeOutTri(){
  var elem = document.getElementById('displayTwo');
  elem.style.opacity = '0';
  elem.style.zIndex = '5';
}

function fadeInTri(){
  var elem = document.getElementById('displayTwo');
  elem.style.opacity = '1';
  elem.style.zIndex = '10';
}

function displaySnowflake(){
  fadeOutTri();
  fadeInSnowflake();
}

function displayTri(){
  fadeOutSnowflake();
  fadeInTri();
}

function toggleOrange(){
  triangle.toggleColorOrange();
  snowflake.toggleColorOrange();
}

function toggleBlue(){
  triangle.toggleColorBlue();
  snowflake.toggleColorBlue();
}

function toggleGreen(){
  triangle.toggleColorGreen();
  snowflake.toggleColorGreen();
}

function toggleGold(){
  triangle.toggleColorGold();
  snowflake.toggleColorGold();
}

function dimLights(){
  var elems = document.getElementsByTagName('button');
  elems[0].style.color = '#FFF';
  elems[1].style.color = '#FFF';
  elems[2].style.color = '#FFF';
  var elem = document.getElementById('body');
  elem.style.backgroundColor = 'black';
  var header = document.getElementById('title');
  header.style.color = '#FFF';
}

function onLights(){
  var elems = document.getElementsByTagName('button');
  elems[0].style.color = '#000';
  elems[1].style.color = '#000';
  elems[2].style.color = '#000';
  var elem = document.getElementById('body');
  elem.style.backgroundColor = '#fafafa';
  var header = document.getElementById('title');
  header.style.color = '#000';
}

function deleteMouseOver(){
  var elem = document.getElementById("hover-over");
  elem.style.opacity = '0';
  elem.style.zIndex = '1';
}
