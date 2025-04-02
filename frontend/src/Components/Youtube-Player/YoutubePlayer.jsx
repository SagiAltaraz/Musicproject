import React, { useEffect, useRef } from 'react';

function YouTubePlayer({ videoId, isPlaying, onTimeUpdate, onEnd }) {
  const playerRef = useRef(null);
  const playerInstanceRef = useRef(null);

  useEffect(() => {
    if (!window.YT) {
      const tag = document.createElement('script');
      tag.src = 'https://www.youtube.com/iframe_api';
      const firstScriptTag = document.getElementsByTagName('script')[0];
      firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);

      window.onYouTubeIframeAPIReady = initializePlayer;
    } else {
      initializePlayer();
    }

    return () => {
      if (playerInstanceRef.current) {
        playerInstanceRef.current.destroy();
      }
    };
  }, [videoId]);

  useEffect(() => {
    if (playerInstanceRef.current) {
      isPlaying ? playerInstanceRef.current.playVideo() : playerInstanceRef.current.pauseVideo();
    }
  }, [isPlaying]);

  const initializePlayer = () => {
    if (!videoId) return;

    if (playerInstanceRef.current) {
      playerInstanceRef.current.destroy();
    }

    playerInstanceRef.current = new window.YT.Player(playerRef.current, {
      height: '0',
      width: '0',
      videoId,
      playerVars: { autoplay: isPlaying ? 1 : 0, controls: 0, disablekb: 1 },
      events: {
        onStateChange: onPlayerStateChange,
        onReady: onPlayerReady,
      },
    });
  };

  const onPlayerReady = () => {
    setInterval(() => {
      if (playerInstanceRef.current && onTimeUpdate) {
        const currentTime = playerInstanceRef.current.getCurrentTime();
        const duration = playerInstanceRef.current.getDuration();
        onTimeUpdate(currentTime, duration);
      }
    }, 1000);
  };

  const onPlayerStateChange = (event) => {
    if (event.data === window.YT.PlayerState.ENDED && onEnd) {
      onEnd();
    }
  };

  return <div ref={playerRef}></div>;
}

export default YouTubePlayer;
