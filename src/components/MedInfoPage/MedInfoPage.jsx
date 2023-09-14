import React from 'react';
import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory, useParams, Link } from 'react-router-dom/cjs/react-router-dom.min';

function MedInfoPage () {
    //page for individual med
    const dispatch = useDispatch()
    const history = useHistory();
    const yourPets = useSelector((store) => store.pets)
    const yourPetMed = useSelector((store) => store.medications)
    const { id } = useParams();
    const [isEditing, setIsEditing] = useState(false);

    const selectedMedication = yourPetMed.find((med) => med.id === parseInt(id));

    console.log("yourPetMed", id)

    const handleEditClick = () => {
        setIsEditing(true);
    };

    // nav back to Pet Info page without saved changes
    const navigateToPetInfoPage = () => {
        history.push(`/petInfo/${yourPets.id}`); // Use push to navigate to another page
    };

    return(
        <>
         
         <div>
            {/* med name and instructions will append here */}
            <h3>{selectedMedication ? selectedMedication.med_name : 'Medication Not Found'}</h3>
                <p>{selectedMedication ? selectedMedication.instructions : ''}</p>
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