document.addEventListener('DOMContentLoaded', function () {
    var calendarEl = document.getElementById('calendar');

    var calendar = new FullCalendar.Calendar(calendarEl, {
        locale: 'pt-br',
        timeZone: 'America/Brasilia',
        initialView: 'dayGridMonth',
        initialDate: '2024-06-07',
        headerToolbar: {
            left: 'prev,next today',
            center: 'title',
            right: 'dayGridMonth,timeGridWeek,timeGridDay'
        },
        displayEventEnd: true,
        events: [
            {
                title: 'Sábado Letivo',
                start: '2024-06-01T07:30:00',
                end: '2024-06-01T11:30:00'
            },
            {
                groupId: '999',
                title: 'Reunião Coordenação',
                start: '2024-06-10T16:30:00',
            },
            {
                title: 'Conferência',
                start: '2024-06-11T16:30:00',
                end: '2024-06-13T16:30:00'
            },
            {
                title: 'Reunião',
                start: '2024-06-12T10:30:00',
                end: '2024-06-12T12:30:00'
            },
            {
                title: 'Almoço',
                start: '2024-06-12T12:00:00'
            },
            {
                title: 'Reunião',
                start: '2024-06-12T14:30:00'
            },
            {
                title: 'Recesso Junino',
                start: '2024-06-21',
                end: '2024-06-29',
                description: 'Festa Junina'
            }
        ]
    });

    calendar.render();
});