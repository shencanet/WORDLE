let resultElement = document.querySelector(".result");

let mainContainer = document.querySelector(".main-container");
let rowId = 1;

//peticion API
fetch('https://1000-most-common-words.p.rapidapi.com/words/spanish?words_limit=1')
.then
let word = "texto";
let wordArray = word.toUpperCase().split("");
console.log(wordArray);
let actualRow = document.querySelector(".row");

drawSquares(actualRow);
listenInput(actualRow);
addfocus(actualRow);

function listenInput(actualRow) {
  let squares = actualRow.querySelectorAll(".square");
  squares = [...squares]; //convierte nodelist en un arreglo

  let userInput = [];

  squares.forEach((element) => {
    element.addEventListener("input", (event) => {
      console.log(event.inputType)
      //logica borra letra no rompa array
      if(event.inputType !== 'deleteContentBackward'){
              //recoger datos user
      userInput.push(event.target.value.toUpperCase());
      console.log(userInput);
      //pasar siguiente letra
      if (event.target.nextElementSibling) {
        event.target.nextElementSibling.focus();
      } else {
        //CREAR ARREGLO COMPLETO 
        let squarefilled = document.querySelectorAll('.square')
        console.log(squarefilled)


        let rightIndex = compareArrays(wordArray, userInput);
        rightIndex.forEach((element) => {
          squares[element].classList.add("green")})
         //los Arrays son iguales ha Ganado
        if (rightIndex.length == wordArray.length) {
          showResult("Ganaste");

          return}
        //CREAR NUEVA FILA

        let actualRow = createRow();
        if(!actualRow){return}

        drawSquares(actualRow);
        listenInput(actualRow);
        addfocus(actualRow);

        //CAMBIAR ESTILOS LETRA CORRECT POSICION INCORRECTA
        let existIndexArray = existLetter(wordArray, userInput);
        existIndexArray.forEach((element) => {
          squares[element].classList.add("gold")})

      }//if

      }else{
        userInput.pop();
      }


    })
  })//squares
}//funcion

function compareArrays(array1, array2) {
  let equalsIndex = [];
  array1.forEach((element, index) => {
    if (element == array2[index]) {
      equalsIndex.push(index);
      console.log(`EN LA POSICION ${index} son iguales`);
    } else {
      console.log(`EN LA POSICION ${index} no son iguales`);
    }
  });
  return equalsIndex;
}

function existLetter(array1, array2) {
  let existIndexArray = [];
  array2.forEach((element, index) => {
    if (array1.includes(element)) {
      existIndexArray.push(index);
      //console.log(`existe letra ${index}`)
    }
  });
  return existIndexArray;
}

function createRow() {
  rowId++;
  if (rowId <= 5) {
    let newRow = document.createElement("div");
    newRow.classList.add("row");
    newRow.setAttribute("id", rowId);
    mainContainer.appendChild(newRow);
    return newRow;
  } else {
    showResult(`La respuesta correcta era "${word.toUpperCase()}" `);
  }
}

function drawSquares(actualRow) {
  wordArray.forEach((item, index) => {
    if (index === 0) {
      actualRow.innerHTML += `<input type="text" maxlength="1" class="square focus">`;
    } else {
      actualRow.innerHTML += `<input type="text" maxlength="1" class="square">`;
    }
  });
}

function addfocus(actualRow) {
  let focusElement = actualRow.querySelector(".focus");
  //console.log(focusElement)
  focusElement.focus();
}

function showResult(textMsg) {
  resultElement.innerHTML = `<p>${textMsg}</p>
          <button class="button">Reiniciar</button>`;
  let resetBtn = document.querySelector(".button");
  resetBtn.addEventListener("click", () => {
    location.reload();
  });
}
