import { faGithub } from '@fortawesome/free-brands-svg-icons'
import { faGlobeAmericas } from '@fortawesome/free-solid-svg-icons'
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
            <div className='contentBox'>
                <img src={image} alt={alt} className={type}/>
                <div className='proyectDescription'>
                    <a href={code} target="_blank" rel="noreferrer" className='buttonWhite'><FontAwesomeIcon icon={faGithub}/></a>
                    {
                            (webUrl != null) ? <a href={webUrl} target="_blank" rel="noreferrer" className='buttonWhite'><FontAwesomeIcon icon={faGlobeAmericas}/></a> : <></>
                    }    
                </div>
            </div>
        </>
    )
}

export default ProyectContainer