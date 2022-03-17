import React, {useEffect} from 'react'
import AboutCover from '../../components/AboutComponents/AboutCover'

export default function About () {
  useEffect(() => {
    window.scrollTo(0,0)
  },[])
  return (
    <div className=''>
      <AboutCover/>
       <section className=''>
         <h1 className='text-3xl text-[#2F327D] w-96 ml-4 '>Танилцуулга видео</h1>
       </section>
    </div>
  )
}
