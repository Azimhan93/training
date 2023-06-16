import React from 'react';
import video from './Air.mp4';
import video1 from './JohnWick.mp4'
import './Video.css';

class Video extends React.Component {
    render() {
        return (
            <div className='Video'>
                <div className="Video-text-container">
                    <h2>Our recommendation</h2>
                </div>
                <div className='VideoItem'>
                    <div className='Video-item'>
                        <h3>John Wick Chapter 4 (2023)</h3>
                        <div className='Video-item_video'>
                            <p>
                                John Wick: Chapter 4 is a 2023 American neo-noir action thriller film directed and co-produced by Chad Stahelski and written by Shay Hatten and Michael Finch. The sequel to John Wick: Chapter 3 – Parabellum (2019) and the fourth installment in the John Wick franchise, the film stars Keanu Reeves as the title character, alongside Donnie Yen, Bill Skarsgård, Laurence Fishburne, Hiroyuki Sanada, Shamier Anderson, Lance Reddick, Rina Sawayama, Scott Adkins, Clancy Brown, and Ian McShane. In the film, John Wick sets out to get revenge on the High Table and those who left him for dead.
                                Learning of his son's actions, Viggo beats and berates Iosef for incurring John's wrath, revealing John was once a hitman in his employ, and was renowned and feared in the criminal underworld as the "Baba Yaga", a ruthless, relentless "man of focus, commitment, and sheer will". After John fell in love with Helen, a civilian, Viggo gave him a seemingly impossible task to earn his freedom; he succeeded.
                            </p>
                            <video className='VideoPlayer1' width="520" height="340" poster='https://www.dexerto.com/cdn-cgi/image/width=3840,quality=75,format=auto/https://editors.dexerto.com/wp-content/uploads/2023/04/28/john-wick-chapter-4-streaming.jpg' controls autoPlay={true}>
                                <source src={video1} type="video/mp4" />
                            </video>
                        </div>
                    </div>
                    <div className='Video-item'>
                        <h3>Air (2023)</h3>
                        <div className='Video-item_video'>
                            <p>
                                Air is a 2023 American biographical sports drama film directed by Ben Affleck and written by Alex Convery. The film is based on true events about the origin of Air Jordan,
                                 a basketball shoeline, of which a Nike employee seeks to strike a business deal with rookie player Michael Jordan. It stars Matt Damon, Ben Affleck, Jason Bateman,
                                  Marlon Wayans, Chris Messina, Chris Tucker and Viola Davis.
                                
                            </p>
                            <video className='VideoPlayer2' width="520" height="340" controls poster='https://images.cinemaexpress.com/uploads/user/imagelibrary/2023/5/12/original/air_copy.jpg' autoPlay={true}>
                                <source src={video} type="video/mp4"/>   
                            </video>
                        </div>
                    </div>
                </div>
            </div>
          );
    }
}

export default Video;

