let resultElement = document.querySelector(".result");
let word = "texto";
let wordArray = word.toUpperCase().split("");
console.log(wordArray);
let actualRow = document.querySelector(".row");

wordArray.forEach((item, index) => {
  if (index === 0) {
    actualRow.innerHTML += `<input type="text" maxlength="1" class="square focus">`;
  } else {
    actualRow.innerHTML += `<input type="text" maxlength="1" class="square">`;
  }
});
let focusElement = document.querySelector(".focus");
//console.log(focusElement)
focusElement.focus();

let squares = document.querySelectorAll(".square");
squares = [...squares]; //convierte nodelist en un arreglo
let userInput = [];
squares.forEach((element) => {
  element.addEventListener("input", (event) => {
    //recoger datos user
    userInput.push(event.target.value.toUpperCase());
    console.log(userInput);
    //pasar siguiente letra
    if (event.target.nextElementSibling) {
      event.target.nextElementSibling.focus();
    } else {
      let rightIndex = compareArrays(wordArray, userInput);
      rightIndex.forEach((element) => {
        squares[element].classList.add("green");

      }); //los Arrays son iguales ha Ganado
      if (rightIndex.length == wordArray.length) {
        resultElement.innerHTML = `<p>Ganaste!!!!!</p>
        <button class="button">Reiniciar</button>`;
      }
      //CAMBIAR ESTILOS LETRA CORRECT POSICION INCORRECTA
     let existIndexArray =   existLetter(wordArray, userInput);
     existIndexArray.forEach(element => {
      squares[element].classList.add('gold');
     })
            
      //PARTIDA GANADA REINICIAR PARTIDA
      let resetBtn = document.querySelector(".button");
      resetBtn.addEventListener("click", () => {
        location.reload();
      });
    }
  });
});

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

function existLetter(array1, array2){
  let existIndexArray = [];
  array2.forEach((element, index) => {
    if(array1.includes(element)){
      existIndexArray.push(index)
      //console.log(`existe letra ${index}`)
    }
  });
  return existIndexArray;
}