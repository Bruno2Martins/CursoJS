function verificar() {
    var data = new Date()
    var ano = data.getFullYear()
    var fano = document.getElementById('txtano')
    var res = document.getElementById('res')

    if (fano.value.length == 0 || Number(fano.value) > ano) {
        window.alert('[ERRO] Verifique os dados e tente novamente!')
    } else {
        var fsex = document.getElementsByName('radsex')
        var idade = ano - Number(fano.value)
        var genero = ''
        var img = document.createElement('img')//cria o elemento img
        img.setAttribute('id', 'foto')// coloquei o id do elemento como foto
        if (fsex[0].checked) {
            genero = 'Homem'
            if (idade >= 0 && idade < 11) { img.setAttribute('src', 'img/benino.png') }//crianca
            else if (idade >= 11 && idade < 20) { img.setAttribute('src', 'img/ojovem.png') }//jovem
            else if (idade >= 20 && idade < 50) { img.setAttribute('src', 'img/homem.png') }//adulto
            else { img.setAttribute('src', 'img/idoso.png') }//idoso
        } else if (fsex[1].checked) {
            genero = 'Mulher'
            if (idade >= 0 && idade < 11) { img.setAttribute('src', 'img/benina.png') }//crianca
            else if (idade >= 11 && idade < 20) { img.setAttribute('src', 'img/ajovem.png') }//jovem
            else if (idade >= 20 && idade < 50) { img.setAttribute('src', 'img/mulher.png') }//adulto
            else { img.setAttribute('src', 'img/idosa.png') }//idosa
        }
        res.style.textAlign = 'center'
        res.innerHTML = `Detectamos ${genero} com ${idade} anos.`
        res.appendChild(img)//mandei adicionar/exibir o elemento

    }


}