$(function() {
  if($("#morris-pop-chart").length!=0){
    Morris.Area({
        element: 'morris-pop-chart',
        data: [{
            period: 'March 2014',
            intevention: 28,
            highrisk: 34,
            improve: 129,
            dec: 23,
            stable: 210
        }, {
            period: 'April 2014',
            intevention: 32,
            highrisk: 43,
            improve: 140,
            dec: 20,
            stable: 188
        }, {
            period: 'May 2014',
            intevention: 40,
            highrisk: 12,
            improve: 123,
            dec: 18,
            stable: 199
        }, {
            period: 'June 2014',
            intevention: 21,
            highrisk: 16,
            improve: 155,
            dec: 32,
            stable: 97
        }, {
            period: 'July 2014',
            intevention: 33,
            highrisk: 43,
            improve: 97,
            dec: 40,
            stable: 200
        }, {
            period: 'August 2014',
            intevention: 24,
            highrisk: 55,
            improve: 87,
            dec: 13,
            stable: 207
        }, {
            period: 'September 2014',
            intevention: 23,
            highrisk: 47,
            improve: 133,
            dec: 18,
            stable: 203
        }],
        xkey: 'period',
        ykeys: ['intevention', 'highrisk', 'improve', 'dec', 'stable'],
        labels: ['Intervention', 'High Risk', 'Improvement', 'Declining', 'Stable'],
        pointSize: 2,
        parseTime:false,
        lineColors: ['#d9534f', '#f0ad4e', '#5cb85c', "#337ab7", "#E0E0E0"],
        hideHover: 'auto',
        resize: true
    });
  }
});
