import axios from 'axios';
import { put, takeLatest } from 'redux-saga/effects';

function* fetchPets() {
    try {
        const response = yield axios.get('/api/pets')
        yield put({ type: 'SET_PETS', payload: response.data })
    } catch (error) {
        console.log('pet GET request failed', error)
    }
}
function* yourpetsSaga() {
    yield takeLatest('FETCH_PETS', fetchPets)
}

export default yourpetsSaga;