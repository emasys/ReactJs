const initialState = [];

export default function (state = initialState, action) {
    switch (action.type) {
        case 'SEARCH_CARS':
            return action.payload;
        default:
            return state;

    }
}