function generateStimulus(images, t) {
  let windowHeight = window.innerHeight;

  let result = `<div style="transform: scale(${windowHeight / 1000}, ${windowHeight / 1000}); height: ${windowHeight}px; width: ${windowHeight}px;
  display: flex; justify-content: center; flex-basis: auto; align-items: center; align-content: center;">

  <div style="display: flex; justify-content: center; flex-basis: auto; align-items: center; align-content: center; 
  position: relative; width: 900px; height: 900px; ">`

  let locations = [
    [0, 300],
    [300, 0],
    [300, 600],
    [600, 300]
  ];

  for (let i = 0; i < 4; i++) {
    result += `<img src="${images[i]}" width="300" height="300" 
    style="position: absolute; top: ${locations[i][0]}px; left: ${locations[i][1]}px
    ">`

    result += `<div style="position: absolute; top: ${locations[i][0]}px; left: ${locations[i][1]}px;
    width: 300px; height: 300px;
    font-size: 100px; line-height: 300px; text-align: center;
    font-weight: bold;
    -webkit-text-fill-color: white; /* Will override color (regardless of order) */
    -webkit-text-stroke-width: 4px;
    -webkit-text-stroke-color: black;
    transform: rotate(${t[i]}deg);
    ">T</div>`
  }

  result += `<div id="obfuscator" style="
      position: absolute; width: 1100px; height: 900px; background-color: white;
      "></div>`

  result += `</div></div>`

  return result
}

function generateScaledHTML(htmlToBeWrapped) {
  let windowHeight = window.innerHeight;
  let result = `<div style="font-size: 25px; line-height: 30px; position: relative; transform: scale(${(windowHeight / 800)}, ${(windowHeight / 800)}); ">` + htmlToBeWrapped + '</div>';
  return result
}

function shuffle(array) {
  let newArray = [...array];
  var currentIndex = newArray.length, temporaryValue, randomIndex;

  // While there remain elements to shuffle...
  while (0 !== currentIndex) {

    // Pick a remaining element...
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex -= 1;

    // And swap it with the current element.
    temporaryValue = newArray[currentIndex];
    newArray[currentIndex] = newArray[randomIndex];
    newArray[randomIndex] = temporaryValue;
  }

  return newArray;
}

function hasDuplicates(array) {
  var valuesSoFar = Object.create(null);
  for (var i = 0; i < array.length; ++i) {
    var value = array[i];
    if (value in valuesSoFar) {
      return true;
    }
    valuesSoFar[value] = true;
  }
  return false;
}