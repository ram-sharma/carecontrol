$(function() {

    Morris.Area({
        element: 'morris-pop-chart',
        data: [{
            period: 'March 2014',
            intevention: 28,
            highrisk: 34,
            improve: 129
        }, {
            period: 'April 2014',
            intevention: 32,
            highrisk: 43,
            improve: 140
        }, {
            period: 'May 2014',
            intevention: 40,
            highrisk: 12,
            improve: 123
        }, {
            period: 'June 2014',
            intevention: 21,
            highrisk: 16,
            improve: 155
        }, {
            period: 'July 2014',
            intevention: 33,
            highrisk: 43,
            improve: 97
        }, {
            period: 'August 2014',
            intevention: 24,
            highrisk: 55,
            improve: 87
        }, {
            period: 'September 2014',
            intevention: 23,
            highrisk: 47,
            improve: 133
        }],
        xkey: 'period',
        ykeys: ['intevention', 'highrisk', 'improve'],
        labels: ['Intervention', 'High Risk', 'Improvement'],
        pointSize: 2,
        parseTime:false,
        lineColors: ['#d9534f', '#f0ad4e', '#5cb85c'],
        hideHover: 'auto',
        resize: true
    });

    Morris.Donut({
        element: 'morris-team-management',
        data: [{
            label: "Overloaded",
            value: 5
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

    // Morris.Bar({
    //     element: 'morris-bar-chart',
    //     data: [{
    //         y: '2006',
    //         a: 100,
    //         b: 90
    //     }, {
    //         y: '2007',
    //         a: 75,
    //         b: 65
    //     }, {
    //         y: '2008',
    //         a: 50,
    //         b: 40
    //     }, {
    //         y: '2009',
    //         a: 75,
    //         b: 65
    //     }, {
    //         y: '2010',
    //         a: 50,
    //         b: 40
    //     }, {
    //         y: '2011',
    //         a: 75,
    //         b: 65
    //     }, {
    //         y: '2012',
    //         a: 100,
    //         b: 90
    //     }],
    //     xkey: 'y',
    //     ykeys: ['a', 'b'],
    //     labels: ['Series A', 'Series B'],
    //     hideHover: 'auto',
    //     resize: true
    // });

});
