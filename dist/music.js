const ap = new APlayer
  ({
    container: document.getElementById('aplayer'),
    fixed: true,
    autoplay: false,
    audio:
      [
        {
          name: 'Tojita Sekai',
          artist: 'かめりあ',
          url: 'http://music.163.com/song/media/outer/url?id=1336689106.mp3',
          cover: 'https://cdn.jsdelivr.net/gh/nenood/pic_for_blogs@main/img/tojitasekai.jpg',
        }
      ]
  });