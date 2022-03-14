import React, {useEffect} from 'react'


export default function About () {
  useEffect(() => {
    window.scrollTo(0,0)
  },[])
  return (
    <div className='wrapper font-Poppins mt-16'>
       <section className=''>
        
         <h1 className='text-3xl text-[#2F327D] w-96 ml-4 '>Танилцуулга видео</h1>
       </section>
    </div>
  )
}
