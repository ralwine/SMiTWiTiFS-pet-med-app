import React from 'react';
import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory, useParams, Link } from 'react-router-dom/cjs/react-router-dom.min';
import YourPetsPage from '../YourPetsPage/YourPetsPage'
import swal from 'sweetalert';
import { DeletePet } from './DeletePet';
import { EditPetInfo } from './EditPetInfo';

function PetInfoPage() {
    //page for individual pet
    const individualPet = useSelector((store) => store.petinfo)
    const dispatch = useDispatch()
    const history = useHistory();
    const { id } = useParams();
    const [isEditing, setIsEditing] = useState(false);

    useEffect(() => {
        // Fetch your pets when the component mounts
        fetchIndividualPet();
    }, [id]);
    //Define state variables to store pet data
    const fetchIndividualPet = async () => {
        try {
            const response = await fetch(`/api/pets/${id}`); // Replace with your API endpoint

            const data = await response.json();
            console.log("in fetchIndPet: ", data)
            dispatch({ type: 'SET_PET', payload: data });
        } catch (error) {
            console.error('Error fetching pet:', error);
        }
    }

    const handleEditClick = () => {
        setIsEditing(true);
    };

    const handleSavePetInfo = (editedPetInfo) => {
        // Dispatch an action to update the pet info in the Redux store.
        console.log("in handleSave", editedPetInfo)
        dispatch({
            type: 'UPDATE_PET_INFO',
            payload: editedPetInfo
        });
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
                <div>
                    <div>
                        {/* Pet image, name, bio appending here*/}
                        <img src={individualPet.pet_url} alt={individualPet.pet_name} />
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

            <div className='buttons'>

                <button className='btn' onClick={navigateToYourPetsPage}>Back to Your Pets</button>
                <Link to={`/addMeds/${id}`}>
                    <button className='btn' onClick={navigateToAddMedsPage}>Add Medication</button>
                </Link>
                <DeletePet />
            </div>
        </>
    )
}

export default PetInfoPage;



