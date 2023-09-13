import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from "react-redux"
import { useHistory, Link } from 'react-router-dom/cjs/react-router-dom.min';

import swal from 'sweetalert';

export function YourPetMeds() {

    
    const yourPetsMeds = useSelector((store) => store.medications)
    const dispatch = useDispatch()
    const history = useHistory();

    useEffect(() => {
        // Fetch your pets when the component mounts
        fetchYourPetMeds();
    }, []);

    console.log("yourPetsMeds", yourPetsMeds)

    const fetchYourPetMeds =  () => {
        try {
            
            dispatch({ type: 'FETCH_MEDS', payload:  yourPetsMeds });
        } catch (error) {
            console.error('Error fetching your pet meds:', error);
        }
    };

    return (
        <>
            <div className='container'>
                <h3><b>List of Medications</b></h3>
                <div className='yourPetsMeds'>
                    {/* {yourPetsMeds.map((med, index) => (
                        <div key={index}>
                            <ul>
                                <li>{med.med_name}</li>
                            </ul>
                        </div>
                    ))} */}
                </div>
            </div>
        </>
    );
}
