const chart = document.getElementById('my-chart')
var myChart = new Chart(chart, 
    {
        type: 'line',
        data: {
          labels: ['week1','week2','week3','week4','week5'],
          datasets: [{
            label: 'Your achievement',
            yAxisID: 'y',
            data: [13000,12000,11000,10000,12000],
            borderColor: '#C83B53',
            backgroundColor: '#C83B53',
            tension:0.5,
          }, {
            label: 'Scalet Johnson',
            data: [11000,12000,13000,10000,11000],
            borderColor: '#4DFFDF',
            backgroundColor: '#4DFFDF',
            tension:0.5,
          }
        ]
        },
        options: {
          scales: {
            y: {
                type: 'linear',
                display: true,
                position: 'left',
                ticks: {
                   font: {
                        size:6
                    }
                },
                grid:{
                    drawOnChartArea : true,
                  }
              }, 
          },
          plugins: {
            legend: {
              labels: {
                fontSize: 6 // set the font size of the legend labels
              }
            }
          }
        }
      }
    )

