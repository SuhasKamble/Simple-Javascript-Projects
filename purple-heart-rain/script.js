function createHeart(){
    const heart = document.createElement('div');
    heart.classList.add('heart')
    heart.innerText = "💜"
    heart.style.left = Math.random() * 100+"vw";
    heart.style.animationDirection = Math.random()*5+'s'
    document.body.appendChild(heart)
    setTimeout(()=>{
        heart.remove()
    },5000)
}

setInterval(createHeart,300)