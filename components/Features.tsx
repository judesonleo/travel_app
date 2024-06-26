import { FEATURES } from '@/constants'
import Image from 'next/image'
import React from 'react'
interface FeatureProps{
  title:string;
  icon:string;
  varaint:string;
  description:string;

}
const Features = () => {
  return (
    <section className="flex-col flexCenter overflow-hidden bg-feature-bg bg-center bg-no-repeat py-24 max-container padding-container">
      <div className="max-container flex padding-container relative w-full justify-end">
        <div className='flex flex-1 lg:min-h-[900px ]'>
          <Image src={'/phone.png'} alt={'phone'} width={450} height={1000} className='feature-phone p-7 ml-5'/>
        </div>
        <div className="z-20 flex w-full flex-col lg:w-[50%]">
          <div className="relative">
            <Image 
            src={'/camp.svg'}
            alt='camp'
            width={50}
            height={50}
            className='absolute left-[-5px] top-[-25px] w-10 lg:w-[50px]'
            />
            <h2 className='bold-40 lg:bold-64  '>
            Our Features
            </h2>
            <ul className='mt-10 grid gap-10 md:grid-cols-2 lg:mt-20 lg:gap-20 '>
              {FEATURES.map((feature) => (
                 <FeatureItem title={feature.title} key={feature.title}icon={feature.icon} varaint={feature.variant} description={feature.description} />
              ))}
            </ul>
          </div>
        </div>
      </div>

    </section>
  )
}
const FeatureItem =( {title,icon,varaint,description}:FeatureProps)=>{
return(
  <li className='flex w-full flex-1 flex-col items-start '>
    <div className="rounded-full mt-5 p-4 lg:p-7 bg-green-50">
      <Image src={icon} alt={'map'}   width={28} height={28}   />
      </div> 
      <h2 className="bold-20 lg:bold-32 mt-5 capitalize">
        {title}
      </h2>
      <p className='regular-16 mt-5 bg-white/80 text-gray-30 lg:mt-[30px] lg:bg-none'>
        {description}
      </p>
  </li>
)
}
export default Features