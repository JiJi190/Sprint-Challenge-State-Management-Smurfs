import { FETCHING, SUCCESS, FAILURE, ADD_REQUEST, ADD_SUCCESS, ADD_FAILURE } from "../actions";

const initialState = {
    smurfs: [],
    fetching: false,
    error: null,
    addSmurf: false
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

        case ADD_REQUEST:
            return {
                ...initialState,
                addSmurf: true,
                error: null
            }
        case ADD_SUCCESS:
            return {
                ...initialState,
                addSmurf: false,
                smurfs: action.payload,
                error: null
            }
        case ADD_FAILURE:
            return {
                ...initialState,
                addSmurf: false,
                error: action.payload
            }
        default:
            return state;
    }
}