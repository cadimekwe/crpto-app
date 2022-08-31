import React from 'react'
import './Coins.css'


const Coinlist = (props) => {


  return (
    <div className='coin-row'>
    
        <p> {props.coins.market_cap_rank}</p>
        <div className='img-symbol'>       
        <img src={props.coins.image} alt='' />
        <p> {props.coins.symbol.toUpperCase()}</p>
        </div>
        <p>£{props.coins.current_price}</p>
        <p>{props.coins.price_change_percentage_24h.toFixed(2)}%</p>
        <p>£{props.coins.total_volume.toFixed(2)}</p>
        <p>£{props.coins.market_cap.toFixed(2)}</p>
  
    </div>
  )
}

export default Coinlist