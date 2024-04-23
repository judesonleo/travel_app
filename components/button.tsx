import React from 'react'
import Image from 'next/image'

type ButtonProps = {
    type: "button"| "submit" | "reset";
    variant:  "btn_dark_green" | string;
    label: string;
    icon?: string;
}

const Button = ({type,variant,label,icon}:ButtonProps) => {
    return (
        <button type={type} className={`flexCenter gap-3 rounded-full border ${variant}`}>
            {icon && <Image width={24} height={24} src={icon} alt={''}/>}
            <label className='bold-16 whitespace-nowrap'>
            {label}

            </label>
        </button>
    )
}

export default Button