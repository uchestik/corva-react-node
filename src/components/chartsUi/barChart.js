import React from 'react';
import {connect} from 'react-redux';
import {
    BarChart, XAxis, YAxis, Tooltip, Legend, Label, Bar
} from 'recharts';

const generateBarData = (props) => {
    const {barMap={}, range=0} = props;
    let accumulator = []; //chart array init
    //sort ranges
    let sortedRangeKeys = Object.keys(barMap).map(value => Number(value)).sort();
    for (let i = 0; i < sortedRangeKeys.length; i++){
        let key = sortedRangeKeys[i];
        //create chart data point
        let diff = key < 0 ? Number(key) + range : Number(key) - range;
        let rangeValue = `${key >= 0 ? diff + ' - ' : ''}${key}${key < 0 ? ' - ' + diff : '' }`
        accumulator.push({
            range : rangeValue,
            count : barMap[Number(key)]
        })
    }
    return accumulator;
}

const BarChartUi = (props) => {
    const data = generateBarData(props);
    return (
        <div
            className='p-5 shadow-sm bg-white mr-3'
        >
            <h3
                className='text-info mb-2 text-center'
            >
                Corva Bar Chart
            </h3>
            <BarChart
                width={500}
                height={300}
                data={data}
                margin={{
                top: 15, right: 10, left: 10, bottom: 15,
                }}
            >
                <XAxis dataKey="range" >
                    <Label value="Range" offset={0} position="bottom" />
                </XAxis>
                <YAxis label={{ value: 'Count', angle: -90, position: 'insideLeft' }}  />
                <Tooltip />
                <Legend verticalAlign="top" />
                <Bar dataKey="count" fill="#82ca9d" />
            </BarChart>
        </div>
    )
}

function mapStateToProps(state){
    return {
        barMap : state.chartReducer.barMap,
        range : state.chartReducer.range
    }
}

export default connect(mapStateToProps, null)(BarChartUi);

