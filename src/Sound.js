class Sound {
  constructor() {
    this.sound = document.createElement('audio');
    this.sound.setAttribute('preload', 'auto');
    this.sound.setAttribute('controls', 'none');
    this.sound.style.display = 'none';
    document.body.appendChild(this.sound);
  }
  init(src) {
    this.sound.src = src;
    this.sound.play();
  }
  play() {
    this.sound.play();
  }
  stop() {
    this.sound.pause();
  }
}