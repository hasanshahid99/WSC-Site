import React from 'react'
import Footer from '../components/Footer'
import ImageCarousel from '../components/ImageCarousel'
const Homepage = () => {
  return (
    <div className="container">
        <div className='banner-wrapper'>
      <section className='main-banner'>
        <div className="banner-left">We are a community-driven football club based in Wimbledon. Founded in 2023 means we are only at the beginning of our journey.</div>
        <div className="banner-right">
        
             <ImageCarousel/> 
        </div>
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
        <img className="sponsors"src="assets/sponsors/Represent.jpeg" alt="Wimbledon Irish Centre" />
      </section>
      <h3 className="info-title">WHERE WE PLAY</h3>
      <section className='banner banner2' >
        <p>Our home pitch is Dundonald Recreation Park, SW19 3PN.</p>
        <div><iframe id ="map" src="https://maps.google.com/maps?width=100%25&amp;height=300&amp;hl=en&amp;q=Dundonald%20Recreation%20Ground+()&amp;t=&amp;z=14&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"></iframe></div>
      </section>
      <section className='img-banner'>
<img className="flag"src="assets/Players/HS.jpeg" alt="" />
      </section>
      
<Footer/>
    </div>
  )
}

export default Homepage
