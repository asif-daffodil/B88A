const time = document.querySelector('.time');
const date = document.querySelector('.date');

function updateTime() {
    const now = new Date();
    const hours = now.getHours();
    const minutes = now.getMinutes();
    const seconds = now.getSeconds();

    const formattedTime = `${hours.toString().padStart(2, '0')}:${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`;
    time.textContent = formattedTime;
}

function updateDate() {
    const now = new Date();
    const day = now.getDate();
    const month = now.toLocaleDateString('default', { month: 'long' });
    const year = now.getFullYear();

    const formattedDate = `${day.toString().padStart(2, '0')}/${month}/${year}`;
    date.textContent = formattedDate;
}

setInterval(updateTime, 1000);
setInterval(updateDate, 1000);