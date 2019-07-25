
function drawChart () {
  var startDate = document.getElementById('start-date').value;
  var endDate = document.getElementById('end-date').value;
  var rawData = [];
  var currentData = [];
  var labels = [];
  var errMsg = document.getElementById("error-message");

  // if (startDate < endDate) {

  //   if (errMsg.style.display === "block") {
  //     errMsg.style.display = "none";
  //   }

   axios.get(`https://api.coindesk.com/v1/bpi/historical/close.json?start=${startDate}&end=${endDate}`)
    .then((response) => {
      console.log(response.data);
      rawData = { ...response.data.bpi }
      currentData = Object.keys(rawData).map(key => rawData[key]);
      labels = Object.keys(rawData);
      })
    .then(() => {
      var ctx = document.getElementById('myChart').getContext('2d');
      var myChart = new Chart(ctx, {
        type: 'line',
        data: {
          labels: labels,
          datasets: [{
            label: "Bitcoin",
            data: currentData,
            borderColor: "#cf9f25",
            pointHoverBackgroundColor: "#8cbd5b",
            pointHoverBorderColor: "#616161",
            pointHoverRadius: 6,
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
    })
  // } else {
  //   if (errMsg.style.display === "none") {
  //     errMsg.style.display = "block";
  //   }
  // }
  
}


document.addEventListener("DOMContentLoaded", function(event) {

  var date = new Date();
  var dd = String(date.getDate()).padStart(2, '0');
  var mm = String(date.getMonth() + 1).padStart(2, '0');
  var yyyy = date.getFullYear();
  var today = yyyy + '-' + mm + '-' + dd;
  var yesterday = yyyy + '-' + mm + '-' + (dd-7);

  document.getElementById('start-date').value = yesterday;
  document.getElementById('end-date').value = today;

  drawChart();
});
