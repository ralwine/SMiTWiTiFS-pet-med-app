import React from 'react';
import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory, useParams, Link } from 'react-router-dom/cjs/react-router-dom.min';
import { DeleteMed } from './DeleteMed';
import { Box, Button } from '@mui/material';

function MedInfoPage() {
    //page for individual med
    const dispatch = useDispatch()
    const history = useHistory();
    const yourPets = useSelector((store) => store.pets)
    const yourPetMed = useSelector((store) => store.medications)
    const { id } = useParams();
    const [isEditing, setIsEditing] = useState(false);

    const selectedMedication = yourPetMed.find((med) => med.id === parseInt(id));

    console.log("yourPetMed", id)

    useEffect(() => {
        // Fetch your med when the component mounts
        fetchIndividualMed();
    }, [id]);

    const fetchIndividualMed = async () => {
        try {
            const response = await fetch(`/api/medications/${id}`); // Replace with your API endpoint

            const data = await response.json();
            console.log("in fetchIndMed: ", data)
            dispatch({ type: 'SET_MED', payload: data });
        } catch (error) {
            console.error('Error fetching med:', error);
        }
    }


    const handleEditClick = () => {
        setIsEditing(true);
    };

    const handleSaveMedInfo = (editedMedInfo) => {

        setIsEditing(false); // Exit edit mode
    };


    // nav back to Pet Info page without saved changes
    const navigateToYourPetsPage = () => {
        history.push(`/yourPets`); // Use push to navigate to another page
    };

    return (
        <>

            <div>
                {/* med name and instructions will append here */}
                <h3>{selectedMedication ? selectedMedication.med_name : 'Medication Not Found'}</h3>
                <p>{selectedMedication ? selectedMedication.instructions : ''}</p>
                <Button
                    variant="contained"
                    color="primary"
                >Edit Info</Button>
                {/* DELETE functionailty needed here w/ pop-up */}

            </div>
            <Box
                display='flex'
                justifyContent='center'
                alignItems='center'
                mt={3}>

                <button className='btn' onClick={navigateToYourPetsPage}>Back to Your Pets</button>
                {/* PUT functionality to be handled by submit button */}
                {/* Will also need pop-up! */}
                
                <DeleteMed />
            </Box>

        </>
    )
}

export default MedInfoPage;


