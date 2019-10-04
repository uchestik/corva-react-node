import React from 'react';
import {connect} from 'react-redux';
import {
    LineChart, Line, XAxis, YAxis, Tooltip, Legend, Label
} from 'recharts';

const LineChartUi = (props) => {
    const {chartData=[]} = props;
    return (
        <div
            className='p-5 shadow-sm bg-white mr-3'
        >
            <h3
                className='text-info mb-2 text-center'
            >
                Corva Line Chart
            </h3>
            <LineChart
                width={500}
                height={300}
                data={chartData}
                margin={{
                top: 15, right: 10, left: 10, bottom: 15,
                }}
            >
                <XAxis dataKey="timestamp" >
                    <Label value="Timestamp (Rolling 20)" offset={0} position="bottom" />
                </XAxis>
                <YAxis label={{ value: 'Value', angle: -90, position: 'insideLeft' }}  />
                <Tooltip />
                <Legend verticalAlign="top" />
                <Line type="monotone" dataKey="value" stroke="#82ca9d" />
            </LineChart>
        </div>
    )
}

function mapStateToProps(state){
    return {
        chartData : state.chartReducer.chartData
    }
}

export default connect(mapStateToProps, null)(LineChartUi);

