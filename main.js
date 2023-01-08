let word = "texto";
let wordArray = word.toUpperCase().split("");
console.log(wordArray)
let actualRow = document.querySelector(".row");



wordArray.forEach((item, index) => {
    if(index === 0){
    
        actualRow.innerHTML += `<input type="text" maxlength="1" class="square focus">`;
    }else{
        actualRow.innerHTML += `<input type="text" maxlength="1" class="square">`;
    }
  
});
let focusElement = document.querySelector('.focus')
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
    if(event.target.nextElementSibling){
        event.target.nextElementSibling.focus();
    }else{
        
        let sameElement = compareArrays(wordArray, userInput);
        console.log(sameElement);
    }
    
  });
});

    function compareArrays(array1, array2){
        let equalsIndex = [];
        array1.forEach((element, index)=>{
            if(element == array2[index]){
                equalsIndex.push(index);
                console.log(`EN LA POSICION ${index} son iguales`)
            }else{
                console.log(`EN LA POSICION ${index} no son iguales`)
            }
        })
        return equalsIndex;
     };