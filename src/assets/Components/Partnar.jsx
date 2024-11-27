import React from 'react'

function Partnar() {
  return (
    <section className='bg-[#07292F]'>
      <h3 className='text-[#0FF1F6] py-5 text-center'> OUR TRUSTED PARTNERS</h3>

      <div className='grid grid-cols-2 place-items-center content-center md:justify-center md:place-items-center py-5 md:grid-cols-5 gap-2'>
        <img src="./BackHub.svg" alt="" />
        <img src="./CableLabs.svg" alt="" />
        <img src="./DBS.svg" alt="" />
        <img src="./cryp.svg" alt="" />
        <img src="./AMD.svg" alt="" />
      </div>
    </section>
  )
}

export default Partnar
