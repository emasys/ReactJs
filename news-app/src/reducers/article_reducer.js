export default(state = {}, action) => {
    switch (action.type) {
        case 'LATEST_NEWS':
            return {
                ...state,
                latest: action.payload
            }

        case 'OTHER_NEWS':
            return {
                ...state,
                other: action.payload
            }
        case 'SELECTED_NEWS':
            return {
                ...state,
                selected: action.payload
            }
        case 'CLEAR_NEWS':
            return {
                ...state,
                cleared: action.payload
            }

        default:
            return state;
    }
};