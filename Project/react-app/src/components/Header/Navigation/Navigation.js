import './Navigation.css';
import { ReactSVG } from "react-svg";
import logo from './IGN.svg';

export default function Navigation() {
    return (
        <nav className="main-nav">
          <div className='main-nav_logo'>
            <a href="/#"><ReactSVG className='logo-nav' src={logo} /></a>
          </div>
          <section className="main-nav_wrapper">
            <div className="top">Movies </div>
            <div className="bottom" aria-hidden="true">Movies</div>
          </section>
          <div className='main-nav_list'>
            <ul className='main-nav_links'>
              <a href="/#"><li>Home</li></a>
              <a href="/#"><li>About us</li></a>
              <a href="/#"><li>Contacts</li></a>
            </ul>
          </div>
        </nav>
    )
}