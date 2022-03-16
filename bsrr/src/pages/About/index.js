import React, { useEffect } from 'react'
import dog1 from '../../assets/images/About/dog1.png';
import dog2 from '../../assets/images/About/dog2.png';


export default function About() {
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])
  return (
    <div className=' font-Poppins mt-20'>
      <section className=' mx-auto flex max-w-6xl'>

        <div className=''>
          <h1 className='text-3xl text-[#2F327D] '>Танилцуулга видео</h1>
          <p className="text-[#696984] w-112 text-base leading-7 mt-4">
            Skilline’s school management software helps traditional and online schools manage scheduling, attendance, payments and virtual classrooms all in one secure cloud-based system.
          </p>
          <p className="text-[#696984] underline hover:underline-offset-2 text-sm mt-3">
            Дэлгэрэнгүй
          </p></div>
        <div className='ml-56'>
          <iframe
            className='rounded-lg'
            width="505"
            height="301"
            src="https://www.youtube.com/embed/E7wJTI-1dvQ"
            frameborder="0"
            allow="autoplay; accelerometer; encrypted-media"
            allowFullScreen
            title="video"
          />{" "}
        </div>
      </section>
      <section className=' mx-auto flex max-w-6xl flex-col items-center my-20'>
        <h1 className='text-4xl text-[#2F327D] font-semibold '>Бидний хийж <span className='text-[#F4B767]'>буй ажлууд</span></h1>
        <p className="text-[#696984] max-w-3xl text-base leading-7 my-4 text-center">
          Skilline is a platform that allows educators to create online classes whereby they can store the course materials online; manage assignments, quizzes and exams; monitor due dates; grade results and provide students with feedback all in one place.          </p>
        <div className='flex max-w-5xl mx-auto mt-9'>

          <div className=' w-120 h-80 mr-32 flex justify-center flex-col items-center'>
           <div className='absolute'>
           <h1 className=' text-white text-3xl font-semibold w-80 text-center'>Амьтдыг хамгаалах сан гэж юу вэ?</h1>
            <button className='ml-20 mt-4 text-white border rounded-3xl border-white px-7 py-2'>Дэлгэрэнгүй</button>
           </div>
            <img className=""
              alt="dog1"
              src={dog1}
            />
          </div>
          <div className=" w-120 h-80 l flex justify-center flex-col items-center relative ">
            <div className='absolute'> 
            <h1 className=' text-white text-3xl font-semibold w-80 text-center'>Амьтдыг хамгаалах хууль эрх зүй</h1>
              <button className='ml-20 mt-4 text-white border border-[#33b5dde5] rounded-3xl bg-[#23BDEEE5] px-7 py-2'>Дэлгэрэнгүй</button>
              </div>

            <img
              alt="dog"
              src={dog2}
            />
          </div>

        </div>
      </section>

    </div>
  )
}
