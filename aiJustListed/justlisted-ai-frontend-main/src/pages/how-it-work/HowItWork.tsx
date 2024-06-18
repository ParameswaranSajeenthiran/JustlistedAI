import React from 'react'
import "./how-it-work.scss"
import HStartPage from './components/HStartPage'
import WhyChoose from './components/WhyChoose'
import HWConnection from './components/HWConnection'
function HowItWork() {
  return (
    <div className='how-it-work'>
      <HStartPage/>
      <WhyChoose/>
      <HWConnection/>
    </div>
  )
}

export default HowItWork
