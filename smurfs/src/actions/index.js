import axios from 'axios'

export const FETCHING = 'FETCHING'
export const SUCCESS = 'SUCCESS'
export const FAILURE = 'FAILURE'

export const getSmurfs = () => dispatch =>{
    dispatch({type: FETCHING});
    axios
        .get('http://localhost:3333/smurfs')
        .then(({ data }) => {
            dispatch({
                type: SUCCESS,
                payload: data.results
            });
        })
        .catch(err => {
            dispatch({
                type: FAILURE,
                payload: err
            })
        })
}