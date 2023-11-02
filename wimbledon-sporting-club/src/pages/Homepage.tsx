import React from 'react'
import Footer from '../components/Footer'
const Homepage = () => {
  return (
    <div className="container">
        <div className='banner-wrapper'>
      <section className='main-banner'>
        <div className="banner-left">We are a community-driven football club based in Wimbledon. Founded in 2023 means we are only at the beginning of our journey.</div>
        <div className="banner-right"><p>IMG TAGS</p></div>
      </section>
      </div>
      <section className="info">
        <p>TEXT</p>
      </section>
      <h3 className="info-title">OUR SPONSORS</h3>
      <section className='banner'>
        <img className="sponsors"src="assets/sponsors/MLB-Estates.png" alt="Wimbledon Irish Centre" />
        <img className="sponsors"src="assets/sponsors/AM.png" alt="Wimbledon Irish Centre" />
        <img className="sponsors"src="assets/sponsors/WIC.png" alt="Wimbledon Irish Centre" />
        <img className="sponsors"src="assets/sponsors/WIC.png" alt="Wimbledon Irish Centre" />
      </section>
      <h3 className="info-title">WHERE WE PLAY</h3>
      <section className='banner banner2' >
        <p>Our home pitch is Dundonald Recreation Park, SW19 3PN.</p>
    <h3>BOX OF MAP</h3>
      </section>
      <section className='img-banner'>
<img className="flag"src="assets/Players/HS.jpeg" alt="" />
      </section>
<Footer/>
    </div>
  )
}

export default Homepage
