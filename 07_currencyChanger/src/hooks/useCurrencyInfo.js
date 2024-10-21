import {useEffect, useState} from "react"


function useCurrencyInfo(currency){
    const [data, setData] = useState({})       // it have empty object
    useEffect(() => {
        fetch(`https://cdn.jsdelivr.net/gh/fawazahmed0/currency-api@1/latest/currencies/${currency}.json`)
        .then((res) => res.json())
        .then((res) => setData(res[currency]))            // [cureency] se data ko change krte hai
        console.log(data);
    }, [currency])
    console.log(data);
    return data                // data ko return kra rahe hai
}

export default useCurrencyInfo;