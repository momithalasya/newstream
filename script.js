const video = document.getElementById('weddingStream');
const videoSrc = 'https://b32f55b7ad1e.ap-south-1.playback.live-video.net/api/video/v1/ap-south-1.679504361987.channel.HpxbOzzg3696.m3u8';

if (Hls.isSupported()) {
  const hls = new Hls();
  hls.loadSource(videoSrc);
  hls.attachMedia(video);
} else if (video.canPlayType('application/vnd.apple.mpegurl')) {
  video.src = videoSrc;
} else {
  console.error('HLS not supported in this browser.');

}
