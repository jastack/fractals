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

function makeColorsWhite(){
  var elems = document.getElementsByTagName("h4");
  elems[0].style.color = '#FFF';
  elems[1].style.color = '#FFF';
  elems[2].style.color = '#FFF';
  var pars = document.getElementsByTagName("p");
  pars[0].style.color = '#FFF';
  pars[1].style.color = '#FFF';
  pars[2].style.color = '#FFF';
}

function makeColorsGray(){
  var elems = document.getElementsByTagName("h4");
  elems[0].style.color = '#777';
  elems[1].style.color = '#777';
  elems[2].style.color = '#777';
  var pars = document.getElementsByTagName("p");
  pars[0].style.color = '#777';
  pars[1].style.color = '#777';
  pars[2].style.color = '#777';
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
  displaySnowInfo();
}

function displayTri(){
  fadeOutSnowflake();
  fadeInTri();
  fadeMandlebrot();
  displaySierpInfo();
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
  makeColorsWhite();
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
  makeColorsGray();
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
  displayMandelInfo();
}

function displaySierpInfo(){
  var words = document.getElementsByClassName("sierp-info");
  var koch = document.getElementsByClassName("koch-info");
  var mandel = document.getElementsByClassName("mandel-info");
  koch[0].style.opacity = 0;
  mandel[0].style.opacity = 0;
  words[0].style.opacity = 1;
}

function displaySnowInfo(){
  var words = document.getElementsByClassName("sierp-info");
  var koch = document.getElementsByClassName("koch-info");
  var mandel = document.getElementsByClassName("mandel-info");
  koch[0].style.opacity = 1;
  mandel[0].style.opacity = 0;
  words[0].style.opacity = 0;
}

function displayMandelInfo(){
  var words = document.getElementsByClassName("sierp-info");
  var koch = document.getElementsByClassName("koch-info");
  var mandel = document.getElementsByClassName("mandel-info");
  koch[0].style.opacity = 0;
  mandel[0].style.opacity = 1;
  words[0].style.opacity = 0;
}
