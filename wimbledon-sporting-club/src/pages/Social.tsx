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
     
    
      <div className='christmas-img-container'>

      <img className="social-pics"src="assets/Gallery/SocialPics/ChristmasPartyGirls.jpeg" id="girls"alt="Wimbledon Sporting Club girls christmas party Irish Centre"></img>
      <img className="social-pics"src="assets/Gallery/SocialPics/ChristmasPartyRaffle.jpeg" alt="Wimbledon Sporting Club raffle christmas party Irish Centre"></img>
      </div>
   
</section>
<h3 className='info-title'>Galway Trip</h3>
<section className='banner banner3'>
  <div className='specs-container'>
<p className='para specs'> Summer 2023 marked the establishment of our football club - and we wanted to celebrate the milestone with a trip away.  <br></br>
With a few lads on the team from Galway in Ireland - it was a natural flow to get the cheapest Ryanair flights out there. <br></br><br></br> We hiked Diamond Hill, swam in Silverstrand and played the local Salthill Devon FC in a friendly winning 4-0. </p>
</div>
<div className='trip-img-container'>
<div className='img-wrapper'>
  <img className="social-pics"src="assets/Gallery/SocialPics/DiamondHill.jpeg" alt="Wimbledon Sporting Club team team squad Irish Centre"></img>
      <img className="social-pics"src="assets/Gallery/SocialPics/QuayStreet.jpeg" alt="Wimbledon Sporting Club irish trip away Galway"></img>
      <img className="social-pics"src="assets/Gallery/SocialPics/GalwayBeach.jpeg" alt="Wimbledon Sporting Club irish trip away Galway beach"></img>
      <img className="social-pics"src="assets/Gallery/SocialPics/Massimos.jpeg" alt="Wimbledon Sporting Club irish trip away Galway massimos night out social"></img>
      </div>

      
      </div>
</section>
<div className="callout">
<p className='international'> Fancy giving Wimbledon Sporting Club a run for their international form?  <br></br><br></br>
We can organise a preseason friendly game - always happy to host in London or we can fly out to you. <br></br><br></br>Find the contact details below and we can organise something ⚽ </p>
</div>
<Footer/>
    </div>
  )
}

export default Social
