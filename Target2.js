//2)
 
function fibo(){
    var numeroInformado = 21;
    var fibonacci = [];
    fibonacci[0] = 0;
    fibonacci[1] = 1;
    
    for(var posicao = 2; posicao < 30; posicao++){
        fibonacci[posicao] = fibonacci[posicao - 1] + fibonacci[posicao - 2];
    }
    if(fibonacci.includes(numeroInformado)){
        return `O  número ${numeroInformado} pertence a sequência de Fibonacci`
    }
        return `O  número ${numeroInformado} não pertence a sequência de Fibonacci`
}
console.log(fibo());

//3)
const jsonData = [
	{
		"dia": 1,
		"valor": 22174.1664
	},
	{
		"dia": 2,
		"valor": 24537.6698
	},
	{
		"dia": 3,
		"valor": 26139.6134
	},
	{
		"dia": 4,
		"valor": 0.0
	},
	{
		"dia": 5,
		"valor": 0.0
	},
	{
		"dia": 6,
		"valor": 26742.6612
	},
	{
		"dia": 7,
		"valor": 0.0
	},
	{
		"dia": 8,
		"valor": 42889.2258
	},
	{
		"dia": 9,
		"valor": 46251.174
	},
	{
		"dia": 10,
		"valor": 11191.4722
	},
	{
		"dia": 11,
		"valor": 0.0
	},
	{
		"dia": 12,
		"valor": 0.0
	},
	{
		"dia": 13,
		"valor": 3847.4823
	},
	{
		"dia": 14,
		"valor": 373.7838
	},
	{
		"dia": 15,
		"valor": 2659.7563
	},
	{
		"dia": 16,
		"valor": 48924.2448
	},
	{
		"dia": 17,
		"valor": 18419.2614
	},
	{
		"dia": 18,
		"valor": 0.0
	},
	{
		"dia": 19,
		"valor": 0.0
	},
	{
		"dia": 20,
		"valor": 35240.1826
	},
	{
		"dia": 21,
		"valor": 43829.1667
	},
	{
		"dia": 22,
		"valor": 18235.6852
	},
	{
		"dia": 23,
		"valor": 4355.0662
	},
	{
		"dia": 24,
		"valor": 13327.1025
	},
	{
		"dia": 25,
		"valor": 0.0
	},
	{
		"dia": 26,
		"valor": 0.0
	},
	{
		"dia": 27,
		"valor": 25681.8318
	},
	{
		"dia": 28,
		"valor": 1718.1221
	},
	{
		"dia": 29,
		"valor": 13220.495
	},
	{
		"dia": 30,
		"valor": 8414.61
	}
]

function calculaMenorValor(data){
    let menorValor = 10000; 
    for (const i in data) {
        if (data[i].valor < menorValor) {
            menorValor = data[i].valor
        }
    }
    return menorValor
};
console.log(calculaMenorValor(jsonData));

function calculaMaiorValor(data) {
    let maiorValor = 0;
    for (const i in data) {
        if (data[i].valor > maiorValor) {
            maiorValor = data[i].valor
        }
    }
    return maiorValor
};
console.log(calculaMaiorValor(jsonData))

function calculaMedia(data) {
    let totalDiasUteis  = 0;
    let soma = 0;
    let diasSuperioresAmedia = 0;
    for (const i in data) {
        if (data[i].valor > 0) {
            totalDiasUteis += 1
            soma += data[i].valor 
        }
    }
    let media = soma / totalDiasUteis
    
    for (const j in data) {
        if (data[j].valor > media) {
            diasSuperioresAmedia += 1
        }
    }
    return `O número de dias superiores à média é ${diasSuperioresAmedia}`
};
console.log(calculaMedia(jsonData))

//4) 
const faturamento = {
	SP: 67835,
	RJ: 36679,
	MG: 29330,
	ES: 27164,
	Outros: 19845
 }
function valores(faturamento){
    total = 0;
    for (let cidade in faturamento) {
        {
            console.log(faturamento[cidade]);
            total += faturamento[cidade]
        }
    }
    porcentagemSP = (faturamento.SP / total) * 100;
    porcentagemRJ = (faturamento.RJ / total) * 100;
    porcentagemMG = (faturamento.MG / total) * 100;
    porcentagemES = (faturamento.ES / total) * 100;
    porcentagemOutros = (faturamento.Outros / total) * 100;

    return `SP: ${porcentagemSP.toFixed(1)}%, RJ: ${porcentagemRJ.toFixed(1)}%, MG: ${porcentagemMG.toFixed(1)}%,
    ES: ${porcentagemES.toFixed(1)}%, Outros: ${porcentagemOutros.toFixed(1)}%`
};
console.log(valores(faturamento))


//5)
function inverseString(word){
    let palavraInversa = ''
    for (let i = word.length - 1; i >= 0; i-- ) {
        palavraInversa += word[i]
    }
    return palavraInversa
}
console.log(inverseString('palavra'))