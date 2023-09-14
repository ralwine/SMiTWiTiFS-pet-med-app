import axios from 'axios';
import { put, call, takeLatest } from 'redux-saga/effects';

function* addMeds(action) {
    console.log(action.payload)
    try{
        const newMed = yield axios.post('/api/medications', action.payload)
        yield put({ type: 'FETCH_MEDS' })
        console.log("in addPets.saga", newMed.data)

    }catch (error) {
        console.log("error in addmeds.saga")
    }
}

function* fetchMeds(action){
    console.log("in fectchMEdsSaga", action.payload)
    try{
        const response = yield axios.get(`/api/medications/${action.payload}`)
        yield put({ type: 'SET_MEDS', payload: response.data})
    } catch (error){
        console.log('Med request failed', error)
    }
}

function* fetchYourMed(action) {
    try {
        const response = yield axios.get(`/api/medications/${action.payload}`)
        yield put({ type: 'SET_MED', payload: response.data })
    } catch (error) {
        console.log('Med request failed', error)
    }
}

function* deleteMed(action) {
    
    try {
        yield axios.delete(`/api/medications/${action.payload}`)
        console.log("in DELETEpetSAGA", action.payload)
        yield put({ type: 'FETCH_YOUR_MED', payload: action.payload })
    } catch (error) {
        console.log('error in deleteMed saga', error)
    }
}



function* medicationsSaga(){
    yield takeLatest('ADD_NEW_MED', addMeds)
    yield takeLatest('FETCH_MEDS', fetchMeds)
    yield takeLatest('DELETE_MED', deleteMed)
    yield takeLatest('FETCH_YOUR_MED', fetchYourMed)
}

export default medicationsSaga;