import * as actionTypes from './actionTypes';
import axios from 'axios';

const apiRootPath = 'http://localhost:3100';

export const getEntries = () => {

    return (dispatch) => {
        axios.get(`${apiRootPath}/entries?format=vnd.api%2Bjson`)
        .then((res) => {
            dispatch({
                type: actionTypes.GET_ENTRIES,
                entries: res.data.data
            });
        })
        .catch((err) => console.log(err));
    };
}