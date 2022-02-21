import React, { useRef } from 'react';
import './App.css';
import HighchartsReact from 'highcharts-react-official';
import ReactDOM from 'react-dom';
import * as Highcharts from 'highcharts';
import { Charts } from './commonComponents/Charts';

const options: Highcharts.Options = {
  chart: {
         type: 'area'
     },
     accessibility: {
         description: 'Image description: An area chart compares the nuclear stockpiles of the USA and the USSR/Russia between 1945 and 2017. The number of nuclear weapons is plotted on the Y-axis and the years on the X-axis. The chart is interactive, and the year-on-year stockpile levels can be traced for each country. The US has a stockpile of 6 nuclear weapons at the dawn of the nuclear age in 1945. This number has gradually increased to 369 by 1950 when the USSR enters the arms race with 6 weapons. At this point, the US starts to rapidly build its stockpile culminating in 32,040 warheads by 1966 compared to the USSR’s 7,089. From this peak in 1966, the US stockpile gradually decreases as the USSR’s stockpile expands. By 1978 the USSR has closed the nuclear gap at 25,393. The USSR stockpile continues to grow until it reaches a peak of 45,000 in 1986 compared to the US arsenal of 24,401. From 1986, the nuclear stockpiles of both countries start to fall. By 2000, the numbers have fallen to 10,577 and 21,000 for the US and Russia, respectively. The decreases continue until 2017 at which point the US holds 4,018 weapons compared to Russia’s 4,500.'
     },
     title: {
         text: ''
     },
     xAxis: {
         allowDecimals: true,
         min: 9.25,
        max: 9.50,
        tickInterval: 0.05,
     },
     yAxis: {
         title: {
             text: ''
         },
        min: 0.0,
        max: 1.0,
        tickInterval: 0.3,
     },
     tooltip: {
         pointFormat: '{point.y} B/s by {point.x} AM'
     },
     plotOptions: {
         area: {
             pointStart: 9.25,
             pointInterval: 0.05,
             color: "#C12267",
             fillOpacity: 1,
             marker: {
                 enabled: false,
                 symbol: 'circle',
                 radius: 2,
                 states: {
                     hover: {
                         enabled: true
                     }
                 }
             }
         }
     },
     series: [{
         name: 'CPU usage',
         type: "area",
         data :[
                [9.25,0.4],
                [9.26,0.45],
                [9.27,0.35],
                [9.28,0.38],
                [9.29,0.31],
                [9.30,0.32],
                [9.33,0.45],
                [9.35,0.31],
                [9.37,0.26],
                [9.39,0.23],
                [9.40,0.29],
                [9.42,0.3],
                [9.45,0.45],
                [9.46,0.45],
                [9.47,0.51],
                [9.48,0.53],
                [9.50,0.49],
         ]
     }, 
    ]
   
 };

 const optionsSecond: Highcharts.Options = {
  chart: {
         type: 'area'
     },
     accessibility: {
         description: 'Image description: An area chart compares the nuclear stockpiles of the USA and the USSR/Russia between 1945 and 2017. The number of nuclear weapons is plotted on the Y-axis and the years on the X-axis. The chart is interactive, and the year-on-year stockpile levels can be traced for each country. The US has a stockpile of 6 nuclear weapons at the dawn of the nuclear age in 1945. This number has gradually increased to 369 by 1950 when the USSR enters the arms race with 6 weapons. At this point, the US starts to rapidly build its stockpile culminating in 32,040 warheads by 1966 compared to the USSR’s 7,089. From this peak in 1966, the US stockpile gradually decreases as the USSR’s stockpile expands. By 1978 the USSR has closed the nuclear gap at 25,393. The USSR stockpile continues to grow until it reaches a peak of 45,000 in 1986 compared to the US arsenal of 24,401. From 1986, the nuclear stockpiles of both countries start to fall. By 2000, the numbers have fallen to 10,577 and 21,000 for the US and Russia, respectively. The decreases continue until 2017 at which point the US holds 4,018 weapons compared to Russia’s 4,500.'
     },
     title: {
         text: ''
     },
     xAxis: {
         allowDecimals: true,
         min: 9.25,
        max: 9.50,
        tickInterval: 0.05,
     },
     yAxis: {
         title: {
             text: ''
         },
        min: 0.0,
        max: 1.0,
        tickInterval: 0.3,
     },
     tooltip: {
         pointFormat: '{point.y} B/s by {point.x} AM'
     },
     plotOptions: {
         area: {
             pointStart: 9.25,
             pointInterval: 0.05,
             color: "#571B7E",
             fillOpacity: 1,
             marker: {
                 enabled: false,
                 symbol: 'circle',
                 radius: 2,
                 states: {
                     hover: {
                         enabled: true
                     }
                 }
             }
         }
     },
     series: [{
         name: 'Memory usage',
         type: "area",
         data :[
          [9.25,0.4],
          [9.26,0.45],
          [9.27,0.35],
          [9.28,0.38],
          [9.29,0.31],
          [9.30,0.32],
          [9.33,0.45],
          [9.35,0.31],
          [9.37,0.26],
          [9.39,0.23],
          [9.40,0.29],
          [9.42,0.3],
          [9.45,0.45],
          [9.46,0.45],
          [9.47,0.51],
          [9.48,0.53],
          [9.50,0.49],
        ]
     }, 
    ]
   
 };


 const optionsThird: Highcharts.Options = {
  chart: {
         type: 'area',
         height: 75,
     },
     accessibility: {
         description: 'Image description: An area chart compares the nuclear stockpiles of the USA and the USSR/Russia between 1945 and 2017. The number of nuclear weapons is plotted on the Y-axis and the years on the X-axis. The chart is interactive, and the year-on-year stockpile levels can be traced for each country. The US has a stockpile of 6 nuclear weapons at the dawn of the nuclear age in 1945. This number has gradually increased to 369 by 1950 when the USSR enters the arms race with 6 weapons. At this point, the US starts to rapidly build its stockpile culminating in 32,040 warheads by 1966 compared to the USSR’s 7,089. From this peak in 1966, the US stockpile gradually decreases as the USSR’s stockpile expands. By 1978 the USSR has closed the nuclear gap at 25,393. The USSR stockpile continues to grow until it reaches a peak of 45,000 in 1986 compared to the US arsenal of 24,401. From 1986, the nuclear stockpiles of both countries start to fall. By 2000, the numbers have fallen to 10,577 and 21,000 for the US and Russia, respectively. The decreases continue until 2017 at which point the US holds 4,018 weapons compared to Russia’s 4,500.'
     },
     title: {
         text: ''
     },
     xAxis: {
         allowDecimals: true,
         min: 9.25,
        max: 9.50,
        tickInterval: 0.05,
        lineColor: "#625D5D",
        offset: 5,
        labels: {
          enabled: false
        },
        gridLineColor: 'transparent',
     },
     yAxis: {
         title: {
             text: ''
         },
        min: 0.0,
        max: 0.3,
        tickInterval: 0.1,
        labels: {
          enabled: false
        },
        gridLineColor: 'transparent',
     },
     tooltip: {
         pointFormat: '{point.y} B/s by {point.x} AM'
     },
     plotOptions: {
         area: {
             pointStart: 9.25,
             pointInterval: 0.05,
             color: "#0076CE",
             fillOpacity: 1,
             marker: {
                 enabled: false,
                 symbol: 'circle',
                 radius: 2,
                 states: {
                     hover: {
                         enabled: true
                     }
                 }
             }
         }
     },
     series: [{
         name: 'Memory usage',
         showInLegend: false,
         type: "area",
         data :[
                [9.25,0.1],
                [9.26,0.12],
                [9.27,0.19],
                [9.28,0.23],
                [9.29,0.21],
                [9.30,0.24],
                [9.33,0.15],
                [9.35,0.21],
                [9.37,0.26],
                [9.39,0.23],
                [9.40,0.25],
                [9.42,0.23],
                [9.45,0.25],
                [9.46,0.16],
                [9.47,0.23],
                [9.48,0.23],
                [9.50,0.24],
         ]
     }, 
    
    ]
   
 };

 

const App = (props: HighchartsReact.Props) => {
 
  return (
    <div >
        <div className="chartSize">
            <HighchartsReact
              highcharts={Highcharts}
              options={options}
            />
        </div>
    <br/>
    <table>
      <tr>
         <td>
            <div className="chartSecondSize">
            <HighchartsReact
              highcharts={Highcharts}
              options={optionsSecond}
            />
            </div>
        </td>
        <td>
              
          <div className="chartThirdSize">
          <HighchartsReact
            highcharts={Highcharts}
            options={optionsThird}
          />
          </div>
        </td>
      </tr>
    </table>
    
    {/* <Charts chartDetails={chartDetails}
        xAxisConfig={xAxis}
        yAxisConfig={yAxis}
        plotOptionConfig={plotOptions}
        series={seriesData}

    ></Charts> */}

    </div>
  );
};
// Render your App component into the #root element of the document.
ReactDOM.render(<App />, document.getElementById('root'));


export default App;
