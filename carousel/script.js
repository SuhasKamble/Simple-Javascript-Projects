const imagesContainer = document.getElementById("images");
const imgs = document.querySelectorAll("#images img");

let index = 0;

function runCarousel(){
    index++;
    if(index > imgs.length -1){
        index = 0;
    }
    imagesContainer.style.transform = `translateX(${-index*500}px)`
}

setInterval(runCarousel,3000)