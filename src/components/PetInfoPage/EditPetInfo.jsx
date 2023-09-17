import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Button } from '@mui/material';


export function EditPetInfo({ individualPet, onSave }) {
    const [editedInfo, setEditedInfo] = useState(individualPet);
    const dispatch = useDispatch()

    const handleInputChange = (event) => {
        const { name, value } = event.target;
        setEditedInfo({ ...editedInfo, [name]: value });
    };

    const handleSave = (event) => {
        event.preventDefault()
        onSave();

        dispatch({ type: 'UPDATE_PET_INFO', payload: editedInfo });


    };




    // textarea allows for flexible edit box!
    return (<>
        <div className='container'>
            <form className='formPanel'>
                <div>
                    <label htmlFor='petBio'>Pet Bio</label>
                    <textarea
                        id="petBio"
                        name="pet_info"
                        value={editedInfo.pet_info}
                        onChange={handleInputChange}
                    />
                </div>
                <div>
                    <Button
                        variant="contained"
                        color='primary'
                        onClick={handleSave}>
                        Save
                    </Button>
                </div>
            </form>
        </div >

    </>);
}
