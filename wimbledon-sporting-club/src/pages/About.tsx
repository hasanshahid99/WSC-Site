import React from 'react'
import Footer from '../components/Footer'
const About = () => {
  return (
    <div className="container">
    
      <img id="team-pic"src="assets/Players/squad.jpeg" alt=""/> 
      <h3>About us</h3>
      <section className="info">
        
    <p>The founding of Wimbledon Sporting Club was established to create an exciting environment surrounding our football.  We all live busy lives and wanted our Saturday's to be spent with company that we enjoy.</p>
    <p>We instill guaranteed gametime with guaranteed memories.  After every game, we </p>
      </section>
      <h3>Volunteering</h3>
      <section className='banner'>
        <p>Our club would not exist if it wasn’t for the sponsorships received from local businesses. So, in order to give back to the community we take part in volunteering efforts across SW London.
    
          <br />
          <br />
          We partner with ADBC and Enable. There has been great interest received from our players with getting involved for these events - so it has allowed us to schedule multiple efforts throughout the season.    </p>
        <img className="gallery"src="assets/Volunteering/IMG_8889.jpg" alt="volunteering" />
        <img className="gallery" src="assets/Volunteering/IMG_8927.jpg" alt="volunteering" />

      </section>
      <h3>Our Policy</h3>
      <section className='banner'>
        <p>We exercise a balance between being a competitive side, and being a group of friends. We accept players of all backgrounds, ethnicities and orientations. </p>
        <p>Our only requirement is that for the duration of a season, you will volunteer at least once to provide a helping hand to the charities we work with.</p>
      </section>
      <section className='img-banner'>
<img src ="" alt="smiling-player" />
      </section>
<Footer/>
    </div>
  )
}

export default About
