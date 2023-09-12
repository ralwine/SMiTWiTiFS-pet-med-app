import axios from 'axios';
import { put, call, takeLatest } from 'redux-saga/effects';

function* addMeds(action) {
    console.log(action.payload)
    try{
        const newMed = yield axios.post('/api/medications', action.payload)
        yield put({ type: 'SET_MEDS' })
    }catch (error) {
        console.log("error in addmeds.saga")
    }
}



function* medicationsSaga(){
    yield takeLatest('ADD_NEW_MED', addMeds)
}

export default medicationsSaga;