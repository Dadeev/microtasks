//event
// handler , subscriber, listener
const handler = (event) => {
    event.stopPropagation()
    console.log(event.currentTarget.id)
} //handler({...})

const sm = document.getElementById('small')
const md = document.getElementById('medium')
const bg = document.getElementById('big')

sm.onclick = handler
md.onclick = handler
bg.onclick = handler
// sm.onclick = null

sm.addEventListener('click', handler)
sm.removeEventListener('click', handler)

const a = document.getElementById('a')
a.onclick = (e) => {
    e.preventDefault()
    alert(1)
}