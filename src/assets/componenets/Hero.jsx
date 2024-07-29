import React from 'react'
import HeroImage from '../images/HeroImage.svg'

const Hero = ({title,subTitle}) => {
  return (
    <div className='bg-gray-400'>
        <div className="mx-auto flex flex-col justify-center text-center font-bold text-white min-h-[400px] space-y-3 ">
        <img src={HeroImage} className='max-h-[200px] ' alt="" />
        <div className="text-4xl ">{title}</div>
        <div className="text-md font-semibold mt-4" >{subTitle}</div>
        </div>
    </div>
  )
}

export default Hero