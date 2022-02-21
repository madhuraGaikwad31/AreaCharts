import HighchartsReact from 'highcharts-react-official';
import ReactDOM from 'react-dom';
import * as Highcharts from 'highcharts';
import React from "react";

/**
 * Props for Chart component
 * Refer https://api.highcharts.com/highcharts/ to check how to provide options for config
 * @param {chartDetails} : details about the chart
 * @param {title} : title to be displayed on the chart
 * @param {xAxisConfig} : x axis configurations
 * @param {yAxisConfig} : y axis configurations
 * @param {plotOptionConfig} : plot optiosn configuration
 * @param {toolTipFormatter} : function to format tooltip over chart
 * @param {series} : values to form the chart
 * @param {showLegend} : show or hide legend for the chart
 * @param {height} : height of the chart
 */
 export type ChartProps = {
    chartDetails?:any;
     title?: any;
     xAxisConfig?: any;
     yAxisConfig?: any;
     plotOptionConfig?: any;
     tooltipFormatter?:  Function;
     series?: any
     showLegend?: boolean;
};

//Enum for type of chart
export enum ChartType {
    AREA = "area",
    BAR = "bar",
    LINE = "line",
    COLUMN = "column",
}

//Enum for bar stacking options
export enum BarStackOptions {
    NORMAL = "normal",
    PERCENT = "percent",
}

//Enum for Tooltip type
export enum ToolTipTypes {
    OBJECT = "object",
    STRING = "string",
}

//Data structure for options for chart that can be modified if needed to be
export type ChartConfigOptions = {
    backgroundColor: string;
    height: number;
    width?: number;
    titleAlignment: string;
    titleStyle: any;
    titleMargin: number;
    seriesPointWidth: number;
};

// Color codes from clarity multicolor options
export enum BarChartColorCodes {
    BLUE_LAGOON = "#00567A",
    DARK_DRAY = "#999999",
    LIME_GREEN = "#73DC1E",
    PACIFIC_BLUE = "#0092D1",
    LIGHT_GREY = "#DEDEDE",
    GREEN = "#4B970C",
    CHARCOAL = "#454545",
    DIM_GRAY = "#737373",
    ORANGE = "#F55524",
    PURPLE = "#9E57BC",
    PEACH = "#F8AD96",
    YELLOW = "#FFC000",
}


/**
 * General component description :
 * Chart : Component that uses highchart library to display the data in chart format
 */
export class Charts extends React.PureComponent<ChartProps> {
    //Function to populate configuration data for chart
    private getChartConfig = () => {
        const {
            chartDetails,
            title,
            xAxisConfig,
            yAxisConfig,
            plotOptionConfig,
            tooltipFormatter,
            series,
            showLegend,
        } = this.props;
       
        return {
            chart: chartDetails,
            title: {
                text: title ? title : "",
            },
            legend: {
                enabled: showLegend ? showLegend : false,
            },
            xAxis: xAxisConfig
                ? xAxisConfig
                : {
                      visible: false,
                  },
            yAxis: yAxisConfig
                ? yAxisConfig
                : {
                      visible: false,
                  },
            plotOptions: plotOptionConfig,
            series: series,
        };
    };

    render() {
        return  <HighchartsReact highcharts={Highcharts} options={this.getChartConfig()} />
    }
}
