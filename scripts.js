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