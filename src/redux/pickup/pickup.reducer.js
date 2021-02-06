const initialState = {
    pickup: false
}

export const pickupState = (state = initialState, action) => {
    switch (action.type) {
        case "UPDATE_PICKUP_STATE":
            return {
                pickup: action.payload
            }
        default:
            return state
    }
}