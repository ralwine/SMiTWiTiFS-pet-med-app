import axios from 'axios';
import { put, takeLatest } from 'redux-saga/effects';

function* addPets(action) {
    console.log(action.payload)
    try {
        

        const newPet = yield axios.post('/api/pets', action.payload)
        yield put({ type: 'FETCH_PETS'  })
        console.log(newPet.data)

    } catch(error){
        console.log("error in addpets.saga")
    }
}

function* addpetsSaga(){
    yield takeLatest('ADD_NEW_PET', addPets)
}

export default addpetsSaga;