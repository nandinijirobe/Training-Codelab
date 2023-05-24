import React, { useState,useEffect } from "react";
import axios from "axios";
import CurrencyButton from "../Components/CurrencyButton";
import TimeCurrencyCard from "../Components/TimeCurrencyCard";
import styles from "./Home.module.css"
import FloatingButton from "../Components/FloatingButton";

// new code added for the chat button
<link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@20..48,100..700,0..1,-50..200" />


function Home () {

  console.log("Home function was called");
  // ToDo 10.3.1
  /* set variables (data, shown data, currency) using hooks (useState) */
  const [data, setData] = useState([]);
  const [showData, setShowData] = useState([]); // changed from 0 to []
  const [currency, setCurrency] = useState("USD");

  // ToDo 10.3.2
  /* 
  set function to call backend (axios) and update bitcoin data using state setter
  use JSON.parse to parse response data 
  Hint: with axios use .get(url of backend) .then(response =>{ do something with response}) refrence https://axios-http.com/docs/example
  */
  const updateData = () => {
    axios.get("http://localhost:8000/get_bitcoin_prices").then((res) => {
      setData(JSON.parse(res.data));
      console.log(JSON.parse(res.data))
    })
  }
  
  // update data on initialization (useEffect [], no dependencies)
  useEffect(() =>{
    updateData();
  },[])

  // ToDo 10.3.3
  // useEffect reference https://reactjs.org/docs/hooks-effect.html
  /* update data every 5 minutes (useEffect [data] as the dependency & setTimeout call updateData) 
    setTimeout refrence https://developer.mozilla.org/en-US/docs/Web/API/setTimeout
  */

  useEffect(() =>{
    setTimeout(()=> {updateData();}, 5000);
    // updateData()
  },[data])

  // ToDo 10.3.3
  /*
  set data to be shown ( sorting date descending and changing price if other currency is chosen) 
  (useEffect [currency,data] as the dependecies)
  
  first set a mutable variable 'let currShowData' as data
  
  to change currency use 
  currShowData = currShowData.map(el => ({...el, price:parseFloat((el.price*{insert exchange rate}).toFixed(4))}))
  reference https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Conditional_Operator 
                
  to sort use (since data has the oldest at first, we want to sort it by date so the latest is on top)
  currShowData.sort((a,b)=> {return(new Date(b.timestamp) - new Date(a.timestamp))})
  reference https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/sort
  */
  

  useEffect(() => {
    let exchangeRate = 85
    if (currency === "USD") {
      exchangeRate = 1;
    }
    let currShowData = data.map(el => ({ ...el, price: parseFloat((el.price * exchangeRate).toFixed(4)) }))
    currShowData.sort((a, b) => { return (new Date(b.timestamp) - new Date(a.timestamp)) })
    // parse data - change currency - sort?
    setShowData(currShowData);
  }, [data, currency])


  // ToDo 10.3.4
  /* 
  handle currency state button onclick
  change currency with its state setter
  :currency:
    the current chosen currency
  :type:
    string
  */
  const changeCurrency = (currency) =>{
    setCurrency(currency)
  }


  // Button code
  

  // Welcome to the Bitcoin Tracking Website!
  // ToDo 10.3.5
  // call CurrencyButton and TimeCurrencyCard pass the variables
  return (
    <body className = {styles.bodyContainer}>
      <div>
        <div className = {styles.webTitle}> 🪙Welcome to the Bitcoin Tracking Website!🪙</div>
        <img src = 'https://gifdb.com/images/file/animated-stash-of-money-qlhk99twu6ixul8n.gif' className="moneyGIF"></img>
        <CurrencyButton currency ={currency} changeCurrency={changeCurrency} />
        <TimeCurrencyCard currency={currency} showData={showData} />
      </div>
    </body>

  );

}

export default Home;
