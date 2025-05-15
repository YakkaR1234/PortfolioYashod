import React from 'react'
import MainPage from '../../componnets/MainPage'
import LanguageCarousel from '../../componnets/LanguageCaresol'
import Projects from '../../componnets/Projects'
import SocialMedia from '../../componnets/SocialMedia'
import Services from '../../componnets/Services'

const Home = () => {
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
    </div>
  )
}

export default Home
