import React from 'react'
import Footer from '../components/Footer'
import ImageCarousel from '../components/ImageCarousel'
const Homepage:React.FC = () => {
  const redirectToBusinessPage = (url: string) => {
    window.open(url, '_blank');
  };
  return (

    <div className="container">
        <div className='banner-wrapper'>
      <section className='main-banner'>
        <div className="banner-left">
<h3 id="banner-text">
            We are a community-driven football club based in Wimbledon. <br/><br/> Established in 2023 with many more years to come.</h3></div>
        <div className="banner-right">
        
             <ImageCarousel/> 
        </div>
      </section>
      </div>
      <section className="info">
      </section>
      <h3 className="info-title">OUR SPONSORS</h3>
      <section className='banner'>
      <img
        className="sponsors"
        src="assets/sponsors/MLB-Estates.png"
        alt="MLB Estates"
        onClick={() => redirectToBusinessPage('https://mblestates.com/')}
      />
      <img
        className="sponsors"
        src="assets/sponsors/AM.png"
        alt="AM"
        onClick={() => redirectToBusinessPage('https://absolutemortgages.ie/')}
      />
      <img
        className="sponsors"
        src="assets/sponsors/WIC.png"
        alt="Wimbledon Irish Centre"
        onClick={() => redirectToBusinessPage('https://wimbledoncommunity.org/spaces/south-london-irish-association/')}
      />
      <img
        className="sponsors"
        src="assets/sponsors/Represent.jpeg"
        alt="Represent"
        onClick={() => redirectToBusinessPage('https://representagency.com/')}
      />
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
