import { DateTime } from "./luxon.mjs";

export const showTime = () => {
    setInterval(() => {
        let timeString = document.getElementById("m-time");
        let dt = DateTime.now();
        const date = DateTime.fromISO(dt);
        const humanReadable = date.toLocaleString(DateTime.DATETIME_MED);
        timeString.innerHTML = humanReadable;
    }, 1000);
};