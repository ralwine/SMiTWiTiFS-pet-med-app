import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory, Link } from 'react-router-dom/cjs/react-router-dom.min';

import swal from 'sweetalert';

export function YourPetMeds() {

    const yourPets = useSelector((store) => store.pets)
    const yourPetMeds = useSelector((store) => store.medications)
    const dispatch = useDispatch()
    const history = useHistory();

    useEffect(() => {
        // Fetch your pets when the component mounts
        fetchYourPetMeds();
    }, []);

    console.log("yourPetMeds", yourPetMeds)

    const fetchYourPetMeds = () => {
        try {

            dispatch({ type: 'SET_MEDS', });
        } catch (error) {
            console.error('Error fetching pets:', error);
        }
    };



    return (
        <>
            <div className="container">
                <h3><b>List of Medications</b></h3>
                <div className='yourMeds'>

                    {/* {yourPetMeds.map((med, index) => (
                    <div key={index}>
                        <ul>
                            <li>{medName}</li>
                        </ul>
                    </div>
                ))} */}
                </div>
            </div>
        </>
    )
}