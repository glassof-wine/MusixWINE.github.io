const audio = document.querySelector('audio');
    const playButton = document.querySelector('.play');
    const pauseButton = document.querySelector('.pause');
    const prevButton = document.querySelector('.prev');
    const nextButton = document.querySelector('.next');
    const volumeButton = document.querySelector('.volume-button');
    const volumeSlider = document.querySelector('.volume-slider');

    playButton.addEventListener('click', () => {
        audio.play();
        playButton.style.display = 'none';
        pauseButton.style.display = 'inline-block';
    });

    pauseButton.addEventListener('click', () => {
        audio.pause();
        playButton.style.display = 'inline-block';
        pauseButton.style.display = 'none';
    });

    prevButton.addEventListener('click', () => {
        // code to go to previous song
    });

    nextButton.addEventListener('click', () => {
        // code to go to next song
    });

    volumeButton.addEventListener('click', () => {
        if (volumeSlider.style.display === 'none') {
            volumeSlider.style.display = 'inline-block';
        } else {
            volumeSlider.style.display = 'none';
        }
    });

    volumeSlider.addEventListener('input', () => {
        audio.volume = volumeSlider.value /100 ;
    });


const progressBar = document.querySelector('.progress-bar');
const progress = document.querySelector('.progress');

progressBar.addEventListener('click', (e) => {
    const percent = e.offsetX / progressBar.offsetWidth;
    audio.currentTime = percent * audio.duration;
});
