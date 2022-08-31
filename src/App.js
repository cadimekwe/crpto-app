
import React, {useState, useEffect} from 'react'
import axios from 'axios';
import Coins from './Components/Coins';





function App() {

const [coins, setCoins] = useState([])
// const [search, setSearch] = useState('')
const url= 'https://api.coingecko.com/api/v3/coins/markets?vs_currency=gbp&order=market_cap_desc&per_page=50&page=1&sparkline=false';



useEffect(() => {
  axios.get(url).then((res) => {
    setCoins(res.data)
    console.log(res.data[0])
  }).catch((error) => {
    console.log(error)
  })
},[])



return (
  
    <div className="App">  
    
      {/* <TextField label="Search Crypto Coin" variant='outlined' onChange={(e) => setSearch(e.target.value)} /> */}

    <Coins coins={coins}/>
    
  
    </div>
  );
}

export default App;



