import { Button } from '@nextui-org/react'
import React from 'react'

function Hero() {
  return (
    <section className='bg-[url(image2.svg)] w-full bg-cover bg-no-repeat overflow-hidden md:px-10 py-5'>
      <div className='w-full md:w-[50%] px-10 mb-5 '>
        <p className=' text-xl py-5 text-[#0FF1F6]'>AI SDRs (aiDRs)</p>
        <h2 className='font-bold text-white text-4xl py-4 leading-tight text-wrap'>More leads, less people.</h2>
        <p className=' w-[full] leading-6 text-white py-4 mb-5 text-wrap text-justify'>Train an aiDR on your ICP and messaging matrix. Activate it on a patch. It will send personalized  sequences to every target contact.</p>
        <Button  className='bg-[#0FF1F6] mb-10'>Sign Up for the Beta</Button>
      </div>
      
    </section>
  )
}

export default Hero
