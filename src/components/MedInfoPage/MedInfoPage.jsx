import React from 'react';
import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom/cjs/react-router-dom.min';

function MedInfoPage () {

    const history = useHistory();
    const yourPets = useSelector((store) => store.pets)

    // nav back to Pet Info page without saved changes
    const navigateToPetInfoPage = () => {
        history.push(`/petInfo/${yourPets.id}`); // Use push to navigate to another page
    };

    return(
        <>
         
         <div>
            {/* med name and instructions will append here */}
            <button className='btn'>Edit Info</button>
            {/* DELETE functionailty needed here w/ pop-up */}
            <button className='btn'>Delete Medication</button>
         </div>
         <div className='buttons'>
                <button className='btn' onClick={navigateToPetInfoPage}>Back to Your Pets</button>
                {/* PUT functionality to be handled by submit button */}
                {/* Will also need pop-up! */}
                <button className='btn'>Submit</button>
            </div>

        </>
    )
}

export default MedInfoPage;