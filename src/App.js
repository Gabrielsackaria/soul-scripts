import React, { useState, useEffect } from 'react';
import Draggable from 'react-draggable'; 
import Spotify from './components/spotify';
import './App.css';

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [inputDate, setInputDate] = useState("");
  const [menuOpen, setMenuOpen] = useState(false);
  const [currentPage, setCurrentPage] = useState("home");
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const anniversaryDate = "2006-07-18"; 
  const slideshowImages = [
    "/pic1.jpeg",
    "/pic2.jpeg",
    "/pic3.jpeg",
    "/pic4.jpeg",
    "/pic5.jpeg",
    "/pic6.jpeg",
    "/pic7.jpeg",
    "/pic8.jpeg",
    "/pic9.jpeg",
    "/pic10.jpeg",
    "/pic11.jpeg",
    "/pic12.jpeg",
    "/pic13.jpeg",
  ];
  
  const mediaImages = [
    "/pic2.jpeg",
    "/pic4.jpeg",
    "/pic6.jpeg",
    "/pic8.jpeg",
    "/pic10.jpeg",
    "/pic12.jpeg",
  ];
  
  const featuredVideo = "https://www.w3schools.com/html/mov_bbb.mp4";

  // --- LETTER TO SISTER ---
  const letterToSister = [
    "To my sister: 💕",
    "Before I understood God's blessing, He had already given me you.",
    "Through every season of life, you've been my friend, my cheerleader, and sometimes, my greatest challenge.",
    "But no matter what, you are God's gift to me.",
    "I pray He surrounds you, His wisdom guides you, and His love surrounds you, and His strength lifts you every day.",
    "No matter where life takes us, you will always have me, and I will always thank God for you sisi 😘"
  ];

  // --- LETTER TO FRIEND ---
  const letterToFriend = [
    "To pussy: 🫂",
    "You are my mirror, my safe place, and the only person who truly understands me without needing words.",
    "We may have our own paths, but our hearts will always be aligned.",
    "Thank you for being my shoulder to cry on and my biggest supporter.",
    "No matter where life takes us, I know I will never be truly alone, because I have you.",
    "Ek is baie lief vir jou mamas 🥹🫂"
  ];

  useEffect(() => {
    if (isLoggedIn && currentPage === "home") {
      const interval = setInterval(() => {
        setCurrentImageIndex(prev => (prev + 1) % slideshowImages.length);
      }, 5000);
      return () => clearInterval(interval);
    }
  }, [isLoggedIn, currentPage, slideshowImages.length]);

  const handleLogin = () => {
    if (inputDate === anniversaryDate) {
      setIsLoggedIn(true);
    } else {
      alert("Pokie please enter our special date. 🔒");
    }
  };

  const handleNavClick = (page) => {
    setCurrentPage(page);
    setMenuOpen(false);
  };

  const renderMediaSection = () => (
    <div className="media-section">
      <h2>Pictures & Video 🎞️</h2>
      <p className="section-intro">A small gallery of our favorite moments, plus a video to relive them.</p>
      <div className="media-grid">
        {mediaImages.map((img, index) => (
          <div key={img} className="media-card">
            <img
              src={img}
              alt={`Memory ${index + 1}`}
              className="media-image"
              loading="lazy"
            />
          </div>
        ))}
      </div>
      <div className="media-video-card">
        <h3>Our Highlight Reel</h3>
        <video
          className="media-video"
          controls
          poster="/pic1.jpeg"
        >
          <source src={featuredVideo} type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      </div>
    </div>
  );

  /* ---------- LOGIN SCREEN ---------- */
  if (!isLoggedIn) {
    return (
      <div className="app-container">
        <div className="glass-card animate-up">
          <h1 className="brand-title">LOCKED WITH LOVE 🔒</h1>
          <p>Enter our special date to unlock 💞</p>
          <input
            type="date"
            className="premium-input"
            onChange={(e) => setInputDate(e.target.value)}
          />
          <button className="premium-btn" onClick={handleLogin}>
            Unlock
          </button>
        </div>
        <div className="background-blobs" />
      </div>
    );
  }

  /* ---------- DASHBOARD ---------- */
  return (
    <div className="app-container dashboard">

      {/* BACKDROP OVERLAY */}
      {menuOpen && <div className="sidebar-backdrop" onClick={() => setMenuOpen(false)} />}

      {/* SIDEBAR */}
      <nav className={`glass-sidebar ${menuOpen ? 'active' : ''}`}>
        <div className="brand">Us.</div>
        <ul>
          <li onClick={() => handleNavClick("home")} className={currentPage === 'home' ? 'active-link' : ''}>🏠 Home</li>
          <li onClick={() => handleNavClick("sister")} className={currentPage === 'sister' ? 'active-link' : ''}>💌 To My Sister</li>
          <li onClick={() => handleNavClick("friend")} className={currentPage === 'friend' ? 'active-link' : ''}>✨ To My Friend</li>
          <li onClick={() => handleNavClick("media")} className={currentPage === 'media' ? 'active-link' : ''}>🎞️ Pictures & Video</li>
        </ul>
      </nav>

      <button className="menu-toggle" onClick={() => setMenuOpen(!menuOpen)}>
        {menuOpen ? '✕' : '☰'}
      </button>

      <main className="content-area">
        {currentPage === "home" && (
          <div className="glass-panel has-slideshow scroll-y">
            <div className="slideshow-wrapper">
              {slideshowImages.map((img, index) => (
                <div
                  key={index}
                  className={`slide ${index === currentImageIndex ? 'active' : ''}`}
                  style={{ backgroundImage: `url(${img})` }}
                />
              ))}
              <div className="slideshow-overlay" />
            </div>

            <div className="relative-content">
              <h1 className="hero-text">Welcome Home 🤍</h1>
              <p>This space was made just for us.</p>
              <div className="home-media">
                {renderMediaSection()}
              </div>
            </div>
          </div>
        )}

        {currentPage === "sister" && (
          <div className="glass-panel scroll-y">
            <div className="relative-content letter-container">
              <h2>To My Sister 💕</h2>
              <div className="letter-body">
                {letterToSister.map((line, index) => (
                  <p key={index} className={`letter-line delay-${index + 1}`}>
                    {line}
                  </p>
                ))}
              </div>
            </div>
          </div>
        )}

        {currentPage === "friend" && (
          <div className="glass-panel scroll-y">
            <div className="relative-content letter-container">
              <h2>To My Friend ✨</h2>
              <div className="letter-body">
                {letterToFriend.map((line, index) => (
                  <p key={index} className={`letter-line delay-${index + 1}`}>
                    {line}
                  </p>
                ))}
              </div>
            </div>
          </div>
        )}

        {currentPage === "media" && (
          <div className="glass-panel scroll-y">
            <div className="relative-content letter-container">
              {renderMediaSection()}
            </div>
          </div>
        )}
      </main>

      {/* SPOTIFY FLOATING */}
      <Draggable bounds="body">
        <div className="music-player-wrapper draggable-widget floating-spotify">
          <div className="drag-handle">⠿ Drag</div>
          <Spotify />
        </div>
      </Draggable>

      <div className="background-blobs" />
    </div>
  );
}

export default App;