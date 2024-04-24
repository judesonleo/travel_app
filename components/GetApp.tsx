import React from 'react'
import Button from './button'
import Image from 'next/image'

const GetApp = () => {
  return (
    <section className="flexCenter w-full flex-col pb-[100px] ">
      <div className="get-app md:rounded-5xl ">
        <div className="z-20 flex w-full flex-1 flex-col item-start justify-center gap-12">
          <h2 className='bold-40 lg:bold-64 xl:m-w-[320px]'>Get for free now!</h2>
          <p className='regular-16 text-gray-10'>Available on iOS and Android</p>
        <div className='flex w-full flex-col gap-3 whitespace-nowrap xl:flex-row' >
          <Button type='button' label="App store" icon='/apple.svg' variant={'btn_white'} full={true}/>
          <Button type='button' label="Play store" icon='/android.svg' variant={'btn_dark_green_outline'} full={true}/>
        </div>
        </div>
        <div className="flex flex-1 items-center justify-end ">
          <Image src='/phones.png' width={550} height={870} alt='phone' />
        </div>
      </div>
    </section>
  )
}

export default GetApp