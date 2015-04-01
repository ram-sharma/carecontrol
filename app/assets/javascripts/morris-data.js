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
});
