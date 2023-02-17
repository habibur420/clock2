function updateTime() {
    const now = new Date();
    const hours = now.getHours();
    const minutes = now.getMinutes();
    const seconds = now.getSeconds();
    const day = now.getDate();
    const month = now.getMonth() + 1;
    const year = now.getFullYear();

    const hoursStr = hours < 10 ? `0${hours}` : `${hours}`;
    const minutesStr = minutes < 10 ? `0${minutes}` : `${minutes}`;
    const secondsStr = seconds < 10 ? `0${seconds}` : `${seconds}`;
    const dayStr = day < 10 ? `0${day}` : `${day}`;
    const monthStr = month < 10 ? `0${month}` : `${month}`;

    const hoursEl = document.querySelector('.hours');
    const minutesEl = document.querySelector('.minutes');
    const secondsEl = document.querySelector('.seconds');
    const dayEl = document.querySelector('.day');
    const monthEl = document.querySelector('.month');
    const yearEl = document.querySelector('.year');

    hoursEl.innerText = hoursStr;
    minutesEl.innerText = minutesStr;
    secondsEl.innerText = secondsStr;
    dayEl.innerText = dayStr;
    monthEl.innerText = monthStr;
    yearEl.innerText = year;
}

setInterval(updateTime, 1000);
