import React from 'react';
import { ReactSVG } from "react-svg";
import whatsApp from './WhatsApp.svg';
import instagram from './Instagram.svg';
import telegram from './Telegram.svg';
import facebook from './Facebook.svg';
import viber from './Viber.svg';
import './Social.css';

class Social extends React.Component {
    render() {
        return (
            <div className='Social'>
                <h2>Follow us</h2>
                <div className='Social-Items'>
                    <div className='Social-whatsApp'>
                        <a href="https://www.whatsapp.com/?lang=en"><ReactSVG className='whatsApp' src={whatsApp} /></a>
                    </div>
                    <div className='Social-Instagram'>
                        <a href='https://www.instagram.com/'><ReactSVG className='instagram' src={instagram} /> </a>
                    </div>
                    <div className='Social-Telegram'>
                        <a href='https://telegram.org/'><ReactSVG className='telegram' src={telegram} /> </a>
                    </div>
                    <div className='Social-facebook'>
                        <a href='https://www.facebook.com/'><ReactSVG className='facebook' src={facebook} /></a>
                    </div>
                    <div className='Social-viber'>
                        <a href='https://www.viber.com/en/'><ReactSVG className='viber' src={viber} /></a>
                    </div>
                </div>
            </div>
          );
    }
}

export default Social;