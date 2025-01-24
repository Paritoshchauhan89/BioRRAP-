    'use strict';

      document.addEventListener('DOMContentLoaded', () => {
        // Initialize the carousel
        const carouselElement = document.querySelector(
    '#carouselExampleCaptions'
    );
    const playPauseButton = document.querySelector('#carouselPlayPause');
    const playPauseIcon = document.querySelector('#carouselPlayPauseIcon');

    if (!carouselElement || !playPauseButton || !playPauseIcon) {
        console.error('Required elements for the carousel are missing.');
    return;
        }

    const carouselInstance = new bootstrap.Carousel(carouselElement, {
        interval: 5000, // Set the interval for autoplay (5 seconds here)
        });

    // State to track if the carousel is playing
    let isPlaying = true;

        // Play/Pause button functionality
        playPauseButton.addEventListener('click', () => {
          if (isPlaying) {
        carouselInstance.pause();
    playPauseIcon.classList.remove('bi-pause-fill');
    playPauseIcon.classList.add('bi-play-fill');
          } else {
        carouselInstance.cycle();
    playPauseIcon.classList.remove('bi-play-fill');
    playPauseIcon.classList.add('bi-pause-fill');
          }
    isPlaying = !isPlaying; // Toggle play/pause state
        });
      });