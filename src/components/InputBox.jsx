import { useId } from "react";

function InputBox({
    label,
    amount,
    onAmountChange,
    onCurrencyChange,
    currencyOptions = [],
    selectCurrency = "usd",
    amountDisable = false,
    currencyDisable = false,
    
    className = "",
}) {
    const amountId = useId();

    return (
      <div className={`bg-white p-3 rounded-lg text-sm flex ${className}`}>
        <div className="w-1/2">
          <label htmlFor={amountId} className="text-black/40 mb-2 inline-block">
            {label}
          </label>
          <input
            id={amountId}
            className="outline-none w-full bg-transparent py-1.5 text-black"
            type="number"
            placeholder="Amount"
            disabled={amountDisable}
            value={amount}
            onChange={(e) => onAmountChange && onAmountChange(Number(e.target.value))}
          />
        </div>
        <div className="w-1/2 flex flex-wrap justify-end text-right">
          <p className="text-black/40 mb-2 w-full">Currency Type</p>
          <select
            className="rounded-md border border-gray-300 bg-white px-3 py-2 
             text-sm font-medium text-gray-800 shadow-sm
             focus:border-blue-500 focus:ring-2 focus:ring-blue-500 
             disabled:cursor-not-allowed disabled:bg-gray-100 disabled:text-gray-400"
            value={selectCurrency}
            onChange={(e) => onCurrencyChange && onCurrencyChange(e.target.value)}
            disabled={currencyDisable}>
            {currencyOptions.map((currency) => (
              <option key={currency} value={currency}>
                {currency.toUpperCase()}
              </option>
            ))}
          </select>
        </div>
      </div>
    );
}

export default InputBox;