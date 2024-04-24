import React from 'react'
import Image from 'next/image'

type ButtonProps = {
    type: "button"| "submit" | "reset";
    variant:  "btn_dark_green" | string;
    label: string;
    icon?: string;
    full?: boolean;
}

const Button = ({type,variant,label,icon,full}:ButtonProps) => {
    return (
        <button type={type} className={`flexCenter gap-3 rounded-full border ${variant} cursor-pointer ${full && 'w-full'}`}>
            {icon && <Image width={24} height={24} src={icon} alt={''}/>}
            <label className='bold-16 whitespace-nowrap cursor-pointer'>
            {label}

            </label>
        </button>
    )
}

export default Button