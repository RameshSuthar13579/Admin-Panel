var options = {
    series: [
    {
      name: 'This Week',
      group: 'budget',
      data: [44000, 55000, 41000, 67000, 22000, 43000,55000]
    },
    {
      name: 'Last Week',
      group: 'actual',
      data: [48000, 50000, 40000, 65000, 25000, 40000,60000]
    }
  ],
    chart: {
    type: 'bar',
    height: 350,
    stacked: true,
  },
  stroke: {
    width: 1,
    colors: ['#fff']
  },
  dataLabels: {
    formatter: (val) => {
      return val / 1000 + 'K'
    }
  },
  plotOptions: {
    bar: {
      horizontal: false
    }
  },
  xaxis: {
    categories: [
      'Monday',
      'Tuesday',
      'Wednesday',
      'Thursday',
      'Friday',
      'Saturday',
      'Sunday'
    ]
  },
  fill: {
    opacity: 1
  },
  colors: ['#80c7fd', '#008FFB', '#80f1cb', '#00E396'],
  yaxis: {
    labels: {
      formatter: (val) => {
        return val / 1000 + 'K'
      }
    }
  },
  legend: {
    position: 'top',
    horizontalAlign: 'left'
  }
  };

  var chart = new ApexCharts(document.querySelector("#bar-chart"), options);
  chart.render();


