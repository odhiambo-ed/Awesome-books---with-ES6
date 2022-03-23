/* eslint-disable import/prefer-default-export */
import { DateTime } from './luxon.js';

export default () => {
  setInterval(() => {
    const timeString = document.getElementById('m-time');
    const dt = DateTime.now();
    const date = DateTime.fromISO(dt);
    const humanReadable = date.toLocaleString(DateTime.DATETIME_MED);
    timeString.innerHTML = humanReadable;
  }, 1000);
};