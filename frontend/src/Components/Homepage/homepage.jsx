import React from 'react'
import './homepage.css'

function Homepage() {
    return (
        <>
        <main className="main-content">
            <div className="content-area">
                <h1>Good afternoon</h1>
                <div className="recent-playlists">
                    <div className="playlist-card">
                        <button className="playlist-btn">
                            <img src="/public/img/37i9dQZF1DZ06evO00wLyc-default.jpg" alt="Playlist 1"/>
                            <span>Playlist 1</span>
                        </button>
                    </div>
                    <div className="playlist-card">
                        <button className="playlist-btn">
                            <img src="/public/img/37i9dQZF1DZ06evO0JU6Vb-default.jpg" alt="Playlist 2"/>
                            <span>Playlist 2</span>
                        </button>
                    </div>
                    <div className="playlist-card">
                        <button className="playlist-btn">
                            <img src="/public/img/37i9dQZF1DZ06evO1d8NjR-default.jpg" alt="Playlist 3"/>
                            <span>Playlist 3</span>
                        </button>
                    </div>
                    <div className="playlist-card">
                        <button className="playlist-btn">
                            <img src="/public/img/37i9dQZF1DZ06evO1SVXaM-default.jpg" alt="Playlist 4"/>
                            <span>Playlist 4</span>
                        </button>
                    </div>
                    <div className="playlist-card">
                        <button className="playlist-btn">
                            <img src="/public/img/37i9dQZF1DZ06evO39IJXO-default.jpg" alt="Playlist 5"/>
                            <span>Playlist 5</span>
                        </button>
                    </div>
                    <div className="playlist-card">
                        <button className="playlist-btn">
                            <img src="/public/img/37i9dQZF1DZ06evO42FdPr-default.jpg" alt="Playlist 6"/>
                            <span>Playlist 6</span>
                        </button>
                    </div>
                </div>
            </div>
        </main> 
        </>
    )
}

export default Homepage;