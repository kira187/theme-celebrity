
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

function musicPlayer() {
    let audio = document.getElementById("song");
    let btnPlayer = document.getElementById("btn-player");
    
    if (audio.currentTime === 0 ) {
        btnPlayer.innerHTML = '<img src="./img/musica-on.gif">';
        audio.play();
    } else if(audio.paused && audio.currentTime > 0 && !audio.ended) {
        btnPlayer.innerHTML = '<img src="./img/musica-on.gif">';
        audio.play();
    } else {
        btnPlayer.innerHTML = '<i class="bx bx-play-circle bx-md"></i>';
        audio.pause();
     }
}

window.addEventListener('scroll', () => {
    let btnPlayer = document.getElementById("btn-player");

    if (window.scrollY > 100) {
      btnPlayer.classList.add('mostrar');
    } else {
      btnPlayer.classList.remove('mostrar');
    }
});

// Confirm form
$('#confirm-form').submit(function (event) {
    event.preventDefault();
    const name = $('input').first().val();
    const text = `Confirmo mi asistencia a la fiesta de Ximena Sophie - Invitado: ${name}`;
    const phoneNumber = '5213320836251';
    const url = 'https://api.whatsapp.com/send?phone=' + phoneNumber + '&text=' + text;
    window.open(url, '_blank');
});

Swal.fire({
    title: 'Bienvenido!',
    text: 'A la invitacion de Ximena Sophie',
    confirmButtonColor: '#C1121F',
    confirmButtonText: 'Ingresar',
    allowOutsideClick: false,
    background: '#f3f4f6',
    backdrop: `rgba(0, 0, 0, 0.8)`,
    customClass: {
        title: 'title-class',
        confirmButton: 'btn-confirm-swall'
    },
    showClass: {
        popup: 'animate__animated animate__zoomIn',
    },
    hideClass: {
        popup: 'animate__animated animate__zoomOut',
    }
  }).then((result) => {
    if (result.isConfirmed) {
      musicPlayer();
    }
  })

const sr = ScrollReveal({
	origin: 'top',
	duration: 2500,
})

sr.reveal(`.agradecimiento`, { origin: 'bottom',duration: 2000, distance: '50%',delay: 0 });
sr.reveal(`.icon-invitation`, { origin: 'bottom',duration: 2000, distance: '50%',delay: 500 });
sr.reveal('.appreciate-presence', { origin: 'bottom',duration: 2000, distance: '50%',delay: 1000 });

sr.reveal('.section_family', { origin: 'bottom',duration: 2000 });
sr.reveal('.section_ceremonia_detail', { origin: 'right',duration: 4000 });
sr.reveal('.section_ceremonia_img', { origin: 'rigt',duration: 2000 });
sr.reveal('.section_recepcion', { origin: 'left',duration: 2000 });


sr.reveal('.section_galery', { origin: 'top',duration: 2000 });
sr.reveal('.galery_item_1', {scale: 0.85});
sr.reveal('.galery_item_2', {scale: 0.85, delay: 250});
sr.reveal('.galery_item_3', {scale: 0.85, delay: 500});
sr.reveal('.galery_item_4', {scale: 0.85, delay: 750});
sr.reveal('.galery_item_5', {scale: 0.85, delay: 900});
sr.reveal('.galery_item_6', {scale: 0.85, delay: 950});

sr.reveal('.section_mesa_regalos');
sr.reveal('.section_confirmation',{ origin: 'bottom',duration: 2000 });