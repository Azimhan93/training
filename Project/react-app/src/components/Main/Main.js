import Article from './Article/Article';
import Video from './Video/Video';
import Partners from './Partners/Partners';
import Slider from './Slider/Slider';
import Search from './Search/SearchMovies';
import './Main.css';

export default function Main() {
    return (
      <div className="Main">
        <Slider />
        <Partners />
        <Article />
        <Search />
        <Video />
      </div>
    );
} 