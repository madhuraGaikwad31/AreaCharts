import React from 'react';
import { storiesOf } from "@storybook/react";
// import '../../wrapper-styles/index.scss';
import { Charts } from '../../commonComponents/Charts';
import '../../App.css';

const chartDetails =  {
    type: 'area'
  }
   const title = {
    text: ''
    }
  const xAxis = {
      allowDecimals: true,
      min: 9.25,
      max: 9.50,
      tickInterval: 0.05,
  }
  const yAxis = {
    title: {
      text: ''
  },
  min: 0.0,
  max: 1.0,
  tickInterval: 0.3,
  }
  
  const plotOptions = {
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
  }
   
  const seriesData = [{
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
  }]


//Second CHart
  const chartDetails2 = {
    type: 'area'
  }

    const xAxis2 = {
        allowDecimals: true,
        min: 9.25,
        max: 9.50,
        tickInterval: 0.05,
    }
    const yAxis2 ={
        title: {
            text: ''
        },
    min: 0.0,
    max: 1.0,
    tickInterval: 0.3,
    }

        const plotOptions2 = {
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
        }
const seriesData2 = [{
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

//Third area chart
const chartDetails3 = {
    type: 'area',
    height: 75,
}

const xAxis3 = {
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
}

const yAxis3 = {
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
}

const plotOptions3 = {
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
}
const seriesData3 = [{
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




storiesOf("Area Charts", module)
    .add("Area Chart 1", () => (
        <Charts chartDetails={chartDetails}
        xAxisConfig={xAxis}
        yAxisConfig={yAxis}
        plotOptionConfig={plotOptions}
        series={seriesData}

    ></Charts>
    ))
    .add("Area Chart Resized", () => (

        <div className="chartSecondSize">
        <Charts chartDetails={chartDetails2}
        xAxisConfig={xAxis2}
        yAxisConfig={yAxis2}
        plotOptionConfig={plotOptions2}
        series={seriesData2}

    ></Charts>
    </div>
    ))

    .add("Area Chart in datagrig", () => (
        <div className="chartThirdSize">
        <Charts chartDetails={chartDetails3}
        xAxisConfig={xAxis3}
        yAxisConfig={yAxis3}
        plotOptionConfig={plotOptions3}
        series={seriesData3}

    ></Charts>
    </div>
    ))