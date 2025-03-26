//Cotação de moedas do dia
const USD = 4.87
const EUR = 5.32
const GBR = 6.08

// Obtendo os elementos dos formulários
const amount = document.querySelector("#amount")
const currency = document.querySelector("#currency")
const form = document.querySelector("form")
const footer = document.querySelector("main footer")
const description = document.getElementById("description")
const result = document.getElementById("result")


//Manipulando o input para receber somente número 
amount.addEventListener("input", (event) =>{
 const hasCharactersRegex = /\D+/g
 amount.value = amount.value.replace(hasCharactersRegex, "")
 
 console.log(amount.value)
})


//Capturando elementos ao realizar o submit
form.onsubmit = (event) => {
event.preventDefault()

switch (currency.value){
 case "USD":
    convertCurrency(amount.value, USD, "US$")
    break
 case "EUR":
    convertCurrency(amount.value, EUR, "€")
    break   
 case "GBP":
    convertCurrency(amount.value, GBP, "£")
    break  
}

}

//Função para converter a moeda 
function convertCurrency(amount, price, symbol, currency){
try{
    //Exibindo a cotação da moeda
    description.textContent = `${symbol}1 = ${formatCurrencyBRL(price)}`

    //Calculando o total 
    let total = amount * price
    total = formatCurrencyBRL(total)

    //Exibe o resultado total
    result.textContent = total   

    // Aplica a classe que exibe o footer para mostrar o resultado 
    footer.classList.add("show-result")
} catch(error){
    console.log(error)

    // Remove a classe do footer removendo ele da tela
    footer.classList.remove("show-result")
    alert("Não foi possível converter, tente novamente mais tarde")
}
}

//Formata a moeda em real brasileiro
function formatCurrencyBRL(value){
return Number(value).toLocaleString("pt-BR", {
    style: "currency",
    currency: "BRL",
})
}

