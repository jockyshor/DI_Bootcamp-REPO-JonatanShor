

// script for currency converter


let from = document.getElementById("convertFrom");
let to = document.getElementById("convertTo");
let convertBtn = document.getElementById("convert");
let amount = document.getElementById("amount"); 
let finalResponse = document.getElementById("finalResponse");
    
(async function init() {
    try{
        let response = await fetch("https://v6.exchangerate-api.com/v6/3ffc777c285a6a94b3819ae2/codes")
        let readableApiRes = await response.json();

        if (readableApiRes.result !== "success"){
            alert("Something wrong has happend");
            throw new Error ("API response Error")
        }

        let currenciesList = readableApiRes.supported_codes;



        function renderCurrencies(aSelect){
            currenciesList.forEach((currency)=>{
                let option = document.createElement("option");
                option.value = currency[0];
                option.textContent = currency[1];
                aSelect.appendChild(option);})
        }


        renderCurrencies(from);
        renderCurrencies(to);

        convertBtn.addEventListener("click", async ()=>{

            

            let fromCurrency = from.value;
            let toCurrency = to.value;
            let amount = parseFloat(amountInput.value); 

        
            if (!amount || amount <= 0) {
                alert("Please enter a valid amount");
                return;}
            
            try{
                let res = await fetch(`https://v6.exchangerate-api.com/v6/3ffc777c285a6a94b3819ae2/latest/${fromCurrency}`);
                let data = await res.json();

                if (data.result !== "success"){
                    throw new Error ("Conversion Failed")
                }
                let conversionRate = data.conversion_rates[toCurrency];


                final = conversionRate * amount;

                let finalRounded = final.toFixed(3)


                finalResponse.innerHTML = finalRounded + " " + to.value


            }
            catch(err){
                alert("Error during conversion: " + err.message);
            }
            
                })

        
    }
    catch(error){
        alert("error initializing the app" + error)
    }
})();



