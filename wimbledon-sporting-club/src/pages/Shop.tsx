import React from 'react'
import { useNavigate } from 'react-router-dom'
const Shop:React.FC = () => {


    const handleClick = () => {
      // Redirect to the specified link
      window.open('https://www.pro-amkits.co.uk/yourshop/club-shops/football-clubs/wimbledon-sporting-club/', '_blank');


    };
  return (
    <div>
      <h3 id="club">Club Shop</h3>
      <p className='para'>All of our clubwear is available through the Adidas Pro-AM website.</p>
      <button onClick={handleClick}>Take me there</button>
      <div id="shop-pic">
      <img id="shop"src="assets/Club/Shop.png" alt="pro-am"/>
      </div>
    </div>
  )
}

export default Shop
