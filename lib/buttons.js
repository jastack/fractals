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
  fadeMandlebrot();
}

function displayTri(){
  fadeOutSnowflake();
  fadeInTri();
  fadeMandlebrot();
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
  switchOff();
}

function onLights(){
  var elems = document.getElementsByTagName('button');
  elems[0].style.color = '#777';
  elems[1].style.color = '#777';
  elems[2].style.color = '#777';
  var elem = document.getElementById('body');
  elem.style.backgroundColor = '#fafafa';
  var header = document.getElementById('title');
  header.style.color = '#000';
  fadeMandlebrot();
  switchOn();
}

function deleteMouseOver(){
  var elem = document.getElementById("hover-over");
  elem.style.opacity = '0';
  elem.style.zIndex = '1';
}

function fadeMandlebrot(){
  var elem = document.getElementById('mandle');
  elem.style.opacity = '0';
}

function fadeInMandlebrot(){
  var elem = document.getElementById('mandle');
  elem.style.opacity = '1';
}

function switchOff(){
  var off = document.getElementById('switchOff');
  off.style.zIndex = 5;
  var on = document.getElementById('switchOn');
  on.style.zIndex = 10;
}

function switchOn(){
  var off = document.getElementById('switchOff');
  off.style.zIndex = 10;
  var on = document.getElementById('switchOn');
  on.style.zIndex = 5;
}

function displayMandlebrot(){
  deleteMouseOver();
  fadeOutSnowflake();
  fadeOutTri();
  dimLights();
  fadeInMandlebrot();
}
