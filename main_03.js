const sml = document.getElementById('small')
const md = document.getElementById('medium')
const bg = document.getElementById('big')

const handler1 = () => {
    alert('click')
}

const handler2 = () => {
    alert('kcilc')
}
// sml.onclick = handler1

// sml.addEventListener('click', handler1)
// sml.addEventListener('click', handler2)
// sml.removeEventListener('click', handler1)



//event

const handler3 = (e) => {
    console.log(e.currentTarget);
}


sml.addEventListener('click', handler3)
md.addEventListener('click', handler3)
bg.addEventListener('click', handler3)