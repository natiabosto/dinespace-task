const initialState = {
    filter: []
}

export const filterReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'UPDATE_FILTER':
            return {
                filter: [action.payload.filter]
            };
        default:
            return StaticRange;
    }
}