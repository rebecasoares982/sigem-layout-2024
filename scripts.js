google.charts.load('current', {'packages':['corechart']});
google.charts.setOnLoadCallback(drawChart);

function drawChart() {
    var data = google.visualization.arrayToDataTable([
        [' ', ' ', { role: 'style' }],
        ['Professores', 95, 'color: #6ADBB9'], // Verde
        ['Psicologos', 65, 'color: #F1B34C'], // Amarelo
        ['Coordenador', 3, 'color: #F03838'], // Roxo
        ['Diretor', 1, 'color: #6E6B97'] // Vermelho
    ]);

    var options = {
         hAxis: { title: ' ' },
        vAxis: { title: ' ' },
        legend: 'none'
    };

    var chart = new google.visualization.BarChart(document.getElementById('barchart_values'));
    chart.draw(data, options);
}