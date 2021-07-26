import axios from 'axios';

const baseURL = 'http://api.currencylayer.com/'
const key = `?access_key=${process.env.REACT_APP_CURRENCY_API_KEY}`

export const fetchCurrentRateData = async () => {
    try {
        const { data: { timestamp, source, quotes } } = await axios.get(`${baseURL}live${key}`);
        let rawQuoteData = Object.entries(quotes)
        rawQuoteData.forEach(quote => {
            let key = quote[0]
            let alteredKey = key.slice(3,6)
            quote[0] = alteredKey
        })
        const modifiedData = {timestamp, source, rawQuoteData};
        return modifiedData;
    }catch(error) {

    }
}