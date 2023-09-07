import React from 'react';
import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom/cjs/react-router-dom.min';

function AddMedsPage(){

    const [medName, setMedName] = useState('');
    const [medDetails, setMedDetails] = useState('');
    const dispatch = useDispatch();
    const errors = useSelector((store) => store.errors);
    const history = useHistory();

    const addNewMed = (event) => {
        event.preventDefault();

        dispatchEvent({
            type: 'ADD_NEW_MED',
            payload: {
                medName: medName,
                medDetails: medDetails,
            }
        })
    }

    // nav back to Pet Info page without saved changes
    const navigateToPetInfoPage = () => {
        history.push('/petInfo'); // Use push to navigate to another page
    };

}

export default AddMedsPage;