import React from 'react'
const Social:React.FC = () => {

  return (
    <div>
      <div className='social-banner'>
        <h1 id="social-h1">WIMBLEDON SPORTING CLUB<br></br> Come for the football <br></br>Stay for the socials </h1>
        <div className='img-container'>
      <img
        className="social-title"
        src="assets/Gallery/SocialPics/ChristmasPartyCandid.jpeg"
        alt="Wimbledon Sporting Club team team squad Irish Centre"
      />
      </div>
      </div>
    <h3 className='info-title'>Christmas Party</h3>
    <section className='banner'>
      <p>Our first Christmas Party was held at the Wimbledon Irish Centre. We held a raffle with varying prizes; vouchers to local restaurants Tamporo, Grilandia and Franco Manca. Wimbledon Sporting Club memoribilia i.e hats, tote bags etc. And we also had a signed Fulham shirt up for grabs as well </p>
      <img className="social-pics"src="assets/Gallery/SocialPics/ChristmasPartyCandid.jpeg" alt="Wimbledon Sporting Club team team squad Irish Centre"></img>
      <div className='pics'>
     
      <img className="social-pics"src="assets/Gallery/SocialPics/ChristmasPartyGirls.jpeg" alt="Wimbledon Sporting Club team team squad Irish Centre"></img>
      <img className="social-pics"src="assets/Gallery/SocialPics/ChristmasPartyRaffle.jpeg" alt="Wimbledon Sporting Club team team squad Irish Centre"></img>
      </div>
</section>
    </div>
  )
}

export default Social
