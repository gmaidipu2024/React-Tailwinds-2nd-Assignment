import React from 'react'

function Controls() {
  const ControList =[
    {
      title: "You’re in Control",
      dis:"aiDRs operate based on your rules  You guide the machine, the aiDRs execute the work.",
      img: "./Group.svg"
    },
    {
      title: "Infinitely Scalable",
      dis:"Train an aiDR on a patch. When you are happy with the results, scale it effortlessly.",
      img: "./graph.svg"
    },
    {
      title: "Incredibly Flexible",
      dis:"Train an aiDR on an outbound patch, to nurture inbound leads, or to reach out to your long tail of SMB customers at renewal time.",
      img: "./tools.svg"
    },
  ]
  return (
    <section className='bg-[#002228] text-white py-20 px-3'>
      <div className='grid grid-cols-1 md:grid-cols-3 place-items-center  gap-4'>
        { ControList.map((items , i)=>(

        <div key={i}>
          <img src={items.img} alt="" className='px-3' />
          <h1 className='font-bold text-2xl py-3 px-3'>{items.title}</h1>
          <p className='px-3'> {items.dis}</p>
        </div>

        ))

        }
      </div>
      
    </section>
  )
}

export default Controls
