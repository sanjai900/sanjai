angular.module('analyticsApp', [])
  .controller('DashboardController', function() {
    var dashboardCtrl = this;
    dashboardCtrl.revenueData = [100, 200, 150, 300, 250];
    dashboardCtrl.userData = [50, 100, 80, 120, 90];
    var revenueChart = new Chart(document.getElementById('revenueChart'), {
      type: 'line',
      data: {
        labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May'],
        datasets: [{
          label: 'Revenue',
          data: dashboardCtrl.revenueData,
          backgroundColor: 'rgba(54, 162, 235, 0.2)',
          borderColor: 'rgba(54, 162, 235, 1)',
          borderWidth: 1
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
    var usersChart = new Chart(document.getElementById('usersChart'), {
      type: 'bar',
      data: {
        labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May'],
        datasets: [{
          label: 'Users',
          data: dashboardCtrl.userData,
          backgroundColor: 'rgba(255, 99, 132, 0.2)',
          borderColor: 'rgba(255, 99, 132, 1)',
          borderWidth: 1
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
  });
