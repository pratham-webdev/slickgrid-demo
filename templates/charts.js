const chartJStemplate = `<div id="chartJS" class="d-flex justify-content-between flex-wrap py-2">
<div class="position-relative" style="height:30vh; width:20vw; margin:auto;"><canvas id="myChart"></canvas></div>
<div class="position-relative" style="height:30vh; width:20vw; margin:auto;"><canvas id="myChart2"></canvas></div>
<div class="position-relative" style="height:30vh; width:25vw; margin:auto;"><canvas id="myChart3"></canvas></div>
</div>`;

$('#card-4').prepend(chartJStemplate);

// simultaneous declaration
const backgroundColors = [
    'rgba(255, 99, 132, 0.2)',
    'rgba(54, 162, 235, 0.2)',
    'rgba(255, 206, 86, 0.2)',
    'rgba(75, 192, 192, 0.2)',
    'rgba(153, 102, 255, 0.2)',
    'rgba(255, 159, 64, 0.2)'
],

borderColors = [
    'rgba(255, 99, 132, 1)',
    'rgba(54, 162, 235, 1)',
    'rgba(255, 206, 86, 1)',
    'rgba(75, 192, 192, 1)',
    'rgba(153, 102, 255, 1)',
    'rgba(255, 159, 64, 1)'
],

Dataset1 = [
    {
        name:`Fee`,
        val:8000.00,
    }
],
Dataset2 = [
    {
        name:`John Doe`,
        val:8000.00,
    },
],
Dataset3 = [
    {
        name:`E101 Copying`,
        val:2000.00,
    },
    {
        name:`E106 Online Research`,
        val:1650.00,
    },
    {
        name:`E110 Out-of-town travel`,
        val:1400.00,
    },
    {
        name:`E112 Court Fees`,
        val:1400.00,
    },
    {
        name:`E120 Private investigators`,
        val:500.00,
    },
    {
        name:`E124 Other`,
        val:1050.00,
    },
],

 chartData1=  {
    labels: Dataset1.map(el => `${el.name} : ${el.val}`),
    datasets: [{
        label: '# of Votes',
        data: Dataset1.map(el => el.val),
        backgroundColor: backgroundColors,
        borderColor: borderColors,
        borderWidth: 1
    }]
},

chartData2=  {
    labels: Dataset2.map(el => `${el.name} : ${el.val}`),
    datasets: [{
        label: '# of Votes',
        data: Dataset2.map(el => el.val),
        backgroundColor: backgroundColors,
        borderColor: borderColors,
        borderWidth: 1
    }]
},

chartData3=  {
    labels: Dataset3.map(el => `${el.name} : ${el.val}`),
    datasets: [{
        label: '# of Votes',
        data: Dataset3.map(el => el.val),
        backgroundColor: backgroundColors,
        borderColor: borderColors,
        borderWidth: 1
    }]
},

optionsChart1={
    responsive:true,
    maintainAspectRatio:false,
    plugins: {
        legend: {
          position: 'left',
        },
        title: {
          display: true,
          text: 'Total Spend by Type'
        }
      },
},
optionsChart2={
    responsive:true,
    maintainAspectRatio:false,
    plugins: {
        legend: {
          position: 'left',
        },
        title: {
          display: true,
          text: 'Total Spend by Timekeeper'
        }
      },
},
optionsChart3={
    responsive:true,
    maintainAspectRatio:false,
    plugins: {
        legend: {
          position: 'left',
        },
        title: {
          display: true,
          text: 'Total Spend by Task Code'
        }
      },
};

const ctx = document.getElementById('myChart').getContext('2d');
const myChart = new Chart(ctx, {
    type: 'pie',
    data:chartData1,
    options: optionsChart1
});

const ctx2 = document.getElementById('myChart2').getContext('2d');
const myChart2 = new Chart(ctx2, {
    type: 'pie',
    data:chartData2,
    options: optionsChart2
});

const ctx3 = document.getElementById('myChart3').getContext('2d');
const myChart3 = new Chart(ctx3, {
    type: 'pie',
    data:chartData3,
    options: optionsChart3
});