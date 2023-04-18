setInterval(() => {
    const hour = document.getElementById("hour");
    const minute = document.getElementById("minute");
    const second = document.getElementById("second");
    date = new Date();
    hTime = date.getHours();
    mTime = date.getMinutes();
    sTime = date.getSeconds();
    const hRotation = (30 * hTime) + (mTime / 2);
    const mRotation = 6 * mTime;
    const sRotation = 6 * sTime;
    console.log(sRotation)

    hour.style.transform = `rotate(${hRotation}deg)`;
    minute.style.transform = `rotate(${mRotation}deg)`;
    second.style.transform = `rotate(${sRotation}deg)`;

}, 1000);