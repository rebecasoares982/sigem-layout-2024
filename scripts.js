//gráfico dashboard
google.charts.load('current', { 'packages': ['corechart'] });
google.charts.setOnLoadCallback(drawChart);

function drawChart() {
    var data = google.visualization.arrayToDataTable([
        [' ', ' ', { role: 'style' }],
        ['Professores', 95, 'color: #F1B34C'],
        ['Alunos', 350, 'color: #6ADBB9'],
        ['Coordenador', 2, 'color: #F03838'],
        ['Diretor', 1, 'color: #6E6B97']
    ]);

    var options = {
        hAxis: { title: ' ' },
        vAxis: { title: ' ' },
        legend: 'none'
    };

    var chart = new google.visualization.BarChart(document.getElementById('barchart_values'));
    chart.draw(data, options);
}

//dropdown icones mensagem e notificação
$(document).ready(function () {
    $('.icon-container').on('click', function () {
        $(this).toggleClass('show');
        $(this).find('.dropdown-menu').toggleClass('show');
    });

    $(document).on('click', function (e) {
        if (!$(e.target).closest('.icon-container').length) {
            $('.icon-container .dropdown-menu').removeClass('show');
            $('.icon-container').removeClass('show');
        }
    });
});

//dropdown perfil
$(document).ready(function () {
    $('#profileDropdown .dropdown-toggle').on('click', function () {
        var $dropdownMenu = $(this).closest('#profileDropdown').find('.dropdown-menu');
        $dropdownMenu.toggleClass('show');
    });

    $(document).on('click', function (e) {
        if (!$(e.target).closest('#profileDropdown').length) {
            $('#profileDropdown .dropdown-menu').removeClass('show');
        }
    });
});
 
//Link ativo
document.addEventListener('DOMContentLoaded', function () {
    const navLinks = document.querySelectorAll('.nav-link');

    navLinks.forEach(link => {
        link.addEventListener('click', function () {
            // Remove a classe 'active' de todos os links
            navLinks.forEach(link => link.classList.remove('active'));

            // Adiciona a classe 'active' ao link clicado
            this.classList.add('active');
        });
    });

    // Manter o link ativo ao recarregar a página
    const currentPath = window.location.pathname;
    navLinks.forEach(link => {
        if (link.getAttribute('href') === currentPath) {
            link.classList.add('active');
        }
    });
});
 
//FullCalendar - Agenda
document.addEventListener('DOMContentLoaded', function() {
    var calendarEl = document.getElementById('calendar');
    var calendar = new FullCalendar.Calendar(calendarEl, {
        initialView: 'dayGridMonth',
        headerToolbar: {
            left: 'prev,next today',
            center: 'title',
            right: 'dayGridMonth,timeGridWeek,timeGridDay'
        },
        events: [
            {
                title: 'Evento 1',
                start: '2024-06-01'
            },
            {
                title: 'Evento 2',
                start: '2024-06-05',
                end: '2024-06-07'
            }
        ],
        dateClick: function(info) {
            alert('Data: ' + info.dateStr);
        }
    });
    calendar.render();
});
