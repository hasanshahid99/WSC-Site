import React from 'react'
import Footer from '../components/Footer'
const About = () => {
  return (
    <div className="container">
    
      <img id="team-pic"src="assets/Players/squad.jpeg" alt="squad"/> 
      <h3>About us</h3>
      <section className="info">
        
    <p className="para">Wimbledon Sporting Club founded to give a place for those who love spending time together on the pitch as much as they do off the pitch</p>
    <p className="para">We instill guaranteed gametime with guaranteed memories.  </p>
      </section>
      <h3>Volunteering</h3>
      <section className='banner sml'>
        <p className="para">Our club would not exist if it wasn’t for the sponsorships we received from local businesses. So, in order to give back to the community we take part in volunteering efforts across SW London.
    
          <br />
          <br />
          We partner with ADBC and Enable. There has been great interest received from our players with getting involved for these events - so it has allowed us to schedule multiple efforts throughout the season.    </p>
        <img className="gallery"src="assets/Volunteering/IMG_8889.jpg" alt="volunteering" />
        <img className="gallery" src="assets/Volunteering/IMG_8927.jpg" alt="volunteering" />
      </section>
      <h3>Our Policy</h3>
      <section className='banner'>
        <p className='para'>We exercise a balance between being a competitive side, and being a group of friends. We're inclusive of players from all backgrounds, ethnicities and orientations. </p>
        <p className='para'>We expect those who are being supported on the pitch, to support the communities around us and volunteer once a year</p>
      </section>
      <section className='img-banner-abt'>
<img src ="assets/Fun/IMG_8197.JPG" alt="smiling-player" className="abt-pic"/>
<img src ="assets/Fun/runners.jpeg" alt="smiling-player" className="abt-pic"/>
<img src ="assets/Fun/tamporo.jpeg" alt="smiling-player" className="abt-pic"/>

      </section>
<Footer/>
    </div>
  )
}

export default About
