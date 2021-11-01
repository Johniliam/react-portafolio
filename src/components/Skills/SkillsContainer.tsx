import { faAndroid, faCss3, faGitAlt, faHtml5, faJsSquare, faReact } from '@fortawesome/free-brands-svg-icons'
import { faServer } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'

const SkillsContainer = () => {
    return (
        <>
            <div className='contentBox'>
                <div className='blueBox'>
                    <div className='skill'>
                        <p className='skillIcon'><FontAwesomeIcon icon={faHtml5} size={'6x'}/></p>
                        <p>HTML 5</p>
                    </div>
                    <div className='skill'>
                        <p className='skillIcon'><FontAwesomeIcon icon={faCss3} size={'6x'}/></p>
                        <p>CSS 3</p>
                    </div>
                    <div className='skill'>
                        <p className='skillIcon'><FontAwesomeIcon icon={faAndroid} size={'6x'}/></p>
                        <p>Android</p>
                    </div>
                    <div className='skill'>
                        <p className='skillIcon'><FontAwesomeIcon icon={faReact} size={'6x'}/></p>
                        <p>React</p>
                    </div>
                    <div className='skill'>
                        <p className='skillIcon'><FontAwesomeIcon icon={faJsSquare} size={'6x'}/></p>
                        <p>Java Script</p>
                    </div>
                    <div className='skill'>
                        <p className='skillIcon'><FontAwesomeIcon icon={faGitAlt} size={'6x'}/></p>
                        <p>Git</p>
                    </div>
                    <div className='skill'>
                        <p className='skillIcon'><FontAwesomeIcon icon={faServer} size={'6x'}/></p>
                        <p>.NET Core</p>
                    </div>
                </div>
            </div>  
        </>
    )
}

export default SkillsContainer
