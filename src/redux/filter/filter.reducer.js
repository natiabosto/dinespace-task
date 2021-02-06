const initialState = {
    burger: true,
    wrap: true,
    taco: true
}

export const filterData = (state = initialState, action) => {
    switch (action.type) {
        case 'UPDATE_FILTER':
            return {
                ...state,
                ...action.payload
            };
        default:
            return state;
    }
}