import { faCode } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import meImg from './images/me.jpg'
import movieAppImg from './images/moviesNBG.png'
import pokedexAppImg from './images/pokedexNBG.png'
import comingSoonImg from './images/comingSoon.png'
import './App.css';
import ProyectContainer from './components/Proyect';
import SkillsContainer from './components/Skills/SkillsContainer';
import { faFacebook, faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons';

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
            <div className='texto'>Im a senior student in software development, i have been working with the framework react in movile and web proyects, also have experience with unity and .NET Core</div>
          </div>
        </div>
        <div className='title'>Proyectos</div>
        <div className='proyects'>
          <ProyectContainer alt='soon' image={comingSoonImg} code={'https://github.com/Johniliam'} webUrl={'https://github.com/Johniliam/react-portafolio'} type={'desktop'}/>
          <ProyectContainer alt='soon 2' image={comingSoonImg} code={'https://github.com/Johniliam'} webUrl={'https://github.com/Johniliam/react-portafolio'} type={'desktop'} />
          <ProyectContainer alt='Movie App' image={movieAppImg} code={'https://github.com/Johniliam/React-native/tree/main/05-MoviesApp'} type={'movile'} />
          <ProyectContainer alt='Pokedex App' image={pokedexAppImg} code={'https://github.com/Johniliam/React-native/tree/main/07-Pokedex'} type={'movile'} />
        </div>
        <div className='title'>Habilidades</div>
        <div className='skills'>
          <SkillsContainer/>
        </div>
        <div className='contact'>
          <a href='https://www.linkedin.com/in/johnatan-iliam-ramirez-luna-9ba52a1b1/' className='buttonWhite'><FontAwesomeIcon icon={faLinkedin}/></a>
          <a href='https://github.com/Johniliam' className='buttonWhite'><FontAwesomeIcon icon={faGithub}/></a>
          <a href='https://www.facebook.com/Johniliam07' className='buttonWhite'><FontAwesomeIcon icon={faFacebook}/></a>
        </div>
        <footer>©2021 All Rights Reserved.</footer>
      </div>
    </div>
  );
}

export default App;
