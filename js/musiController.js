window.addEventListener('load', function (event) {
    var gameMusic = document.getElementById('gameMusic');
    var playMusicBtn = document.getElementById('playMusicBtn');
    var pauseMusicBtn = document.getElementById('pauseMusicBtn');
  
    function playGameMusic() {
      gameMusic.play();
    }
  
    function pauseGameMusic() {
      gameMusic.pause();
    }
  
    playMusicBtn.addEventListener('click', playGameMusic);
    pauseMusicBtn.addEventListener('click', pauseGameMusic);
  });
  