let paragraphElement = document.querySelector('#test');
function changeParagraphText() {
    paragraphElement.textContent = 'Clicked !';
    console.log('Paragraph Clicked');
}
paragraphElement.addEventListener('click', changeParagraphText);



    //listening to user input

let typedText = document.querySelector('input');
function retrieveUserInput (){
    let enteredText = typedText.value;
    console.log(enteredText);
}

typedText.addEventListener('input', retrieveUserInput );

// function test1(event){
//     let bn5;
//     bn5.addEventListener('click');
//     alert('Clicked');
// }
// test1();