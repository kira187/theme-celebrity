
// Countdown 

const SECOND = 1000;
const MINUTE = 60 * SECOND;
const HOUR = 60 * MINUTE;
const DAY = 24 * HOUR

function addZero(number) {
  if ( number < 10 )
      return "0"+number;
  else
      return number;
}

setInterval(() => {
    let diff = Date.parse("2023-05-12 17:30:00") - Date.now();
    const days = addZero(Math.floor(diff / DAY));
    diff -= days * DAY;
    const hours = addZero(Math.floor(diff / HOUR));
    diff -= hours * HOUR;
    const mins = addZero(Math.floor(diff / MINUTE));
    diff -= mins * MINUTE;
    const secs = addZero(Math.floor(diff / SECOND));
    document.querySelector("#timer").innerHTML = `
        <div class="timer-item-card">
            <div> ${days} <span> Dias</span> </div>
        </div>
        <div class="timer-item-card">
            <div> ${hours} <span> Horas</span> </div>
        </div>
        <div class="timer-item-card">
            <div> ${mins} <span> Minutos </span> </div>
        </div>
        <div class="timer-item-card">
            <div> ${secs} <span> Segundos </span> </div>
        </div>`;
}, SECOND);

// Music player
$( document ).ready(function() {

    $("#sonidoMusicaOff").click(function() {
        var audio = document.getElementById("musica");
        $("#sonidoMusicaOn").removeClass( "hidden" );
        $("#sonidoMusicaOff").addClass( "hidden" );
        audio.play(); // without this line it's not working although I have "muted" in HTML
    });

    $("#sonidoMusicaOn").click(function() {
        var audio = document.getElementById("musica");
        $("#sonidoMusicaOff").removeClass( "hidden" );
        $("#sonidoMusicaOn").addClass( "hidden" );
        audio.pause(); // without this line it's not working although I have "muted" in HTML
    });
});

// Confirm form
$('#confirm-form').submit(function (event) {
    event.preventDefault();
    const name = $('input').first().val();
    const text = `Confirmo mi asistencia a la fiesta de Sophie - Invitado: ${name}`;
    const phoneNumber = '5213320836251';
    const url = 'https://api.whatsapp.com/send?phone=' + phoneNumber + '&text=' + text;
    window.open(url, '_blank');
});
