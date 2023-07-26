function relogio() {
    var msg = document.getElementById('msg')
    var img = document.getElementById('img')
    var data = new Date()
    var hora = data.getHours()
    var minuto = data.getMinutes()
//Hora
    msg.innerHTML = `Agora são ${hora}:${minuto}`
//Imagem Hora
    if (hora >= 0 && hora < 3) {
        img.src = 'midia/horas/0horas.png'
        document.body.style.background = '#323547'
    } else if (hora >= 3 && hora < 6) {
        img.src = 'midia/horas/3horas.png'
        document.body.style.background = '#3A3E4F'
    } else if (hora >= 6 && hora < 9) {
        img.src = 'midia/horas/6horas.png'
        document.body.style.background = '#404A69'
    } else if (hora >= 9 && hora < 12) {
        img.src = 'midia/horas/9horas.png'
        document.body.style.background = '#3F57AA'
    } else if (hora >= 12 && hora < 15) {
        img.src = 'midia/horas/12horas.png'
        document.body.style.background = '#3352C0'
    } else if (hora >= 15 && hora < 18) {
        img.src = 'midia/horas/15horas.png'
        document.body.style.background = '#3F55A2'
    } else if (hora >= 18 && hora < 21) {
        img.src = 'midia/horas/18horas.png'
        document.body.style.background = '#414C73'
    } else if (hora >= 21 && hora <= 24) {
        img.src = 'midia/horas/21horas.png'
        document.body.style.background = '#3E4253'
    } else {
        img.src = ''
        document.body.style.background = '#414C73'
    }
}