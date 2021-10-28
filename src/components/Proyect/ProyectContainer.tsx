import React from 'react'

interface Props{
    alt: string;
    image: string;
    code: string;
    proyect?: string;
}

const ProyectContainer = ( {image, alt}: Props) => {
    return (
        <>
            <div className='proyectBox'>
                <div className='proyectImage'>
                    <img src={image} alt={alt}/>
                </div>
                <div className='proyectDescription'>

                </div>
            </div>
        </>
    )
}

export default ProyectContainer