import React from 'react'
import Hero from '../Components/Hero'
import Banner from '../Components/Banner'
import { Link } from 'react-router-dom';
import Services from '../Components/Services';
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
    </>
  )
}

export default Home