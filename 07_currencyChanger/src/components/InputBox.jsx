import React, {useId} from 'react'

function InputBox({
    label,
    amount,
    onAmountChange,
    onCurrencyChange,
    currencyOptions = [],             //default array to prevent crash
    selectCurrency = "usd",
    amountDisable = false,
    currencyDisable = false,
    className = "",
}) {
   const amountInputId = useId()         //useId()  hook

    return (
        <div className={`bg-white p-3 rounded-lg text-sm flex ${className}`}>   {/* isme cclaassname m users se bhi css le rhe hai */}
            <div className="w-1/2">
                <label htmlFor={amountInputId}  className="text-black/40 mb-2 inline-block"> {/*we bind this useId by using htmlfor */}
                    {label}
                </label>
                <input
                    id={amountInputId}                //we bind this useId by using htmlfor 
                    className="outline-none w-full bg-transparent py-1.5"
                    type="number"
                    placeholder="Amount"
                    disabled={amountDisable}
                    value={amount}
                    onChange={(e) => onAmountChange && onAmountChange(Number(e.target.value))} // to detect change in amountchange
                />
            </div>
            <div className="w-1/2 flex flex-wrap justify-end text-right">
                <p className="text-black/40 mb-2 w-full">Currency Type</p>
                <select
                    className="rounded-lg px-1 py-1 bg-gray-100 cursor-pointer outline-none"
                    value={selectCurrency}
                    onChange={(e) => onCurrencyChange && onCurrencyChange(e.target.value)}  // to detect change in currencychange
                    disabled={currencyDisable}
                >
                    
                        {currencyOptions.map((currency) => (          // always use key in loops to improve performance
                            <option key={currency} value={currency}>
                            {currency}
                            </option>
                        ))}
                
                </select>
            </div>
        </div>
    );
}

export default InputBox;