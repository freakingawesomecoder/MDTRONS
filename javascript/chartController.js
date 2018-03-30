
//Line chart related changes
function lineChart() {
	var myObj1 = [{
		'year':1990,
		'reason':"Agriculture based",
		'totalmigrants': 86
	},{
		'year':1991,
		'reason':"Agriculture based",
		'totalmigrants': 114
	},{
		'year':1992,
		'reason':"Agriculture based",
		'totalmigrants': 106
	},{
		'year':1994,
		'reason':"Agriculture based",
		'totalmigrants': 106
	},{
		'year':1990,
		'reason':"Fishing based",
		'totalmigrants': 282
	},{
		'year':1991,
		'reason':"Fishing based",
		'totalmigrants': 350
	},{
		'year':1992,
		'reason':"Fishing based",
		'totalmigrants': 411
	},{
		'year':1994,
		'reason':"Fishing based",
		'totalmigrants': 502
	}];
var years = _.pluck(myObj1, 'year');
var mainyears = _.uniq(years);
var reasons = _.pluck(myObj1, 'reason');
var mainreasons = _.uniq(reasons);
var datashare = [];
for (var i = 0; i < mainreasons.length; i++) {

	var reasonCat = _.filter(myObj1, { 'reason': mainreasons[i] });
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
		text: 'Migration Trends'
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


$(document).ready(function(){
    lineChart();
		pieChart();
		// var myKey1 = "1050";
		// var myKey2 = "1051";
		//
		// line chart list of object
		// var myObj1 = {
		// 	year
		// 	Reason
		// 	total migrants for that Reason
		//
		// };
		//
		// var map = new Object(); // or var map = {};
		// map[myKey1] = myObj1;
		// map[myKey2] = myObj2;
});
