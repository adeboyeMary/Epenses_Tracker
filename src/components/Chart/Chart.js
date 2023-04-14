import React from "react";
import './Chart.css';
import ChartBar from './ChartBar';

const Chart = (props) => {
    const dataPointValue = props.dataPoints.map(dataPoint => dataPoint.value);
    const calculateMaxValue = Math.max(...dataPointValue); //the spread opr.will turn the array into individual object.

    return (
        <div className="chart">
            {props.dataPoints.map((dataPoint) => (
                <ChartBar 
                    key={dataPoint.label}
                    value={dataPoint.value} 
                    maxValue={calculateMaxValue} 
                    label={dataPoint.label} 
                />
            ))}
        </div>
    )
}

export default Chart;