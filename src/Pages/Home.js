import React from 'react'
import Hero from '../Components/Hero'
import Banner from '../Components/Banner'
import { Link } from 'react-router-dom';
import Services from '../Components/Services';
import FeaturedRooms from '../Components/FeaturedRooms';
import StyledHero from '../Components/StyledHero';
const Home = () => {
  return (
    <>
      <Hero>
        <Banner title="Luxurios rooms " subtitle="deluxe rooms at $200">
          <Link to="/rooms" className='btn-primary'>
            Our Rooms
          </Link>
        </Banner>
      </Hero>
      <Services/>
      <FeaturedRooms/>
      <StyledHero/>
    </>
  )
}

export default Home