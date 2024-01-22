import React from 'react'
import Footer from '../components/Footer'
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
    <section className='banner bnr-scl'>
      <p className='para'>Our first Christmas Party was held at the Wimbledon Irish Centre. Big shoutout to Sheila for hosting us and putting up with all of us! 
      <br></br> <br></br>Laughs were had, drinks were drunk and prizes were won. <br></br><br></br> This year we had a signed Fulham FC jersey from all the current squad players of 2023/24 season - along with other prizes such as vouchers for local restaurants and of course some priceless WSC memorobilia. </p>
     
    
     
      <img className="social-pics"src="assets/Gallery/SocialPics/ChristmasPartyGirls.jpeg" alt="Wimbledon Sporting Club team team squad Irish Centre"></img>
      <img className="social-pics"src="assets/Gallery/SocialPics/ChristmasPartyRaffle.jpeg" alt="Wimbledon Sporting Club team team squad Irish Centre"></img>
   
</section>
<h3>Galway Trip</h3>
<section className='banner banner2 banner3'>
<p className='para'> Summer 2023 marked the establishment of our football club - and we wanted to celebrate the milestone with a trip away.  <br></br><br></br>
With a few lads on the team from Galway in Ireland - it was a natural flow to get the cheapest Ryanair flights out there. </p>
<div className='trip-img-container'>
<div className='img-wrapper'>
  <img className="social-pics"src="assets/Gallery/SocialPics/DiamondHill.jpeg" alt="Wimbledon Sporting Club team team squad Irish Centre"></img>
      <img className="social-pics"src="assets/Gallery/SocialPics/QuayStreet.jpeg" alt="Wimbledon Sporting Club team team squad Irish Centre"></img>
      <img className="social-pics"src="assets/Gallery/SocialPics/GalwayBeach.jpeg" alt="Wimbledon Sporting Club team team squad Irish Centre"></img>
      <img className="social-pics"src="assets/Gallery/SocialPics/Massimos.jpeg" alt="Wimbledon Sporting Club team team squad Irish Centre"></img>
      </div>
      </div>
</section>
<Footer/>
    </div>
  )
}

export default Social
