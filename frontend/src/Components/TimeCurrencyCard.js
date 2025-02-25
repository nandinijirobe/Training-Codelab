import styles from "./TimeCurrencyCard.module.css"


/* 
:currency:
    the current chose currency
:type:
    string
:showData:
    array of bitcoin data object with timestamp and price
:type:
    list[{dict}]
*/
function TimeCurrencyCard ({currency,showData}) {
    // ToDo 10.2.1
    /* 
    set price text color
    :index:
        the index of the current object
    :type:
        int
    :return:
        CSS classname
    :rtype:
        CSS  Object
    */
    console.log("Time Currency Card Function Called");
    const priceColor = (index) => {
        var currentPrice = showData[index].price
        var previousPrice;
        // this condition is added just in case the the index = 0 and it the first object in the array
        if (index - 1 < 0) {
            previousPrice = 0;
        } else {
            previousPrice = showData[index - 1].price
        }
         
        if (currentPrice > previousPrice){
            return styles.priceContainerUp
        } else if (previousPrice > currentPrice) {
            return styles.priceContainerDown
        } else {
            return styles.priceContainerEqual
        }
    }

    // ToDo 10.2.2
    /* 
    set arrow sign for price
    :index:
        the index of the current object
    :type:
        int
    :return:
        an arrow "↑" "↓" or '-' to show the price change status
    :rtype:
        string
    */
    const arrowSign = (index) => {
        var currentPrice = showData[index].price
        var previousPrice;

        // this condition is added just in case the the index = 0 and it the first object in the array
        if (index - 1 < 0) {
            previousPrice = 0;
        } else {
            previousPrice = showData[index - 1].price
        }

        if (currentPrice > previousPrice){
            return " ⬆"
        } else if (previousPrice > currentPrice) {
            return " ⬇"
        } else {
            return "‒"
        }
    }
    
    // LIZA'S RETURN CODE
    return (
        <div className = {styles.centerCards}>
            <div style={{ padding: "24px", display: "flex", flexWrap: "wrap" }}>
                {/* reference for .map https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/map */}
                {showData.map((d, index) => (
                    <div className={styles.cardContainer} key={index}>
                        {/* use {currency === 'USD' ? "$" : *other currency sign*} to set the currency notation  
                    reference https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Conditional_Operator */}
                        <p className={priceColor(index)}>{currency === 'USD' ? "$" : "₹"} {d.price}{arrowSign(index)}</p>
                        <p>{d.timestamp}</p>
                    </div>
                ))}
            </div>
        </div>
    );

}

export default TimeCurrencyCard;
