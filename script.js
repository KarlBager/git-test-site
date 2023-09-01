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






document.querySelector('gridEl3');
document.querySelector('textRandomColor');
function changeColorRandom(){
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
    color = getRandomColor();
    console.log(color);
    gridEl3.style.backgroundColor = getRandomColor();
    textRandomColor.style.color = getRandomColor();
}

