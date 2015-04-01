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
});
