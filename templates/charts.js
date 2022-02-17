const chartJStemplate = `<div id="chartJS" class="d-flex justify-content-between flex-wrap py-2"><canvas id="myChart" width="360" height="360"></canvas><canvas id="myChart2" width="360" height="360"></canvas><canvas id="myChart3" width="360" height="360"></canvas></div>`;

$('#card-4').prepend(chartJStemplate);

const chartLabels = [
    {
        name:'Red',
        val:12,
    },
    {
        name:'Blue',
        val:19,
    },{
        name:'Yellow',
        val:3,
    },{
        name:'Green',
        val:5,
    },{
        name:'Purple',
        val:2,
    },{
        name:'Orange',
        val:3,
    },
];

const dataChart =  {
    labels: chartLabels.map(el => `${el.name} : ${el.val}`),
    datasets: [{
        label: '# of Votes',
        data: chartLabels.map(el => el.val),
        backgroundColor: [
            'rgba(255, 99, 132, 0.2)',
            'rgba(54, 162, 235, 0.2)',
            'rgba(255, 206, 86, 0.2)',
            'rgba(75, 192, 192, 0.2)',
            'rgba(153, 102, 255, 0.2)',
            'rgba(255, 159, 64, 0.2)'
        ],
        borderColor: [
            'rgba(255, 99, 132, 1)',
            'rgba(54, 162, 235, 1)',
            'rgba(255, 206, 86, 1)',
            'rgba(75, 192, 192, 1)',
            'rgba(153, 102, 255, 1)',
            'rgba(255, 159, 64, 1)'
        ],
        borderWidth: 1
    }]
};

const optionsChart={
    responsive:false,
    maintainAspectRatio:true,
    plugins: {
        legend: {
          position: 'right',
        },
        title: {
          display: true,
          text: 'Charts Title'
        }
      },
};

const ctx = document.getElementById('myChart').getContext('2d');
const myChart = new Chart(ctx, {
    type: 'pie',
    data:dataChart,
    options: optionsChart
});

const ctx2 = document.getElementById('myChart2').getContext('2d');
const myChart2 = new Chart(ctx2, {
    type: 'pie',
    data:dataChart,
    options: optionsChart
});

const ctx3 = document.getElementById('myChart3').getContext('2d');
const myChart3 = new Chart(ctx3, {
    type: 'pie',
    data:dataChart,
    options: optionsChart
});