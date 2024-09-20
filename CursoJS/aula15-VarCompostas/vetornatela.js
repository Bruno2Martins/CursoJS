let valores=[11,8,2,5,7,3,1]
/*
console.log(valores[0])
console.log(valores[1])
console.log(valores[2])
console.log(valores[3])
console.log(valores[4])
console.log(valores[5])
console.log(valores[6])


//simplifica o de cima
for(let pos = 0;pos<valores.length; pos++){
    console.log(`A posição ${pos} tem o valor ${valores[pos]}`)
    }
    */
   
//simplifica o de cima
for(let pos in valores){
    console.log(`A posição ${pos} tem o valor ${valores[pos]}`)
}

//.indexOf(n) busca o valor dentro do vetor
pos=valores.indexOf(7)
if (pos == -1)//como não ha esse valor, ele deixa -1
    console.log(`O valor não foi encontrado`)
else
    console.log(`O valor esta na posição ${pos}`)
    
