export default(state = {}, action) => {
    switch (action.type) {
        case 'LIST':
            return {
                ...state,
                list: action.payload
            }

        default:
            return state;
    }
};