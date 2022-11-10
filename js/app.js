const endDate = "4 January 2023 12:00 AM"

document.getElementById("end-date").innerText = endDate;

const inputs = document.querySelectorAll("input")

const clock = ()=> {
    const now = new Date()
    const end = new Date(endDate)
    const diff = (end - now) / 1000;

    if (diff < 0) return;

    const dayDiff = Math.floor(diff / 3600 / 24);
    const hourDiff = Math.floor(diff / 3600) % 24;
    const minuteDiff = Math.floor(diff / 60) % 60;
    const secondDiff = Math.floor(diff) % 60;

    inputs[0].value = dayDiff;
    inputs[1].value = hourDiff;
    inputs[2].value = minuteDiff;
    inputs[3].value = secondDiff;

}

clock()

setInterval( ()=> {
    clock()
} ,1000)