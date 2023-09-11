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

function* fetchYourPet(action) {
    try {
        const response = yield axios.get(`/api/pets/${action.payload}`)
        yield put({ type: 'SET_PET', payload: response.data })
    } catch (error) {
        console.log('Pet request failed', error)
    }
}

function* updatePetInfo(action) {
    try {
        console.log("in PUTpetSAGA", action.payload)
        yield axios.put(`/api/pets/${action.payload.id}`)
        
        yield put({ type: 'EDIT_PET_INFO', payload: action.payload })
    } catch(error) {
        console.log('error in PUT/Pet saga', error)
    }
}

function* deletePet(action) {
    try {
        yield axios.delete(`/api/pets/${action.payload}`)
        console.log("in DELETEpetSAGA", action.payload)
        yield put({ type: 'FETCH_YOUR_PET', payload: action.payload })
    } catch (error) {
        console.log('error in deletePet saga', error)
    }
}

function* petsSaga() {
    yield takeLatest('ADD_NEW_PET', addPets)
    yield takeLatest('FETCH_PETS', fetchPets)
    yield takeLatest('DELETE_PET', deletePet)
    yield takeLatest('FETCH_YOUR_PET', fetchYourPet)
    yield takeLatest('UPDATE_PET_INFO', updatePetInfo)
}

export default petsSaga;