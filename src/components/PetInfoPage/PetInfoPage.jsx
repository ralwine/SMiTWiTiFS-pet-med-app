import React from 'react';
import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory, useParams } from 'react-router-dom/cjs/react-router-dom.min';

function PetInfoPage() {
    //page for individual pet
    const history = useHistory();
    const { petName, petBio, petURL } = useParams();

    // nav back to Your Pets page without saved changes
    const navigateToYourPetsPage = () => {
        history.push('/yourPets'); // Use push to navigate to another page
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

                <button className='btn'>Add Medication</button>
                <button className='btn'>Delete Pet</button>
            </div>
        </>
    );

}

export default PetInfoPage;