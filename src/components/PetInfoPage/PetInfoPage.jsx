import React from 'react';
import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory, useParams } from 'react-router-dom/cjs/react-router-dom.min';
import YourPetsPage from '../YourPetsPage/YourPetsPage'
import swal from 'sweetalert';

function PetInfoPage() {
    //page for individual pet
    const dispatch = useDispatch()
    const history = useHistory();
    const { petID, petName, petBio, petURL } = useParams();

    useEffect(() => {
        // Fetch your pets when the component mounts
        fetchIndividualPet();
      }, [petID]);

    const fetchIndividualPet = async () =>{
        try{
            const response = await fetch('/api/pets/:id')
            const data = await response.json();
            dispatch({type: 'FETCH_YOUR_PET'})
        } catch (error){
         console.error('Error fetching individual pet: ',error)
    }
    }

    // nav back to Your Pets page without saved changes
    const navigateToYourPetsPage = () => {
        history.push('/yourPets'); // Use push to navigate to another page
    };

    const navigateToAddMedsPage = () => {
        history.push('/addMeds')
    };

    return (
        <>
            <div>
                <h2><b>{petName}</b></h2>
            </div>
            <div>
                {/* Pet image, name, bio appending here*/}
                <img src={petURL} alt={petName} />
            </div>
            <div>
                <h3>Here are some things about me:</h3>
                <p>{petBio}</p>
                <button className='btn'>Edit Info</button>
            </div>
            <div className='buttons'>

                <button className='btn' onClick={navigateToYourPetsPage}>Back to Your Pets</button>

                <button className='btn' onClick={navigateToAddMedsPage}>Add Medication</button>
                <button className='btn'>Delete Pet</button>
            </div>
        </>
    );

}

export default PetInfoPage;