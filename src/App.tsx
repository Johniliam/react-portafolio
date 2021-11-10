import './App.css';
import React from 'react';
import meImg from './images/me.jpg'
import movieAppImg from './images/moviesNBG.png'
import pokedexAppImg from './images/pokedexNBG.png'
import comingSoonImg from './images/comingSoon.png'
import ProyectContainer from './components/Proyect';
import { faCode } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import SkillsContainer from './components/Skills/SkillsContainer';
import { faFacebook, faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons';
import SocialContainer from './components/Social';

const App = () => {
  return (
    <div>
      <div className='image'>
        <div className='container'>
          <div className='textContainer'>
            <div className='blur'>
              <div className='nombre'>
                <h1>Johnatan R.L. <FontAwesomeIcon icon={faCode}/></h1>
              </div>
              <h2 className='profesion'>Software Developer</h2>
            </div>
          </div>
        </div>
      </div>
      <div className='background'>
        <div className='info'>
          <div className='pictureContainer'>
            <img src={meImg} alt='Johnatan R.L.' className='me'></img>
          </div>
          <div className='presentation'>
            <div className='saludo'>Hello There!</div>
            <div className='texto'>I'm a Senior student in software development, I have experience working with the React framework in mobile and web projects, I also have experience with Unity and .NET Core</div>
          </div>
        </div>
        <div className='title'>Projects</div>
        <div className='proyects'>
          <ProyectContainer alt='soon' image={comingSoonImg} code={'https://github.com/Johniliam'} webUrl={'https://github.com/Johniliam/react-portafolio'} type={'desktop'}/>
          <ProyectContainer alt='soon 2' image={comingSoonImg} code={'https://github.com/Johniliam'} webUrl={'https://github.com/Johniliam/react-portafolio'} type={'desktop'} />
          <ProyectContainer alt='Movie App' image={movieAppImg} code={'https://github.com/Johniliam/React-native/tree/main/05-MoviesApp'} type={'movile'} />
          <ProyectContainer alt='Pokedex App' image={pokedexAppImg} code={'https://github.com/Johniliam/React-native/tree/main/07-Pokedex'} type={'movile'} />
        </div>
        <div className='title'>Skills</div>
        <div className='skills'>
          <SkillsContainer/>
        </div>
        <div className='contact'>
          <SocialContainer url='https://www.linkedin.com/in/johnatan-iliam-ramirez-luna-9ba52a1b1/' icon={faLinkedin}/>
          <SocialContainer url='https://github.com/Johniliam' icon={faGithub}/>
          <SocialContainer url='https://www.facebook.com/Johniliam07' icon={faFacebook}/>
        </div>
        <footer>©2021 All Rights Reserved.</footer>
      </div>
    </div>
  );
}

export default App;
