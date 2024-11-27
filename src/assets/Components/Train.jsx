import React from 'react'

function Train() {
  return (
    <section className='bg-[url(BG.svg)] w-full h-fit bg-no-repeat bg-cover overflow-hidden py-20 mx-auto text-center'>
      <div className=''>
        <h3 className='font-bold text-white text-2xl md:text-4xl py-3'>Train your aiDR on your...</h3>
        <h2 className='text-[#0FF1F6] text-3xl py-3'>prefered email st|</h2>
        <p className='text-white text-sm md:text-xl py-2'>You’re in control. Train your aiDR on <br/> elements of your Marketing strategy.</p>
        <div className='flex flex-wrap md:justify-center justify-items-start  text-[#14BCB2] mt-4 gap-4 px-2'>
          <div className='flex gap-0 md:gap-2 '>
            <img src="./check.svg" alt="" />
            <span>Quick to ramp</span>
          </div>
          <div className='flex gap-0 md:gap-2'>
            <img src="./check.svg" alt="" />
            <span>Easy to optimize</span>
          </div>
        </div>
        <div className='flex flex-wrap  md:justify-center justify-items-start text-[#14BCB2] gap-4 mt-4 px-2'>
          <div className='flex gap-0 md:gap-2 '>
            <img src="./check.svg" alt="" />
            <span>Quick to scale up</span>
          </div>
          <div className='flex gap-0 md:gap-2'>
            <img src="./check.svg" alt="" />
            <span>Works with all your existing tools</span>
          </div>
        </div>
        
      </div>
    </section>
  )
}

export default Train
