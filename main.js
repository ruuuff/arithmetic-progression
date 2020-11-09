var clear = 0
function ratio(start, until, ratio) {
  if (clear === 1) {
    var container = document.querySelector("#clone-here");
    var clones = document.querySelectorAll(".clone-this");
    
    var clonesLeng = clones.length;
    var delCount = 1;
    
    while (delCount <= clonesLeng - 1) {
      container.removeChild(clones[delCount]);
      delCount++;
    }
    clear = 0;
  }
  clear++;
  
  function onScreen() {
    var container = document.querySelector('#clone-here');
    var clone = document.querySelectorAll('.clone-this');
    var newClone = clone[clone.length - 1].cloneNode(true);
    newClone.classList.remove('hidden');
    container.appendChild(newClone);
    var printCount = document.querySelectorAll('.printCount');
    var printStart = document.querySelectorAll('.printStart');
    var newPrintCount = printCount[printCount.length - 1];
    var newPrintStart = printStart[printStart.length - 1];
    newPrintStart.innerHTML = start;
    newPrintCount.innerHTML = count;
  }

  var count = 0;
  if (start <= until) {
    while (start <= until) {
      onScreen();
      start += ratio;
      count++;
    }
  } else {
    while (start >= until) {
      onScreen();
      start -= ratio;
      count++;
    }
  }
}

function callPrompt() {
  var startValue = prompt("Valor inicial:");
  var untilValue = prompt("Valor final:");
  var ratioValue = prompt("Razão:");

  var arrayPromp = [startValue, untilValue, ratioValue];
  var arrayAbc = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z", "ç"];

  var txt = "🛑 Insira apenas valores numéricos! 🛑";

  if ((startValue === "") || (untilValue === "") || (ratioValue === ""))
    alert(txt);
  else if ((startValue === null) || (untilValue === null) || (ratioValue === null))
    alert(txt);
  else if (ratioValue == 0)
    alert("🛑 A razão não pode ser \"0\". 🛑")
  else {
    var prompLeng = arrayPromp.length;
    var prompCount = 0;
    while (prompCount < prompLeng) {
      var abcLeng = arrayAbc.length;
      var abcCount = 0;
      while (abcCount < abcLeng) {
        var verify = arrayPromp[prompCount].indexOf(arrayAbc[abcCount]);
        if (verify >= 0) {
          alert(txt);
          prompCount = 9 * 99999;
          break;
        } else
          abcCount++;
      }
      if (prompCount === prompLeng - 1) {
        startValue = +startValue;
        untilValue = +untilValue;
        ratioValue = +ratioValue;
        ratio(startValue, untilValue, ratioValue);
        break;
      }
      prompCount++;
    }
  }
}