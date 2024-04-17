ligar.addEventListener('click', lampOn)
desligar.addEventListener('click', lampOff)
lamp.addEventListener('dblclick', brokeLampada)
trocarLampada.addEventListener('click', replaceLamp)

function lampOn(){
    lamp.src = './assets/images/Lampada-Ligada.png'
}

function lampOff(){
    lamp.src = './assets/images/Lampada-Desligada.png'
}

function brokeLampada(){
    lamp.src = './assets/images/Lampada-Quebrada.png'
    ligar.style.display = 'none'
    desligar.style.display = 'none'
    trocarLampada.style.display = 'block'
}

function replaceLamp(){
    window.location.reload()
}
