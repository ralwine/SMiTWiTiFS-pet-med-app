import React from 'react';
import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory, useParams, Link } from 'react-router-dom/cjs/react-router-dom.min';
import YourPetsPage from '../YourPetsPage/YourPetsPage'
import swal from 'sweetalert';
import { DeletePet } from './DeletePet';
import { EditPetInfo } from './EditPetInfo';
import { YourPetMeds } from './YourPetMeds'
import { Box, Button } from '@mui/material';

function PetInfoPage() {
    //page for individual pet
    const yourPetMeds = useSelector((store) => store.medications)
    const yourPets = useSelector((store) => store.pets)
    const individualPet = useSelector((store) => store.petinfo)
    const medList = useSelector((store) => store.medinfo)
    const dispatch = useDispatch()
    const history = useHistory();
    const { id } = useParams();
    const [isEditing, setIsEditing] = useState(false);

    useEffect(() => {
        // Fetch your pets when the component mounts
        fetchIndividualPet();
    }, [id]);
    //Define state variables to store pet data

    const fetchIndividualPet = () => {

        dispatch({ type: 'FETCH_YOUR_PET', payload: id })
    }

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



    const handleEditClick = () => {
        setIsEditing(true);
    };

    const handleSavePetInfo = (editedPetInfo) => {

        setIsEditing(false); // Exit edit mode
    };

    // nav back to Your Pets page without saved changes
    const navigateToYourPetsPage = () => {
        history.push('/yourPets'); // Use push to navigate to another page
    };

    const navigateToAddMedsPage = () => {
        history.push('/addMeds')
    };

    return (
        <>
            {isEditing ? (
                <EditPetInfo individualPet={individualPet} onSave={handleSavePetInfo} />
            ) : (
                <div className='container'>
                    <div>
                        {/* Pet image, name, bio appending here*/}
                        <img className='pets' src={individualPet.pet_url} alt={individualPet.pet_name} />
                    </div>

                    <div>
                        <h2><b>{individualPet.pet_name}</b></h2>
                    </div>
                    <div>
                        <h3>Here are some things about me:</h3>
                        <p>{individualPet.pet_info}</p>
                        <button className='btn' onClick={handleEditClick}>Edit Info</button>
                    </div>
                </div>)}
            <div>
                <YourPetMeds />
            </div>

            <Box
                display='flex'
                justifyContent='center'
                alignItems='center'
                mt={3}>

                <button className='btn' onClick={navigateToYourPetsPage}>Back to Your Pets</button>
                <Link to={`/addMeds/${id}`}>
                    <button className='btn' onClick={navigateToAddMedsPage}>Add Medication</button>
                </Link>
                <DeletePet />
            </Box>

        </>
    )
}

export default PetInfoPage;



