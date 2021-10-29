import { faGithub } from '@fortawesome/free-brands-svg-icons'
import { faCode, faGlobeAmericas } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'

interface Props{
    alt: string;
    image: string;
    code: string;
    webUrl?: string;
    type: string;
    proyect?: string;
}

const ProyectContainer = ( {image, alt, type, code, webUrl}: Props) => {
    return (
        <>
            <div className='proyectBox'>
                <img src={image} alt={alt} className={type}/>
                <div className='proyectDescription'>
                    <a href={code} className='buttonWhite'><FontAwesomeIcon icon={faGithub}/></a>
                    {
                            (webUrl != null) ? <a href={webUrl} className='buttonWhite'><FontAwesomeIcon icon={faGlobeAmericas}/></a> : <a></a>
                    }    
                </div>
            </div>
        </>
    )
}

export default ProyectContainer