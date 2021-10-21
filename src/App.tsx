import { faCode } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import './App.css';

const App = () => {
  return (
    <div className='background'>
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
    </div>
  );
}

export default App;
