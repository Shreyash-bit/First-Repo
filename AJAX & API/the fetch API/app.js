fetch('https://api.cryptonator.com/api/ticker/btc-usd')
    .then(res => {
        console.log("response", res);
        return res.json();
    })
    .then(data => {
        console.log("data parsed..")
        console.log(data.ticker.price);
    })
    .catch(e => {
        console.log("error!", e)
    })

const fetchBitcoinPrice = async () => {
    try {
        const res = await fetch('https://api.cryptonator.com/api/ticker/btc-usd')
        const data = await res.json();
        console.log(data.ticker.price)
    } catch (e) {
        console.log("Something went wrong")
    }
}

fetchBitcoinPrice();