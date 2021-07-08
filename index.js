// consultar a la api el precio de las diferentes cryptomonedas
const API_URL = "https://api.binance.com/api/v3/ticker/price";

fetch (API_URL)
    .then(response => response.json())
    .then (data => {
        const bitcoin = data.filter(dat => dat.symbol == "BTCUSDT");
        const priceBitcoin = bitcoin.map (item => {
            const valor =  item.price
            return Number(valor);
        });

        const eth = data.filter(dat => dat.symbol == "ETHUSDT");
        const priceEth = eth.map (item => {
            const valor =  item.price
            return Number(valor);
        });

        const bnb = data.filter(dat => dat.symbol == "BNBBTC");
        const priceBnb = bnb.map (item => {
            const valor =  item.price;
            return Number(valor);
        });
        
        const ltc = data.filter(dat => dat.symbol == "LTCBTC");
        const priceLtc = ltc.map (item => {
            const valor =  item.price;
            return Number(valor);
        });
        
        const precio = document.getElementById("pBTC");
        precio.innerText = `$ ${parseInt(priceBitcoin)}`;

        const precio2 = document.getElementById("pETH");
        precio2.innerText = `$ ${parseInt(priceEth)}`;

        const precio3 = document.getElementById("pBNB");
        precio3.innerText = `$ ${parseInt(priceBnb*priceBitcoin)}`;

        const precio4 = document.getElementById("pLTC");
        precio4.innerText = `$ ${parseInt(priceLtc*priceBitcoin)}`;

    })
    .catch(err => console.log(err));


// consultar hora

function mesLetra() {
    switch (true) {
        case mesIndexado == 0:
            return "Enero"
            break;
        case mesIndexado == 1:
            return "Febrero"
            break;
        case mesIndexado == 2:
             return "Marzo"
            break;
        case mesIndexado == 3:
            return "Abril"
            break;
        case mesIndexado == 4:
            return "Mayo"
            break;
        case mesIndexado == 5:
             return "Junio"
            break;
        case mesIndexado == 6:
            return "Julio"
            break;
        case mesIndexado == 7:
            return "Agosto"
            break;
        case mesIndexado == 8:
             return "Septiembre"
            break;
        case mesIndexado == 9:
            return "Octubre"
            break;
        case mesIndexado == 10:
            return "Noviembre"
            break;
        case mesIndexado == 11:
             return "Diciembre"
            break;
    }
} 

const date = new Date();
const dia = date.getDate ();
const mesIndexado = date.getMonth ();
const mes = mesLetra();
const hora = date.getHours();
const minutos = date.getMinutes();

const fecha = document.getElementById("fecha");
fecha.innerHTML = `<b>Actualizado:</b> ${dia} ${mes} ${hora}:${minutos}`;

