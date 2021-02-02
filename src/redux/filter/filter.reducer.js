const initialState = {
    burger: true,
    wrap: true,
    taco: true
}

export const filterReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'UPDATE_FILTER':
            console.log('action type', action)
            return {
                ...state,
                ...action.payload
            };
        default:
            return state;
    }
}