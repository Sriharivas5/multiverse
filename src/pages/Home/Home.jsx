import React, { useEffect } from 'react'
import "./Home.css"
import video from "../../Assets/background.mp4"
import AOS from 'aos'
import 'aos/dist/aos.css'
import Types from '../Types/Types'
import Slider from '../Slider/Slider'
import Names from '../Names/Names'
import Navbar from '../../Components/Navbar/Navbar'






const Home = () => {
  useEffect(() => {
    AOS.init(({ duration: 1000 }));
  }, []);
  return (
    <>
          <Navbar/>

      <div className='home'>
        home
        <video id='backgroundVideo' autoPlay loop muted >
          <source src={video} type='video/mp4' />
        </video>


      </div>
      <Types />
      <Slider/>
      <Names/>
    </>

  )
}

export default Home
