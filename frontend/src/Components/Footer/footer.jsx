import React from 'react'
import './footer.css'

function Footer() {
    
    const handlePreviousClick = async (e) => {
        console.log({ e })
        try {
            const response = await fetch('http://localhost:3035/:id/prev');
            console.log(response);

        } catch (error) {
            console.error({ error })
        }
    };
    const handleNextClick = async (e) => {
        console.log({ e })
        try {
            const response = await fetch('http://localhost:3035/:id/next');
            console.log(response);

        } catch (error) {
            console.error({ error })
        }
    };
    const handlePauseClick = async (e) => {
        console.log({ e })
        try {
            const response = await fetch('http://localhost:3035/:id/prev');
            console.log(response);

        } catch (error) {
            console.error({ error })
        }
    };
    const handleShuffleClick = async (e) => {
        console.log({ e })
        try {
            const response = await fetch('http://localhost:3035/:id');
            console.log(response);

        } catch (error) {
            console.error({ error })
        }
    };
    const handleRepeatClick = async (e) => {
        console.log({ e })
        try {
            const response = await fetch('http://localhost:3035/:id');
            console.log(response);

        } catch (error) {
            console.error({ error })
        }
    };
    return (
        <>
            <footer className="now-playing-bar">
                <div className="current-track">
                    <div>
                        <img src="/public/img/ab67616d0000b273d9985092cd88bffd97653b58.png" alt="Current Track" />
                        <div className="track-info">
                            <span className="track-name">GNX</span>
                            <span className="artist-name">Kandrik Lammar</span>
                        </div>
                    </div>
                    <div className="track-controls">
                        <button className="like-btn"></button>
                    </div>
                </div>
                <div className="playback-controls">
                    <div className="playback-buttons">
                        <button className="shuffle" onClick={handleShuffleClick}>
                            <svg data-encore-id="icon" role="img" aria-hidden="true" viewBox="0 0 16 16" className="Svg-sc-ytk21e-0 dYnaPI"><path d="M13.151.922a.75.75 0 1 0-1.06 1.06L13.109 3H11.16a3.75 3.75 0 0 0-2.873 1.34l-6.173 7.356A2.25 2.25 0 0 1 .39 12.5H0V14h.391a3.75 3.75 0 0 0 2.873-1.34l6.173-7.356a2.25 2.25 0 0 1 1.724-.804h1.947l-1.017 1.018a.75.75 0 0 0 1.06 1.06L15.98 3.75 13.15.922zM.391 3.5H0V2h.391c1.109 0 2.16.49 2.873 1.34L4.89 5.277l-.979 1.167-1.796-2.14A2.25 2.25 0 0 0 .39 3.5z"></path><path d="m7.5 10.723.98-1.167.957 1.14a2.25 2.25 0 0 0 1.724.804h1.947l-1.017-1.018a.75.75 0 1 1 1.06-1.06l2.829 2.828-2.829 2.828a.75.75 0 1 1-1.06-1.06L13.109 13H11.16a3.75 3.75 0 0 1-2.873-1.34l-.787-.938z"></path></svg>
                        </button>
                        <button className="previous" onClick={handlePreviousClick}>
                            <svg data-encore-id="icon" role="img" aria-hidden="true" viewBox="0 0 16 16" className="Svg-sc-ytk21e-0 dYnaPI"><path d="M3.3 1a.7.7 0 0 1 .7.7v5.15l9.95-5.744a.7.7 0 0 1 1.05.606v12.575a.7.7 0 0 1-1.05.607L4 9.149V14.3a.7.7 0 0 1-.7.7H1.7a.7.7 0 0 1-.7-.7V1.7a.7.7 0 0 1 .7-.7h1.6z"></path></svg>
                        </button>
                        <button className="play-pause" onClick={handlePauseClick}>
                            <svg data-encore-id="icon" role="img" aria-hidden="true" viewBox="0 0 16 16" className="Svg-sc-ytk21e-0 dYnaPI"><path d="M2.7 1a.7.7 0 0 0-.7.7v12.6a.7.7 0 0 0 .7.7h2.6a.7.7 0 0 0 .7-.7V1.7a.7.7 0 0 0-.7-.7H2.7zm8 0a.7.7 0 0 0-.7.7v12.6a.7.7 0 0 0 .7.7h2.6a.7.7 0 0 0 .7-.7V1.7a.7.7 0 0 0-.7-.7h-2.6z"></path></svg>
                        </button>
                        <button className="next" onClick={handleNextClick}>
                            <svg data-encore-id="icon" role="img" aria-hidden="true" viewBox="0 0 16 16" className="Svg-sc-ytk21e-0 dYnaPI"><path d="M12.7 1a.7.7 0 0 0-.7.7v5.15L2.05 1.107A.7.7 0 0 0 1 1.712v12.575a.7.7 0 0 0 1.05.607L12 9.149V14.3a.7.7 0 0 0 .7.7h1.6a.7.7 0 0 0 .7-.7V1.7a.7.7 0 0 0-.7-.7h-1.6z"></path></svg>
                        </button>
                        <button className="repeat" onClick={handleRepeatClick}>
                            <svg data-encore-id="icon" role="img" aria-hidden="true" viewBox="0 0 16 16" className="Svg-sc-ytk21e-0 dYnaPI"><path d="M0 4.75A3.75 3.75 0 0 1 3.75 1h8.5A3.75 3.75 0 0 1 16 4.75v5a3.75 3.75 0 0 1-3.75 3.75H9.81l1.018 1.018a.75.75 0 1 1-1.06 1.06L6.939 12.75l2.829-2.828a.75.75 0 1 1 1.06 1.06L9.811 12h2.439a2.25 2.25 0 0 0 2.25-2.25v-5a2.25 2.25 0 0 0-2.25-2.25h-8.5A2.25 2.25 0 0 0 1.5 4.75v5A2.25 2.25 0 0 0 3.75 12H5v1.5H3.75A3.75 3.75 0 0 1 0 9.75v-5z"></path></svg>
                        </button>
                    </div>
                    <div className="playback-progress">
                        <span className="current-time">0:00</span>
                        <div className="progress-bar"></div>
                        <span className="total-time">3:45</span>
                    </div>
                </div>
                <div className="additional-controls">
                    <button className="lyrics"></button>
                    <button className="queue"></button>
                    <button className="connect-device"></button>
                    <button className="volume"></button>
                </div>
            </footer>
        </>
    )
}

export default Footer;