import { FETCHING, SUCCESS, FAILURE } from "../actions";

const initialState = {
    smurfs: [],
    fetching: false,
    error: null
};

export const smurfReducer = (state = initialState, action) => {
    switch (action.type) {
        case FETCHING:
            return {...initialState, fetching: true}
            case SUCCESS:
                return {
                    ...initialState,
                    smurfs: action.payload,
                    fetching: false
                }
                case FAILURE:
                    return {
                        ...initialState,
                        fetching: false,
                        error: "ERROR"
                    }
                    default:
                        return state;
    }
}