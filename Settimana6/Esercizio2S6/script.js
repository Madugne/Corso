let saveButton = document.getElementById('save-button')
let clearButton = document.getElementById('clear-button')
let textArea = document.querySelector('textarea')

saveButton.addEventListener('click', function () {
    let textAreaContent = textArea.value
    console.log('testo nella textarea', textAreaContent)
    localStorage.setItem('savedText', textAreaContent)
  })

  clearButton.addEventListener('click', function () {
    localStorage.removeItem('savedText')
    textArea.value = ''
  })

  const restoreContent = function () {
    let previouslySavedText = localStorage.getItem('savedText')
    if (previouslySavedText) {
      textArea.value = previouslySavedText
    } else {
    }
  }

window.onload = function () {
    restoreContent()
}

//esercizio 2

let timer = document.getElementById("timer");
let tempo = sessionStorage.getItem ("tempo") || 0;

timer.innerText = tempo;

const timePassed = () => {
    tempo++;
    timer.innerText = tempo;
    sessionStorage.setItem("tempo", tempo);
};

setInterval(timePassed, 1000);

window.addEventListener("beforeUnload", function () {
    sessionStorage.setItem("tempo", tempo);
});