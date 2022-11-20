// Encontro remoto 26/07 
// Programa peças

let PesoPeca = 300 // O peso deve ser maior que 100
let NomePeca = "disco" // O tamanho do nome deve ser maior que 2 caracteres
let QuantidadePecas = 5 // A quantidade de peças não pode ser maior que 10

if (QuantidadePecas < 10) {
    console.log ("A lista de peças ainda tem espaço, a peça pode ser cadastrada")

    if (NomePeca.length > 2) {
        console.log ("Nome OK")

        if (PesoPeca >= 100) {
            console.log ("Peso ok, peça cadastrada com sucesso")

        }else{
            console.log ("Peso ok, peça cadastrada com sucesso")
        }
        
    }else{
        console.log (" O nome da peça tem menos que 3 caracteres e não pode ser cadastrada")
    }
    
}else{
    console.log ("A lista de peças já está completa, não é possivel cadastrar mais peças")
}