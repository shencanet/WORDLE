let word = "texto";
let wordArray = word.split('');
let actualRow = document.querySelector('.row');

wordArray.forEach(element => {
    actualRow.innerHTML +=`<input type="text" maxlength="1" class="square">`
})
let squares = document.querySelectorAll('.square'); 
console.log(squares);