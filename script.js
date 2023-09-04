let headingText = "Karls Playground"
document.querySelector('pageHeadingText');
pageHeadingText.innerHTML = headingText;

let secondaryHeadingText = "- et rum, hvor Karl kan eksperimentere med HTML, CSS og JavaScript og bliver <strong>hammer</strong> dygtig med Karstens <em>fortrinlige</em> støtte";
document.querySelector('pageSecondaryHeadingText');
pageSecondaryHeadingText.innerHTML = secondaryHeadingText;

document.querySelector('gridEl2');
function changeColor(){
gridEl2.style.backgroundColor = "coral";    
}
function changeColorBack(){
    gridEl2.style.backgroundColor = "lightgreen";    
}



function getRandomColor() {
  var letters = '0123456789ABCDEF';
  var color = '#';
  for (var i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)];
  }
  return color;
  
}

function setRandomColor() {
  $("#colorpad").css("background-color", getRandomColor());
}




document.querySelector('gridEl3');
document.querySelector('textRandomColor');
function changeColorRandom(){
    color = getRandomColor();
    console.log(color);
    gridEl3.style.backgroundColor = getRandomColor();
    textRandomColor.style.color = getRandomColor();
}














let visualGridRow = 1;
document.querySelector('visualGridContainer');

const cellCount = 2500;
columnCount = Math.sqrt(cellCount);
console.log(columnCount);

nextRowTrigger = columnCount-1;
nextRowTriggers = [nextRowTrigger];

for (var j = 0; j < columnCount-1; j++){
nextRowTrigger = nextRowTrigger + columnCount;
nextRowTriggers.push(nextRowTrigger);
}
console.log(nextRowTriggers);



spectrumColor = "hsl("







let hue = 0;

for (var i = 0; i < cellCount; i++){


let createCells = document.createElement('div');
className = "grid-element visualGridElement visualGrid" + i;
createCells.setAttribute('class', className);
createCells.style.gridRow = visualGridRow;


let hueIncreaseBy = 360/cellCount;

hue = hue + hueIncreaseBy;
spectrumColor = "hsl(" + hue + ",100%,50%)";

createCells.style.backgroundColor = spectrumColor;

if(nextRowTriggers.includes(i)){
  visualGridRow++;
}

visualGridContainer.appendChild(createCells);
}





