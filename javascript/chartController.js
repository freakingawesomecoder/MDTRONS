
//Line chart related changes
function lineChart(value) {

var trends = value;
var totalmigrants = "totalmigrants";
var reason = "reason";
var year = "year";
	// $.ajax({url: "http://172.29.10.226:10000/migration", success: function(result) {
	// 	console.log(result);
  //   }});


var years = _.pluck(trends, year);
var mainyears = _.uniq(years);
var reasons = _.pluck(trends, 'reason');
var mainreasons = _.uniq(reasons);
var datashare = [];
for (var i = 0; i < mainreasons.length; i++) {

	var reasonCat = _.filter(trends, { 'reason': mainreasons[i] });
		var obj = {};
		obj.data =  _.pluck(reasonCat, 'totalmigrants');
		obj.label = mainreasons[i];
		obj.borderColor =  getRandomColor();
		obj.fill=  false;
		datashare.push(obj);
	}


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
		    labels: mainyears,
		    datasets: datashare
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
function getRandomColor() {
		  var letters = '0123456789ABCDEF';
		  var color = '#';
		  for (var i = 0; i < 6; i++) {
		    color += letters[Math.floor(Math.random() * 16)];
		  }
		  return color;
		}
function serviceCall() {
		// $.ajax({url: "http://172.29.10.226:10000/migration", success: function(result) {
		// 	console.log(result);
	  //   }});



			var xmlhttp = new XMLHttpRequest();
			var url = "http://ec2-34-216-21-144.us-west-2.compute.amazonaws.com:10000";

	xmlhttp.onreadystatechange = function() {
	    if (this.readyState == 4 && this.status == 200) {
	        var myArr = JSON.parse(this.responseText);
					lineChart(myArr);
	    }
	};
	xmlhttp.open("GET", url, true);
xmlhttp.send();
}
