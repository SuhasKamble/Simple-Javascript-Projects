const btn = document.querySelector('.btn');
const container = document.querySelector('.container');

btn.addEventListener('click',()=>{
    const toast = document.createElement('div');
    toast.classList.add('toast');
    toast.innerText = "This is Toast Yuue!"
    container.appendChild(toast)

    setTimeout(()=>{
        toast.remove()
    },3000)
})