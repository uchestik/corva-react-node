import {
    UPDATE_CHART_DATA, UPDATE_INPUT
} from '../actions/chartActions';

const initialState = {
    range : 10,
    alertThreshold : 0,
    chartData : [], 
    barMap : {},
    lastValue : 0,
    showToast : false
}
export default function(state=initialState, action){
    switch(action.type){
        case UPDATE_CHART_DATA:
            let value = action.payload.value;
            //Get multiple by dividing by the operator
            let multiple = value / state.range;
            //get range max point
            let mapIndex = state.range * (multiple > 0 ? Math.ceil(multiple) : Math.floor(multiple));
            return {
                ...state,
                chartData : [...state.chartData.slice(-20), action.payload],
                barMap : {
                    ...state.barMap,
                    [mapIndex] : state['barMap'][mapIndex] ? state['barMap'][mapIndex] + 1 : 1
                }, 
                lastValue : value,
                showToast : state.alertThreshold > value
            }
        case UPDATE_INPUT:
            return {
                ...initialState,
                [action.payload.field] : action.payload.value
            }
        default:
            return state;
    }
}