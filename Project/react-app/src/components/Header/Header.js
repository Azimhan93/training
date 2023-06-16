import React from 'react';
import { ReactSVG } from "react-svg";
import nintendo from './Marvell.svg';
import netflix from './Netflix.svg';
import Navigation from "./Navigation/Navigation";
import "./Header.css";


export default function Header() {
    return (
      <div className="Header">
        <Navigation />
        <div className='Header-item'>
          <ReactSVG className='nintendo' src={nintendo} />
          <ReactSVG className='netflix' src={netflix} />
          <h1>Hello movie connoisseur to our website</h1>
          <h2>Enjoy watching movies with us</h2>
        </div>
      </div>
    );
}