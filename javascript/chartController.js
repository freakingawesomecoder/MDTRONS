
//Line chart related changes
function lineChart() {

var optionset = {
	responsive: false,
	title: {
		display: true,
		text: 'World population per region'
	}
};

	var line = document.getElementById("line-chart");
	line.style.width = '500px';
	line.style.height = '250px';
	new Chart(line, {
		  type: 'line',
		  data: {
		    labels: [1500,1600,1700,1750],
		    datasets: [{
		        data: [86,114,106,106],
		        label: "Africa",
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
		  options: optionset
		});
  };

	function pieChart() {
		var optionset = {
			responsive: false,
			title: {
				display: true,
				text: 'Migration details'
			}
		};
			var pie = document.getElementById("pie-chart");
			pie.style.width = '500px';
			pie.style.height = '250px';
			// For a pie chart
			var datas = {
			datasets: [{
		        backgroundColor: [
		            pattern.draw('square', '#ff6384'),
								pattern.draw('circle', '#36a2eb'),
								pattern.draw('diamond', '#cc65fe')
		        ],
					data: [10, 20, 30]
			}],

			labels: [
				// These labels appear in the legend and in the tooltips when hovering different arcs
					'Red',
					'Yellow',
					'Blue'
			]
		};
			var myPieChart = new Chart(pie, {
			    type: 'pie',
			    data: datas,
			    options: optionset
			});
	  };

$(document).ready(function(){
    lineChart();
		pieChart();
});
