const text = "My name is Suhas Kamble"
let index = 0;

function writeText(){
    console.log("Suhas")
    document.body.innerText = text.slice(0,index);
    if(index > text.length -1){
        index = 0;
    }    
    index++;
}

setInterval(writeText,100)