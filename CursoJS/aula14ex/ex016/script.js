function contar(){
    var txtini = document.getElementById('txtini')
    var txtfin = document.getElementById('txtfin')
    var txtpas = document.getElementById('txtpas')
    var res = document.querySelector('div#res')
    if(txtini.value.length==''||txtfin.value.length==''||txtpas.value.length=='')
        alert('[ERRO] todas as áreas devem ser preenchidas')
    else{
        var inicio = Number(txtini.value)
        var final = Number(txtfin.value)
        var passo = Number(txtpas.value)
        
        res.innerHTML = "Contando: "
        if(passo <= 0){
            alert('Passo inválido, considerando PASSO = 1')
            passo = 1
        }
        if(inicio<final ){
            for(var x = inicio; x<=final;x = x+passo){
                res.innerHTML += `${x} `               
            }
        }else {
            for(var x = inicio; x>=final;x -= passo){
                res.innerHTML += `${x} `               
            }
        }
            
    }

}