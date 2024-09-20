let num = [5,6,2,1]
console.log(`Nosso vetor é o ${num}`)
console.log(num)

// a ordem dos codiogos escritos importa!!!
//vetores iniciam do 0

// .push - adiciona um valor na ultima posição
num.push(7)
console.log(num)
// .length - saber qual o tamanho do vetor
console.log(num.length)
//.sort() - coloca os elementos em ordem crescente
num.sort() 
console.log(num)

for(let pos = 0;pos<num.length; pos++){
    console.log(num[pos])
}