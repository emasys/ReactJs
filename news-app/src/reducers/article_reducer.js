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
        default:
            return state;
    }
};
