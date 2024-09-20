var vetor = []
var res = document.getElementById('res')

function adicionar(){
    var txtnum = document.querySelector("input#num")
    let select = document.getElementById('exibir')

    var num = Number(txtnum.value)
    if(num>0 && num<=100){
        bus = vetor.indexOf(num)
        if(bus == -1){
            vetor.push(num)
            var x=0
            select.innerHTML =""
            res.innerHTML =""
            while(x<vetor.length){
                var linha = document.createElement('option')
                linha.text = `Valor ${vetor[x]} adicionado!`
                select.appendChild(linha)
                x++
            }
        }else{alert(`O número ${num} não pode se repetir`)}
    }else{alert('O número DEVE estar no intervalo de 1 e 100')}
}
function finaliza(){
    var vetorCresc = vetor.sort()
    alert(vetorCresc)
    var quant = vetor.length
    var soma = 0
    var maior
    var menor
    for (var pos in vetor){
        soma = soma + vetor[pos]
        maior = vetor[0]
        maior = vetor[0]
        
    }

    res.innerHTML = `<p>Ao todo, temos ${vetor.length} números cadastrados!</p>`
    res.innerHTML += `<p>O maior valor informado foi ${maior}</p>`
    res.innerHTML += `<p>O menor valor informado foi ${menor}</p>`
    res.innerHTML += `<p>A soma dos valores informados foi ${soma}</p>`
    res.innerHTML += `<p>A media dos valores informados foi ${soma/quant}</p>`
    
}