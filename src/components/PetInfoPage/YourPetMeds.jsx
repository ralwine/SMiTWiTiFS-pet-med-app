import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory, Link } from 'react-router-dom/cjs/react-router-dom.min';
import { Button } from '@mui/material';


export function YourPetMeds() {

    const yourPets = useSelector((store) => store.pets)
    const yourPetMeds = useSelector((store) => store.medications)
    const dispatch = useDispatch()
    const history = useHistory();

    useEffect(() => {
        fetchYourPetMeds
    }, [])

    const fetchYourPetMeds = () => {

    }

    const handleMoreButtonClick = (med) => {
        // Perform actions when the "More" button is clicked for a medication
        // For example, you can display more details about the medication
        console.log(`Clicked "More" for medication: ${med.med_name}`);
        history.push(`/medInfo/${med.id}`)
    };



    return (
        <>
            <div className="container">
                <h3><b>List of Medications</b></h3>
                <div className='yourMeds'>

                    {yourPetMeds.map((med, index) => (
                        <div key={index}>
                            <ul>
                                <li>{med.med_name}</li>
                            </ul>
                            <Button
                            variant="contained" 
                            color="primary" 
                            onClick={() => handleMoreButtonClick(med)}>More</Button>
                        </div>
                    ))}
                </div>
            </div>
        </>
    )
}