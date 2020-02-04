const audio = document.querySelector('audio');
const links = Array.from(document.querySelectorAll('.sidebar__middle-menu-item'));

const AUDIO_LINK = audio.src;

links.forEach(link => {
  link.addEventListener('mouseover', () => {
    audio.src = '';
    audio.src = AUDIO_LINK;
    audio.play()
  })
})
