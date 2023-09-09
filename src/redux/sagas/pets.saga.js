import axios from 'axios';
import { put, call, takeLatest } from 'redux-saga/effects';

function* addPets(action) {
    console.log(action.payload)
    try {


        const newPet = yield axios.post('/api/pets', action.payload)
        yield put({ type: 'FETCH_PETS' })
        console.log(newPet.data)

    } catch (error) {
        console.log("error in addpets.saga")
    }
}

function* fetchPets() {
    try {
        const response = yield axios.get('/api/pets')
        yield put({ type: 'SET_PETS', payload: response.data })
    } catch (error) {
        console.log('pet GET request failed', error)
    }
}

function* deletePet(action){
    try{
        yield call(axios.delete, `/api/pets${action.payload}`)
        console.log("in DELETEpetSAGA", action.payload)
        yield put({type: 'DELETE_PET_SUCCESS', payload: action.payload})
    } catch(error){
        yield put({type: 'DELETE_PET_FAILURE', payload: error.message})
    }
}

function* petsSaga() {
    yield takeLatest('ADD_NEW_PET', addPets)
    yield takeLatest('FETCH_PETS', fetchPets)
    yield takeLatest('DELETE_PET', deletePet)
}

export default petsSaga;