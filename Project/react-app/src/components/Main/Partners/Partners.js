import React from 'react';
import { ReactSVG } from "react-svg";
import cinema from './Cinema.svg';
import hbo from './HBO.svg';
import imd from './IMDb.svg';
import century from './20th.svg';
import tube from './YouTube.svg';
import './Partners.css';

class Partners extends React.Component {
    render() {
        return (
            <div className='Partners'>
                <h2>Get to know our partners</h2>
                <div className='Partners-Items'>
                    <div className='Social-cinema'>
                        <a href="https://www.cinemax.com/"><ReactSVG className='cinema' src={cinema} /></a>
                    </div>
                    <div className='Partners-hbo'>
                        <a href='https://www.hbo.com/'><ReactSVG className='hbo' src={hbo} /> </a>
                    </div>
                    <div className='Partners-imd'>
                        <a href='https://www.imdb.com/'><ReactSVG className='imd' src={imd} /> </a>
                    </div>
                    <div className='Partners-century'>
                        <a href='https://www.20thcenturystudios.com/'><ReactSVG className='century' src={century} /></a>
                    </div>
                    <div className='Partners-net'>
                        <a href='https://www.youtube.com/'><ReactSVG className='net' src={tube} /></a>
                    </div>
                </div>
            </div>
          );
    }
}

export default Partners;