
var keyCode;

let playSound=(e) => {
    keyCode = e.keyCode;
    let node = document.querySelector(
     `.key[data-key="${keyCode}"]`
    )
    node?.classList.add('playing')
    let audioNode =document.querySelector(
        `audio[data-key="${keyCode}"]`
    )
    if(!audioNode) return
    audioNode.currentTime=0;
    audioNode.play();
}

function removeTransiton(e){
    if(e.propertyName !== 'transform') return;
    this.classList.remove('playing');
}
window.addEventListener('keydown',playSound);
const keys=document.querySelectorAll('.key');
keys.forEach( key => key.addEventListener('transitionend',removeTransiton) );


