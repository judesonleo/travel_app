//import { MouseEventHandler } from 'react'; // Import MouseEventHandler type
import Link from 'next/link'
import React from 'react'
import Image from 'next/image'
import { NAV_LINKS } from '@/constants/index'
import Button from '@/components/button';
const Navbar = () => {
  return (
<nav className="flexBetween max-container padding-container relative z-30 py-5">
<Link href="/">
    <Image src="/hilink-logo.svg" width={74} height={29} alt='Logo'></Image>
</Link>
<ul className="hidden h-full gap-12  lg:flex">
    {NAV_LINKS.map((link) => (
        <Link href={link.href} key={link.key} className='regular-16  text-gray-50 flexCenter cursor-pointer  pd-1.5 transition-all hover:font-bold'>
            {link.label}
        </Link>
    ))}
</ul>
<div className="lg:flexCenter hidden ">
<Button 
type='button'
variant='btn_dark_green'
label='Sign In'
icon='/user.svg'
/>
</div>


<Image
    src={'menu.svg'}
    alt={'Menu'}
    width={32}
    height={32}
    className='lg:hidden inline-block cursor-pointer'
    //onClick={<Link href={''}>HIii</Link> as unknown as MouseEventHandler<HTMLImageElement>}
/>
</nav>)
}

export default Navbar