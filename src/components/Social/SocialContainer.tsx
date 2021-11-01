import { IconDefinition } from '@fortawesome/free-brands-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'

interface Props {
    url: string;
    icon: IconDefinition;
}

const SocialContainer = ( {url, icon}: Props) => {
    return (
        <>
            <a href={url} className='buttonWhite'><FontAwesomeIcon icon={icon}/></a>
        </>
    )
}

export default SocialContainer
