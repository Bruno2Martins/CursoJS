function carregar(){
    var msg = document.getElementById('msg')
    var img = document.getElementById('imagem')
    var data = new Date()
    var hora = data.getHours()
    msg.innerHTML = `Agora são ${hora} horas.`
    if(hora >= 4 && hora <12){
        //BOM DIA
        img.src = 'manha.png'
        document.body.style.background = '#ed343c'
    }
    else if(hora >= 12 && hora <18){
        //BOA TARDE
        img.src = 'tarde.png'
        document.body.style.background = '#98b7c9'
    }
    else{
        //BOA NOITE
        img.src = 'noite.png'
        document.body.style.background = '#0b1717'
    }
}