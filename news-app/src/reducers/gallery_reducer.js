export default(state = {}, action) => {
    switch (action.type) {
        case 'GALLERY':
            return {
                ...state,
                galleries: action.payload
            }

        default:
            return state;
    }
};