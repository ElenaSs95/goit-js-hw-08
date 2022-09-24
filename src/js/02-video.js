import Player from '@vimeo/player';
import throttle from 'lodash.throttle';

const STORAGE_KEY = 'videoplayer-current-time';

const iframe = document.querySelector('iframe');
const player = new Player(iframe);
const myStorage = localStorage.getItem(STORAGE_KEY);

if (myStorage) player.setCurrentTime(myStorage);

player.on('timeupdate', throttle(onPlayTimeUpdate, 1000));

function onPlayTimeUpdate(time) {
  localStorage.setItem(STORAGE_KEY, time.seconds);
}
