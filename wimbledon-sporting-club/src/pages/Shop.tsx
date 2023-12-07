import React from 'react'
const Shop:React.FC = () => {


    const handleClick = () => {
      // Redirect to the specified link
      window.open('https://www.pro-amkits.co.uk/yourshop/club-shops/football-clubs/wimbledon-sporting-club/', '_blank');


    };
  return (
    <div>
      <h3 id="club">Club Shop</h3>
      <p className='para'>Our club shop is under construction and will be available soon.</p>
      {/* <button onClick={handleClick}>Take me there</button>
      <div id="shop-pic">
      <img id="shop"src="assets/Club/Shop.png" alt="pro-am"/> */}
      {/* </div> */}
    </div>
  )
}

export default Shop
