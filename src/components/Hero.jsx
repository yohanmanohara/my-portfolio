import React from 'react'
import {styles} from '../styles'
import { ComputersCanvas } from './canvas'
const Hero = () => {
  return (
    <section className={`relative w-full h-screen mx-auto`}>


    <div  className={`absolute inset-0 top-[120px]  max-w-7xl mx-auto ${styles.paddingX} flex flex-row items-start gap-5`} >

         <div className='flex flex-col items-center justify-center mt-5'>
            <div className='w-5 h-5 rounded-full bg-stone-500'>
            <div className='relative w-1 h-40 sm:h-80 violet-gradient top-1 left-2' />
            </div>
        </div>
         <div>
           <h1 className={`${styles.heroHeadText} text-white`}> Hi, I'm <span className=' text-stone-700'>Yohan</span></h1>
           <p className={`${styles.heroSubText} mt-2 text-white-100`}>
            I develop 3D visuals, user <br className='hidden sm:block' />
            interfaces and web applications
          </p>
         </div>

    </div>
    <ComputersCanvas/>
  
  </section>
  )
}

export default Hero