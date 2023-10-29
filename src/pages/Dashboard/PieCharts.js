import React from 'react';
import ReactApexChart from "react-apexcharts";

//Import images
import smallImage1 from '../../assets/images/small/img-1.jpg';
import smallImage2 from '../../assets/images/small/img-2.jpg';
import smallImage3 from '../../assets/images/small/img-3.jpg';
import smallImage4 from '../../assets/images/small/img-4.jpg';

import getChartColorsArray from "../../Components/Common/ChartsDynamicColor";

const MonochromePie = ({ dataColors }) => {
    const bmi = parseFloat(sessionStorage.getItem("bmi"));
    const bmr = parseFloat(sessionStorage.getItem("bmr"));
    const calorie = parseFloat(sessionStorage.getItem("calorie"));
    console.log(typeof(calorie));
    var chartMonochromeColors = getChartColorsArray(dataColors);
    const series = [76, 78, 78]; // Update the series with the actual values
    var options = {

        chart: {
            height: 300,
            type: 'pie',
        },
        labels: ["BMI", "BMR", "TDEE"], // Update the labels accordingly
        theme: {
            monochrome: {
                enabled: true,
                color: '#405189',
                shadeTo: 'light',
                shadeIntensity: 0.6
            }
        },

        plotOptions: {
            pie: {
                dataLabels: {
                    offset: -5
                }
            }
        },
        title: {
            text: "Monochrome Pie",
            style: {
                fontWeight: 500,
            },
        },
        dataLabels: {
            formatter: function (val, opts) {
                var name = opts.w.globals.labels[opts.seriesIndex];
                return [name, val.toFixed(1) + '%'];
            },
            dropShadow: {
                enabled: false,
            }
        },
        legend: {
            show: false
        }
    };
    return (
        <ReactApexChart
            dir="ltr"
            className="apex-charts"
            series={series}
            options={options}
            type="pie"
            height={287.7}
        />
    )
}

export { MonochromePie }
