import React,{useEffect} from 'react'
import MainPage from '../../componnets/MainPage'
import LanguageCarousel from '../../componnets/LanguageCaresol'
import Projects from '../../componnets/Projects'
import SocialMedia from '../../componnets/SocialMedia'
import Services from '../../componnets/Services'
import UpButton from '../../componnets/UpButton'

const Home = () => {
    useEffect(() => {
      // Scroll to the top of the page when the component mounts
      window.scrollTo(0, 0);
    }, []);
  return (
    <div className='bg-gray-900'>
      <section >
        <MainPage/>
      </section>
      <section className='bg-gray-900'>
        <LanguageCarousel/>
      </section>
      <section className='bg-gray-900'>
        <Projects/>
      </section>
      <section className='bg-gray-900'>
        <SocialMedia/>
      </section>
      <section className='bg-gray-900'>
        <Services/>
        </section>


        <UpButton/>
    </div>
  )
}

export default Home
