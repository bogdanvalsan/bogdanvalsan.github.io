angular.module('app', ['ng-flot', 'highcharts-ng'])
    .controller("MainCtrl", function ($scope) {


        // highcharts-ng data
        $scope.chartSeries = [
            {"name": "Some data", "data": [1, 2, 4, 7, 3]},
            {"name": "Some data 3", "data": [3, 1, null, 5, 2], connectNulls: true},
            {"name": "Some data 2", "data": [5, 2, 2, 3, 5], type: "column"},
            {"name": "My Super Column", "data": [1, 1, 2, 3, 2], type: "column"}
        ];

        $scope.chartConfig = {
            options: {
                chart: {
                    type: 'areaspline'
                },
                plotOptions: {
                    series: {
                        stacking: ''
                    }
                }
            },
            series: $scope.chartSeries,
            title: {
                text: 'Hello'
            },
            credits: {
                enabled: true
            },
            loading: false
        }

        $scope.chartConfig2 = {
            options: {
                chart: {
                    type: 'areaspline'
                },
                plotOptions: {
                    series: {
                        stacking: ''
                    }
                }
            },
            series: $scope.chartSeries,
            title: {
                text: 'Hello'
            },
            credits: {
                enabled: true
            },
            loading: false
        }


        // ng-flot data
        
        var data = [
            [gd(2012, 1, 1), 208], [gd(2012, 1, 2), 125], [gd(2012, 1, 3), 931], [gd(2012, 1, 4), 450],
            [gd(2012, 1, 5), 761], [gd(2012, 1, 6), 744], [gd(2012, 1, 7), 707], [gd(2012, 1, 8), 601],
            [gd(2012, 1, 9), 187], [gd(2012, 1, 10), 716], [gd(2012, 1, 11), 587], [gd(2012, 1, 12), 147],
            [gd(2012, 1, 13), 574], [gd(2012, 1, 14), 175], [gd(2012, 1, 15), 272], [gd(2012, 1, 16), 211],
            [gd(2012, 1, 17), 637], [gd(2012, 1, 18), 794], [gd(2012, 1, 19), 399], [gd(2012, 1, 20), 799],
            [gd(2012, 1, 21), 595], [gd(2012, 1, 22), 717], [gd(2012, 1, 23), 414], [gd(2012, 1, 24), 462],
            [gd(2012, 1, 25), 674], [gd(2012, 1, 26), 203], [gd(2012, 1, 27), 675], [gd(2012, 1, 28), 808],
            [gd(2012, 1, 29), 194], [gd(2012, 1, 30), 664], [gd(2012, 1, 31), 980]
        ];
         
        function gd(year, month, day) {
            return new Date(year, month - 1, day).getTime();
        }

        var data1 = [
            [gd(2012, 1, 1), 20], [gd(2012, 2, 1), 12], [gd(2012, 3, 1), 19], [gd(2012, 4, 1), 24], [gd(2012, 5, 1), 17], [gd(2012, 6, 1), 16], [gd(2012, 7, 21), 30], [gd(2012, 8, 1), 26], [gd(2012, 9, 1), 18], [gd(2012, 10, 1), 31], [gd(2012, 11, 1), 28], [gd(2012, 12, 1), 14]
        ];

        var data2 = [
            [gd(2012, 1, 1), 10], [gd(2012, 2, 1), 18], [gd(2012, 3, 1), 35], [gd(2012, 4, 1), 27], [gd(2012, 5, 1), 14], [gd(2012, 6, 1), 21], [gd(2012, 7, 1), 26], [gd(2012, 8, 1), 28], [gd(2012, 9, 1), 15], [gd(2012, 10, 1), 8], [gd(2012, 11, 1), 16], [gd(2012, 12, 1), 20]
        ];

        var data3 = [
            [gd(2012, 1, 1), 21], [gd(2012, 2, 1), 12], [gd(2012, 3, 1), 17], [gd(2012, 4, 1), 27], [gd(2012, 5, 1), 16], [gd(2012, 6, 1), 8], [gd(2012, 7, 1), 18], [gd(2012, 8, 1), 12], [gd(2012, 9, 1), 29], [gd(2012, 10, 1), 27], [gd(2012, 11, 1), 32], [gd(2012, 12, 11), 14]
        ];


        // Vertical Grouped Bars

        $scope.vBarsData = [
            { label: "Bogdan Valsan", data: data1, color: "#0077FF", bars: { show: true, barWidth: 0.2, order: 1}},
            { label: "Cornel Bicuti", data: data2, color: "#7D0096", bars: { show: true, barWidth: 0.2, order: 2} },
            { label: "Alex Bighea", data: data3, color: "#DE000F", bars: { show: true, barWidth: 0.2, order: 3} }
        ];
        $scope.vBarsOptions = {
            series: {
                bars: {
                    show: true
                }
            },
            bars: {
                align: "center",
                barWidth:24 * 60 * 60 * 600,
                lineWidth: 10
            },
            xaxis: {
                mode: "time",
                tickSize: [1, "month"],
                tickLength: 10,
                color: "black",
                axisLabel: "Date",
                axisLabelUseCanvas: true,
                axisLabelFontSizePixels: 12,
                axisLabelFontFamily: 'Verdana, Arial',
                axisLabelPadding: 10
            },
            yaxis: {
                color: "black",
                axisLabel: "Stacked Time Logs",
                axisLabelUseCanvas: true,
                axisLabelFontSizePixels: 12,
                axisLabelFontFamily: 'Verdana, Arial',
                axisLabelPadding: 3,
                tickFormatter: function (v, axis) {
                    return $.formatNumber(v, { format: "#,###", locale: "us" });
                }
            },
            grid: {
                hoverable: true,
                borderWidth: 2,
                backgroundColor: { colors: ["#EDF5FF", "#ffffff"] }
            },
            colors:["#004078","#207800", "#613C00"]
        };

        // End Vertical Grouped Bars

        // Line Stack Data

        $scope.lineStackData = [
            { label: "Bogdan Valsan", data: data1, color: "#0077FF" },
            { label: "Cornel Bicuti", data: data2, color: "#7D0096" },
            { label: "Alex Bighea", data: data3, color: "#DE000F" }
        ];

        $scope.lineStackOptions = {
            series: {
                stack: true,
                lines: {
                    show: true,
                    fill: true
                }
            },
            xaxis: {
                mode: "time",
                tickSize: [1, "month"],
                tickLength: 10,
                color: "black",
                axisLabel: "Date",
                axisLabelUseCanvas: true,
                axisLabelFontSizePixels: 12,
                axisLabelFontFamily: 'Verdana, Arial',
                axisLabelPadding: 10
            },
            yaxis: {
                color: "black",
                axisLabel: "Total Tasks Per User",
                axisLabelUseCanvas: true,
                axisLabelFontSizePixels: 12,
                axisLabelFontFamily: 'Verdana, Arial',
                axisLabelPadding: 3,
                tickFormatter: function (v, axis) {
                    return $.formatNumber(v, { format: "#,###", locale: "us" });
                }
            },
            grid: {
                hoverable: true,
                borderWidth: 2,        
                backgroundColor: { colors: ["#EDF5FF", "#ffffff"] }
            }
        };

        // End Line Stack Data

        // Bar Stack Data

        $scope.barStackData = [
            { label: "Bogdan Valsan", data: data1, color: "#0077FF" },
            { label: "Cornel Bicuti", data: data2, color: "#7D0096" },
            { label: "Alex Bighea", data: data3, color: "#DE000F" }
        ];

        
        $scope.barStackOptions = {
            series: {
                stack: true,
                bars: {
                    show: true
                }
            },
            bars: {
                align: "center",
                barWidth:24 * 60 * 60 * 600,
                lineWidth: 10
            },
            xaxis: {
                mode: "time",
                tickSize: [1, "month"],
                tickLength: 10,
                color: "black",
                axisLabel: "Date",
                axisLabelUseCanvas: true,
                axisLabelFontSizePixels: 12,
                axisLabelFontFamily: 'Verdana, Arial',
                axisLabelPadding: 10
            },
            yaxis: {
                color: "black",
                axisLabel: "Stacked Time Logs",
                axisLabelUseCanvas: true,
                axisLabelFontSizePixels: 12,
                axisLabelFontFamily: 'Verdana, Arial',
                axisLabelPadding: 3,
                tickFormatter: function (v, axis) {
                    return $.formatNumber(v, { format: "#,###", locale: "us" });
                }
            },
            grid: {
                hoverable: true,
                borderWidth: 2,
                backgroundColor: { colors: ["#EDF5FF", "#ffffff"] }
            },
            colors:["#004078","#207800", "#613C00"]
        };

        // End Bar Stack Data

        // Pie Chart Data

        $scope.pieChartData = [
            {label: "Internal", data: 411, color: "#005CDE" },
            { label: "External", data: 590, color: "#00A36A" },
            { label: "POCs", data: 101, color: "#7D0096" },
            { label: "Research", data: 351, color: "#992B00" },
            { label: "Study", data: 72, color: "#DE000F" },
            { label: "Outsourcing", data: 344, color: "#ED7B00" }    
        ];

        $scope.pieChartOptions =  {
        series: {
            pie: {
                show: true,
                label: {
                    show: true,
                    radius: 180,
                    formatter: function(label, series) {
                        return '<div style="border:1px solid grey;font-size:8pt;text-align:center;padding:5px;color:white;">' + label + ' : ' + Math.round(series.percent) + '%</div>';
                    },
                    background: {
                        opacity: 0.8,
                        color: '#000'
                    }
                }
            }
        },
        legend: {
            show: false
        },
        grid: {
            hoverable: true
        }
    };
});

