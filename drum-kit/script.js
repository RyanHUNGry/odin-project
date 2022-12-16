window.addEventListener('keydown', (e) => {
    const audioNode = document.querySelector(`audio[data-key="${e.keyCode}"]`)
    const key = document.querySelector(`.key[data-key="${e.keyCode}"]`)
    if (!audioNode) return;
    key.classList.add("playing")
    audioNode.currentTime = 0;
    audioNode.play()
})

const keys = document.querySelectorAll(".key");
keys.forEach((key) => {
    key.addEventListener('transitionend', (e) => {
        if (e.propertyName !== "transform") return;
        key.classList.remove("playing");
    })
})