$(function() {

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
