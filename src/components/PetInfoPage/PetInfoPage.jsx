import React from 'react';
import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom/cjs/react-router-dom.min';

function PetInfoPage() {

    const history = useHistory();

    const navigateToYourPetsPage = () => {
        history.push('/yourPets'); // Use push to navigate to another page
    };

    return (
        <>
            <div>
                {/* Pet image, name, bio and meds appending here */}
            </div>
            <div className='buttons'>
                <button className='btn' onClick={navigateToYourPetsPage}>Back to Your Pets</button>

                <button className='btn'>Add Medication</button>
            </div>
        </>
    );

}

export default PetInfoPage;