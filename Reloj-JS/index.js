let hour = document.querySelector(".hour");
let day = document.querySelector(".day");
let date = document.querySelector(".date");



setInterval(addComponent, 1000);

function addComponent() {
    let data = new Date();
        

    hour.childNodes[0].childNodes[0].data = (data.getHours() < 10 ? "0" : "") + data.getHours();
    hour.childNodes[1].data = `:${(data.getMinutes() < 10 ? "0" : "") + data.getMinutes()}`;
    hour.childNodes[2].childNodes[0].data = `:${(data.getSeconds() < 10 ? "0" : "") + data.getSeconds()}`;

    day.childNodes[0].childNodes[0].data = getDayWeekend(data);

    date.childNodes[0].data = `${data.getDate()} de ${getNameMonth(data)} de ${data.getFullYear()}` ;
}


function getDayWeekend(data) {
    const days = [
        'Domingo',
        'Lunes',
        'Martes',
        'Miércoles',
        'Jueves',
        'Viernes',
        'Sábado',
    ];
    return days[data.getDay()];
}


function getNameMonth(data) {
    const months = [
        'Enero',
        'Febrero',
        'Marzo',
        'Abril',
        'Mayo',
        'Junio',
        'Julio',
        'Agosto',
        'Septiembre',
        'Octubre',
        'Noviembre',
        'Diciembre'
    ];

    return months[data.getMonth()];
}


