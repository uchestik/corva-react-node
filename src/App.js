import React from 'react';
import './App.css';
import io from 'socket.io-client';
import config from './config/config';
import {connect} from 'react-redux';
import {updateChartData, updateInput} from './actions';
import LineChart from './components/chartsUi/lineChart';
import BarChart from './components/chartsUi/barChart';
import Toast from './components/toast/toast';

const renderInputCard = (label, propMap, props) => { //re-used dynamic component
  const {updateInput} = props;
  return (
    <div
      className='p-3 mb-4 bg-white mr-3'
    >
      <label
        className='text-info mb-1'
      >
        {label}
      </label>
      <input 
        type='number'
        value={props[propMap]}
        className='form-control'
        onChange={(e) => updateInput(propMap, e.target.value)}
      />
    </div>
  )
}

const App = (props) => {
  const {updateChartData} = props;
  const socket = io(config.socketIoSever);
  socket.on('data', data => {
    updateChartData(data);
  });

  return (
    <div
      className='bg-secondary d-flex align-items-center justify-content-center'
      style={{
        height : '100vh'
      }}
    >
      <div>
        <div
          className='d-flex align-items-center justify-content-center mb-1'
        >
          {renderInputCard('Range', 'range', props)}
          {renderInputCard('Alert Threshold', 'alertThreshold', props)}
        </div>
        <div
          className='d-flex align-items-center justify-content-center'
        >
          <LineChart />
          <BarChart />
        </div>
        <Toast />
      </div>
    </div>
  )
}

function mapStateToProps(state){
  return {
    range : state.chartReducer.range
  }
}
export default connect(mapStateToProps, {
  updateChartData, updateInput
})(App);
