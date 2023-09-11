import axios from 'axios';
import { put, call, takeLatest } from 'redux-saga/effects';

function* addMeds(action) {
    console.log(action.payload)
    try{
        const newMed = yield axios.post('/api/meds', action.payload)
        yield put({ type: 'FETCH_MEDS' })
    }catch (error) {
        console.log("error in addmeds.saga")
    }
}



function* medicationsSaga(){
    yield takeLatest('ADD_NEW_MED', addMeds)
}

export medicationsSaga