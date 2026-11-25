function toggleLightMode() {
    const body = document.getElementById('body');
    body.classList.toggle('darkMode');
}

const dateOfBirthday = new Date(2026, 11, 8);
function calcTimeBeforeBirthday() {
    const timeLeft = dateOfBirthday - new Date();
    const daysLeft = Math.floor(timeLeft / (1000 * 60 * 60 * 24));
    const hoursLeft = Math.floor((timeLeft / (1000 * 60 * 60)) % 24);
    const minutesLeft = Math.floor((timeLeft / (1000 * 60)) % 60);
    const secondsLeft = Math.floor((timeLeft / 1000) % 60);
    document.getElementById("countdown").innerHTML = `${daysLeft} days, ${hoursLeft} hours, ${minutesLeft} minutes, ${secondsLeft} seconds`;
}
calcTimeBeforeBirthday();
setInterval(calcTimeBeforeBirthday, 1000);