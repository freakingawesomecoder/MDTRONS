
//Line chart related changes
function myChart() {

	var line = document.getElementById("line-chart");
	line.style.width = '500px';
	line.style.height = '250px';
	new Chart(line, {
		  type: 'line',
		  data: {
		    labels: [1500,1600,1700,1750],
		    datasets: [{
		        data: [86,114,106,106],
		        label: "Karthi",
		        borderColor: "#3e95cd",
		        fill: false
		      }, {
		        data: [282,350,411,502],
		        label: "Asia",
		        borderColor: "#8e5ea2",
		        fill: false
		      }, {
		        data: [168,170,178,190],
		        label: "Europe",
		        borderColor: "#3cba9f",
		        fill: false
		      }, {
		        data: [40,20,10,16],
		        label: "Latin America",
		        borderColor: "#e8c3b9",
		        fill: false
		      }
		    ]
		  },
		  options: {
			  responsive: false,
		    title: {
		      display: true,
		      text: 'World population per region'
		    }
		  }
		});
    };
  myChart();
