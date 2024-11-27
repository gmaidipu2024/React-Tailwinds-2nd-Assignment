import { Button } from '@nextui-org/react'
import React from 'react'

function Getstart() {
  return (
    <section className="bg-[#002228]  ">
    <div className=" grid grid-cols-1 justify-items-center items-center overflow-hidden content-center py-7">
      <div>
       <h3 className="text-[#0FF1F6] text-center text-xl ">GET STARTED</h3>
      </div>
      <div>
        <h1 className="text-white text-center text-xl md:text-2xl ">
        Embrace the new era of outbound.
        </h1>
        <div className="grid grid-cols-1 justify-items-center items-center">
        <p className='text-white py-5 text-center'>Wizia lets you train, activate, and optimize aiDRs.<br/> 
        Take your outbound to new levels of performance and efficiency.</p>
        <Button  className='bg-[#0FF1F6] mb-10'>Sign Up for the Beta</Button>
        </div>
        
      </div>
    </div>
  </section>
  )
}

export default Getstart
