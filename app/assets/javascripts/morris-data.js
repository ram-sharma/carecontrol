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
              a: 2
          }, {
              y: 'April 2014',
              a: 3
          }, {
              y: 'May 2014',
              a: 5
          }, {
              y: 'June 2014',
              a: 4
          }, {
              y: 'July 2014',
              a: 5
          }, {
              y: 'August 2014',
              a: 7
          }, {
              y: 'September 2014',
              a: 3
          }],
          xkey: 'y',
          ykeys: ['a'],
          labels: ['Engagement'],
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
              b: 50
          }, {
              y: '2012-03-17',
              a: 284,
              b: 45
          }, {
              y: '2012-03-18',
              a: 239,
              b: 55
          }, {
              y: '2012-03-20',
              a: 300,
              b: 60
          }, {
              y: '2012-03-21',
              a: 238,
              b: 53
          }, {
              y: '2012-03-25',
              a: 259,
              b: 59
          }, {
              y: '2012-03-30',
              a: 300,
              b: 68
          }],
          lineColors: [
            '#f0ad4e',
            '#5cb85c',
            '#d9534f'
          ],
          xkey: 'y',
          ykeys: ['a', 'b'],
          labels: ['Active Index', 'Risk Score'],
          hideHover: 'auto',
          resize: true
      });
  }
});
