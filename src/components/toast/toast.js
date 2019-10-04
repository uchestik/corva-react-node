import React from 'react';
import Fade from 'react-reveal/Fade';
import { connect } from 'react-redux';

const Toast = (props) => {
    const {
        lastValue=0, showToast=false
    } = props;
    if(showToast){
        return (
            <Fade bottom>
                <div
                    className='d-flex justify-content-center'
                >
                    <div
                        className='p-2 bg-light'
                        style={{
                            width : '40%'
                        }}
                    >
                        <h6
                            className='text-info mb-1'
                        >
                            Toast
                        </h6>
                        <div
                            className='text-secondary'
                        >
                            {lastValue}
                        </div>
                    </div>
                </div>
            </Fade>
        )
    }
    return null;
}

function mapStateToProps(state){
    return {
        lastValue : state.chartReducer.lastValue,
        showToast : state.chartReducer.showToast
    }
}

export default connect(mapStateToProps, null)(Toast)