$(function() {
  if($("#morris-team-management").length!=0){
    Morris.Donut({
        element: 'morris-team-management',
        data: [{
            label: "Overloaded",
            value: 8
        }, {
            label: "Fully Loaded",
            value: 4
        }, {
            label: "Available",
            value: 2
        }],
        colors: [
          '#d9534f',
          '#f0ad4e',
          '#5cb85c'
        ],
        resize: true
    });
  }
  if($("#morris-patient-engagement").length!=0){
    Morris.Bar({
          element: 'morris-patient-engagement',
          data: [{
              y: 'March 2014',
              a: 100,
              b: 90
          }, {
              y: 'April 2014',
              a: 75,
              b: 65
          }, {
              y: 'May 2014',
              a: 50,
              b: 40
          }, {
              y: 'June 2014',
              a: 75,
              b: 65
          }, {
              y: 'July 2014',
              a: 50,
              b: 40
          }, {
              y: 'August 2014',
              a: 75,
              b: 65
          }, {
              y: 'September 2014',
              a: 100,
              b: 90
          }],
          xkey: 'y',
          ykeys: ['a', 'b'],
          labels: ['Engaged', 'Disengaged'],
          hideHover: 'auto',
          resize: true
      });
  }
  if($("#morris-single-patient-engagement").length!=0){
    Morris.Bar({
          element: 'morris-single-patient-engagement',
          data: [{
              y: 'March 2014',
              a: 2,
              b: 0
          }, {
              y: 'April 2014',
              a: 3,
              b: 0
          }, {
              y: 'May 2014',
              a: 5,
              b: 0
          }, {
              y: 'June 2014',
              a: 4,
              b: 0
          }, {
              y: 'July 2014',
              a: 5,
              b: 0
          }, {
              y: 'August 2014',
              a: 7,
              b: 1
          }, {
              y: 'September 2014',
              a: 3,
              b: 0
          }],
          xkey: 'y',
          ykeys: ['a', 'b'],
          barColors: [
            '#337ab7',
            '#d9534f'
          ],
          labels: ['Engagements', 'Interventions'],
          hideHover: 'auto',
          resize: true
      });
  }
  if($("#morris-single-patient-data-vitals").length!=0){
    Morris.Line({
          element: 'morris-single-patient-data-vitals',
          data: [{
              y: '2012-03-15',
              a: 200,
              b: 50,
              c: 150,
              d: 84
          }, {
              y: '2012-03-17',
              a: 284,
              b: 45,
              c: 140,
              d: 78
          }, {
              y: '2012-03-18',
              a: 239,
              b: 55,
              c: 155,
              d: 83
          }, {
              y: '2012-03-20',
              a: 300,
              b: 60,
              c: 150,
              d: 92
          }, {
              y: '2012-03-21',
              a: 238,
              b: 53,
              c: 140,
              d: 90
          }, {
              y: '2012-03-25',
              a: 259,
              b: 59,
              c: 130,
              d: 96
          }, {
              y: '2012-03-30',
              a: 300,
              b: 68,
              c: 125,
              d: 98
          }],
          lineColors: [
            '#f0ad4e',
            '#5cb85c',
            '#d9534f',
            '#337ab7'
          ],
          xkey: 'y',
          ykeys: ['a', 'b', 'c', 'd'],
          labels: ['Active Index', 'Risk Score', 'Health Score', 'Engagement Score'],
          hideHover: 'auto',
          resize: true
      });
  }
});
