import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Button } from '@mui/material';

export function EditMedInfo({individualMed, onSave}) {
    const [editedInfo, setEditedInfo] = useState(individualMed);
    const dispatch = useDispatch()

    const handleInputChange = (event) => {
        const { name, value } = event.target;
        setEditedInfo({ ...editedInfo, [name]: value });
    };

    const handleSave = (event) => {
        event.preventDefault()
        onSave();

        dispatch({ type: 'UPDATE_MED_INFO', payload: editedInfo });


    };
}

// textarea allows for flexible edit box!
return (<>
    <div className='container'>
        <form className='formPanel'>
            <div>
                <label htmlFor='medBio'>Instructions</label>
                <textarea
                    id="medBio"
                    name="med_info"
                    value={editedInfo.med_info}
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