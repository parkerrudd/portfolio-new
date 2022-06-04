import styles from './styles/style.css'; 
import findMeASong from './images/song-gen-sad-ss.png'; 
import parkerruddmusic from './images/music-site-ss.png';
import blackjack from './images/blackjack-ss.png'; 
import reverbcalculator from './images/reverbcalc-ss.png'; 

function WorkPage() {

    return (
        <section id='workpage'>
            <div className="workpage-container">
                <h1>Some Things I've Built</h1> <hr />
                <div className="find-me-a-song">
                    <a href="https://drive.google.com/file/d/19J8g-bL3rTxqQylybczwI7l5GJBC8rMz/view" target="_blank">
                        <img src={findMeASong} alt="findmeasong.com image" />
                    </a>
                    <div className="find-me-a-song-info">
                        <a href="https://drive.google.com/file/d/19J8g-bL3rTxqQylybczwI7l5GJBC8rMz/view" target="_blank">
                            <h5>FindMeASong.com</h5>
                        </a>
                        <br />
                        <p className='m-plus'>A react app that finds you a song based on your current mood. For this application, I created a song database that is mapped through to generate a random song for the user to listen to. I also created a version that implements the spotify API and uses authorization tokens to allow users access to a different playlist for each mood.</p>
                        <ul>
                            <li>React</li>
                            <li>Axios</li>
                            <li>Spotify API</li>
                        </ul>
                    </div>
                </div>

                <div className='pr-music-container'>
                    <div className="pr-music-info">
                        <a href="https://www.parkerruddmusic.com/" target="_blank">
                            <h5>parkerRuddMusic.com</h5>
                        </a>
                        <p className='m-plus'>
                        This is a personal website that I made for my music. It is designed to be a one-stop for users to then be redirected to listen to my music on the streaming platform of their choice. 
                        </p>
                        <ul>
                            <li>HTML</li>
                            <li>CSS</li>
                        </ul>
                    </div>

                    <a href="https://www.parkerruddmusic.com/" target="_blank">
                        <img src={parkerruddmusic} alt="" />
                    </a>

                </div>

                <div className="blackjack-container">
                    <a href="https://www.myfreeblackjack.com/" target="_blank">
                        <img src={blackjack} alt="" />
                    </a>

                    <div className='blackjack-info'>
                        <a href="https://www.myfreeblackjack.com/" target="_blank">
                            <h5>myFreeBlackjack.com</h5>
                        </a>
                        <p className='m-plus'>
                        In this blackjack game, the user is dealt two cards and plays against the dealer. The user has the ability to choose whether they want to recieve another card, or stick to their current card count. The deck is shuffled upon each new turn. This application was built using React JS, and the deck of cards API.
                        </p>
                        <ul>
                            <li>React</li>
                            <li>Deck of Cards API</li>
                        </ul>
                    </div>
                </div>

                <div className="reverb-calc-container">
                    <div className="reverb-calc-info">
                        <a href="https://www.reverbcalculator.com/" target="_blank">
                            <h5>reverbCalculator.com</h5>
                        </a>
                        <p className='m-plus'>
                        This is a web app that helps music producers decide the reverb parameters for their track. The user simply inputs the track's BPM, and the app displays the ideal time for all the dimensions of the reverb to run. The user can then copy these values into their track's reverb settings. 
                        </p>
                        <ul>
                            <li>HTML</li>
                            <li>CSS</li>
                            <li>JavaScript</li>
                        </ul>
                    </div>
                    <a href="https://www.reverbcalculator.com/" target="_blank">
                        <img src={reverbcalculator} alt="" />
                    </a>
                </div>
            </div>
        </section>

    )
}

export default WorkPage; 