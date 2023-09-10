import React from 'react';
import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom/cjs/react-router-dom.min';

function AddPetsPage() {

    const userID = useSelector((store) => store.user)
    const [petURL, setPetURL] = useState('');
    const [petName, setPetName] = useState('');
    const [petBio, setPetBio] = useState('');
    const dispatch = useDispatch();
    const errors = useSelector((store) => store.errors);
    const history = useHistory();

    const addNewPet = (event) => {
        event.preventDefault();
        console.log(userID.id, petURL, petName, petBio)

        dispatch({
            type: 'ADD_NEW_PET',
            payload: {
                petName: petName,
                userID: userID.id,//just the id, not the name
                petBio: petBio,
                petURL: petURL,
            },
        })

        history.push(`/petInfo/${petURL}/${petName}/${petBio}`);
    }

    // nav back to Your Pets page without saved changes
    const navigateToYourPetsPage = () => {
        history.push('/yourPets'); // Use push to navigate to another page
    };

    return (
        <>

            <form className='formPanel' onSubmit={addNewPet}>
                <h2>Add Pet</h2>
                <div>
                    <label htmlFor='peturl'>
                        Pet Image:
                        {/* wrap the image in anchor tags */}
                        <input
                            type='url'
                            name='peturl'
                            placeholder='upload URL here'
                            value={petURL}
                            required onChange={(event) => setPetURL(event.target.value)}
                        />
                    </label>
                    <label htmlFor='petname'>
                        Pet Name:
                        <input
                            type="text"
                            name="petname"
                            value={petName}
                            required onChange={(event) => setPetName(event.target.value)}
                        />
                    </label>
                    <label htmlFor='petbio'>
                        Write short bio about your pet!
                        <input
                            type='text'
                            name='petbio'
                            placeholder='include things like their age, breed, etc'
                            value={petBio}
                            required onChange={(event) => setPetBio(event.target.value)}
                        />
                    </label>
                </div>
            </form>
            <div className='buttons'>
                <button className='btn' onClick={navigateToYourPetsPage}>Back to Your Pets</button>
                {/* need pop-up here and onChange event for POST */}
                <button className='btn' onClick={addNewPet}>Submit</button>
            </div>
        </>
    )
}

export default AddPetsPage;