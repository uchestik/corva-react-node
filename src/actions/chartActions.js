export const UPDATE_CHART_DATA = 'UPDATE_CHART_DATA';
export const UPDATE_INPUT = 'UPDATE_INPUT';

export const updateChartData = (dataObj) => {
    return {
        type : UPDATE_CHART_DATA,
        payload : dataObj
    }
}

export const updateInput = (field, value) => {
    return {
        type : UPDATE_INPUT,
        payload : {
            field, value: Number(value)
        }
    }
}