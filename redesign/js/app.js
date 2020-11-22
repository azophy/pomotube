changePlayerSize()

window.addEventListener('resize', changePlayerSize)

function changePlayerSize() {
    let width = window.innerWidth - 60;
    if(width > 900) {
        width = 860;
    }
    let height = width * 9 / 16 + 38;
    let player = document.querySelector('.player')
    player.style.width = width + "px";
    player.style.height = height + "px";
}

// Form
form = document.addEventListener('form', e => {
    e.preventDefault();
})