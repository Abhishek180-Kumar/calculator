let input = document.getElementByIdetElementrById('inputBox');
let button = document.querySelectorAll('button');

let string ="";
let arr = Array.from(buttons);
arr.forEach(button => {
    button.addeventListener('click',(e)=>{
        if(e.target.innerHTML == '='){
            string = eval(string);
            input.value = string;

        }
        string += e.target.innerHTML;
        input.value = string;
    })
})