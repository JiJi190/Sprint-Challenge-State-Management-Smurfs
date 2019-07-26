import axios from 'axios'

export const FETCHING = 'FETCHING'
export const SUCCESS = 'SUCCESS'
export const FAILURE = 'FAILURE'
export const ADD_REQUEST = "ADD_REQUEST";
export const ADD_SUCCESS = "ADD_SUCCESS";
export const ADD_FAILURE = "ADD_FAILURE";

export const getSmurfs = () => dispatch => {
    dispatch({type:FETCHING});
    axios
        .get("http://localhost:3333/smurfs")
        .then(({ data }) => {
            dispatch({
                type: SUCCESS,
                payload: data.results
            })
        })
        .catch(err => {
            dispatch({
                type: FAILURE,
                payload: err
            })
        })
}

export const addSmurf = newSmurf => dispatch => {
    dispatch({type: ADD_REQUEST})
    axios
        .post("http://localhost:3333/smurfs", newSmurf)
        .then(res=> {dispatch({
            type: ADD_SUCCESS,
            payload: res.data
        })})
        .catch(err => {dispatch({
            type: ADD_FAILURE,
            payload: err.response
        })})
}