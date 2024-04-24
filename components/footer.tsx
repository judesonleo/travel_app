import { FOOTER_CONTACT_INFO, FOOTER_LINKS, SOCIALS } from '@/constants'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
type FooterProps = {
  title?: string,
  link?: string[],
  children?: React.ReactNode,
  links?: { label: string; value: string; }[];
}
const Footer = () => {
  return (
    <footer className='flexCenter mb-24'>
      <div className="padding-container max-container flex w-full flex-col gap-14">
        <div className="flex flex-col items-start justify-center gap-[10%] md:flex-row">
          <Link href={'/'} className='mb-10'>
            <Image src={'/hilink-logo.svg'} alt={'logo'} width={74} height={29}/>
          </Link>
          <div className="flex flex-wrap gap-10 sm:justify-between md:flex-1">
             {FOOTER_LINKS.map((link,index) => (
              <Footertabs title={link.title} link={link.links} key={index}/>
            //  <Footertabs>
            //     title={link.title}
            //     link={link.links}
            //  </Footertabs>
             ))}
             <div className="flex flex-col gap-5">
                <h4 className='bold-18 whitespace-nowrap'>{FOOTER_CONTACT_INFO.title}</h4>
              {FOOTER_CONTACT_INFO.links.map((links) => (
                <div key={links.label}>
                  <h4 className='bold-18 whitespace-nowrap'>{links.label}</h4>
                  <p>{links.value}</p>
                </div>
                ))}
             </div>
            <div className='flex flex-col gap-5'>
              <Footertabs title={SOCIALS.title} />
              <ul className='regular-14 flex gap-4 text-gray-30'>

              {SOCIALS.links.map((link, index) => (
                //<Image src={link} key={index} alt={''} width={25} height={24} className='flex flex-row'/>
                <Link href="/" key={index}>
                  <Image src={link} key={index} alt={''} width={25} height={24} />
                </Link>
              ))}
              </ul>
            </div>
          </div>

        </div>
      </div>

    </footer>
  )
}

const Footertabs = ({ title, link }:FooterProps) => {
return(
  <div className='flex flex-col gap-5'>
    <h4 className='bold-18 whitespace-nowrap'>

    {title}
    
    </h4>
    {link?.map((link,index) => (
      <Link href="/" key={index}>
        {link}
      </Link>
    
    ))}
  </div>
)
}
// const FooterConntacttabs = ({ title, links }:FooterContactProps) => {
// return(
//   <div className='flex flex-col gap-5'>
//     <h4 className='bold-18 whitespace-nowrap'>

//     {title}
    
//     </h4>
//     {link.map((link,index) => (
//       <Link href="/" key={index}>
//         {link}
//       </Link>
    
//     ))}
//   </div>
// )
// }
export default Footer