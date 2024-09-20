function calcular(){
    let numero = document.getElementById('num')
    //let res = document.getElementById('res')
    let resultado = document.getElementById('resultado')
    if (numero.value.length == 0){
        alert("Digite um número!!!")
    }else{
        let n = numero.value
        
        let x = 1
        resultado.innerHTML=''
        while(x<=10){
            let total = n * x  
            let item = document.createElement('option')
            item.text = `${n} x ${x} = ${total}`
            resultado.value = `resultado${x}`
            resultado.appendChild(item)
            //res.innerHTML += `${n} x ${x} = ${total} <br>`
            
            x++
        }
    }
}