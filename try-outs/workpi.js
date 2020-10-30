function makeChart(ctx) {
  var gradient = ctx.createLinearGradient(0,0,0,200);
  gradient.addColorStop(0, 'rgba(248, 195, 50, 1)');
  gradient.addColorStop(1, 'rgba(253, 221, 77, 0.5)');
  var myChart = new Chart(ctx, {
      type: 'line',
      data: {
          labels: ['Q1', 'Q2', 'Q3', 'Q4'],
          datasets: [{
              label: 'Revenue',
              data: [120, 190, 90, 150],
              backgroundColor: gradient,
              borderColor: [
                  'rgb(255, 174, 0)',
                  'rgb(255, 174, 0)',
                  'rgb(255, 174, 0)',
                  'rgb(255, 174, 0)',
              ],
              pointBackgroundColor: [
                'rgb(253, 221, 77, 1)',
                'rgb(253, 221, 77, 1)',
                'rgb(253, 221, 77, 1)',
                'rgb(253, 221, 77, 1)',
            ],
              borderWidth: 1,
              fill: true,
          }]
      },
      options: {
          scales: {
              yAxes: [{
                  ticks: {
                      beginAtZero: true
                  }
              }]
          }
      }
  });
  
}

function makeChartBar(ctx) {
  var gradient = ctx.createLinearGradient(0,0,0,200);
  gradient.addColorStop(0, 'rgba(248, 195, 50, 1)');
  gradient.addColorStop(1, 'rgba(253, 221, 77, 0.5)');
  var myChart = new Chart(ctx, {
      type: 'bar',
      data: {
          labels: ['Q1', 'Q2', 'Q3', 'Q4'],
          datasets: [{
              label: 'Revenue',
              data: [120, 190, 90, 150],
              backgroundColor: gradient,
              borderColor: [
                  'rgb(255, 174, 0)',
                  'rgb(255, 174, 0)',
                  'rgb(255, 174, 0)',
                  'rgb(255, 174, 0)',
              ],
              pointBackgroundColor: [
                'rgb(253, 221, 77, 1)',
                'rgb(253, 221, 77, 1)',
                'rgb(253, 221, 77, 1)',
                'rgb(253, 221, 77, 1)',
            ],
              borderWidth: 1,
              fill: true,
          }]
      },
      options: {
          scales: {
              yAxes: [{
                  ticks: {
                      beginAtZero: true
                  }
              }]
          }
      }
  });
  
}

makeChart(document.getElementById('myChart').getContext('2d'));
makeChart(document.getElementById('myChart2').getContext('2d'));
makeChartBar(document.getElementById('myChart3').getContext('2d'));


document.querySelector('.drawer-button').addEventListener('click', (ev) => {
  document.querySelector('.drawer').classList.toggle('active');
});

document.querySelector('#settings').addEventListener('click', (ev) => {
  document.querySelector('body').classList.toggle('dark-theme');
});
