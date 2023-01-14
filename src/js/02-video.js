import Player from '@vimeo/player';
import throttle from 'lodash.throttle';

const iframe = document.querySelector('iframe');
const player = new Player(iframe);
const VIDEO_CURRENT_TIME = 'videoplayer-current-time';
const savedTimeInStorage = localStorage.getItem(VIDEO_CURRENT_TIME);

player.on('timeupdate', throttle(onTimeUpdate, 1000));

player.setCurrentTime(savedTimeInStorage).catch(function (error) {
  switch (error.name) {
    case 'RangeError':
      break;
    default:
      break;
  }
});

function onTimeUpdate(currentTime) {
  localStorage.setItem(VIDEO_CURRENT_TIME, currentTime.seconds);
}
