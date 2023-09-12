import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

export function EditPetInfo({ individualPet, onSave }) {
    const [editedInfo, setEditedInfo] = useState(individualPet);
    const dispatch = useDispatch()

    const handleInputChange = (event) => {
        const { name, value } = event.target;
        setEditedInfo({ ...editedInfo, [name]: value });
    };

    const handleSave = (e) => {
        e.preventDefault()
        onSave(editedInfo);

        dispatch({ type: 'FETCH_PET_INFO' });
    };
    

    // textarea allows for flexible edit box!
    return <>
        <form>
            <label htmlFor='petBio'>Pet Bio</label>
            <textarea
                id="petBio"
                name="pet_info"
                value={editedInfo.pet_info}
                onChange={handleInputChange}
            />
            <button className="btn" onClick={handleSave}>
                Save
            </button>
        </form>

    </>;
}
