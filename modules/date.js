const myDate = document.getElementById('m-time');
const date = () => {
  window.setInterval(
    () => {
      myDate.innerHTML = `<p>${luxon.DateTime.local().toLocaleString(
        luxon.DateTime.DATETIME_MED_WITH_SECONDS,
      )}</p>`;
    },
    1000,
    this,
  );
};