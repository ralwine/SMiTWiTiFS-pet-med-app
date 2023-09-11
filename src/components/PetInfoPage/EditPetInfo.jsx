import React, { useState } from 'react';

export function EditPetInfo({ individualPet, onSave }) {
    const [editedInfo, setEditedInfo] = useState(individualPet);

    const handleInputChange = (event) => {
        const { name, value } = event.target;
        setEditedInfo({ ...editedInfo, [name]: value });
    };

    const handleSave = () => {
        onSave(editedInfo);
    };
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
