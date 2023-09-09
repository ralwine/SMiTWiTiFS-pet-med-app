import React, { useEffect } from 'react';
import { useDispatch, useSelector } from "react-redux"
import { useHistory } from 'react-router-dom/cjs/react-router-dom.min';

import swal from 'sweetalert';
// This is one of our simplest components
// It doesn't have local state
// It doesn't dispatch any redux actions or display any part of redux state
// or even care what the redux state is

function InfoPage() {

  const yourPets = useSelector((store) => store.pets)
  const dispatch = useDispatch()
  const history = useHistory();

  useEffect(() => {
    // Fetch your pets when the component mounts
    fetchYourPets();
  }, []);

  console.log("infopage", yourPets)

  // GET pets
  const fetchYourPets = () => {
    //event.preventDefault();
    console.log("infopage.jsx/yourpets: ", yourPets)
    dispatch({ type: 'SET_PETS', payload: yourPets })

  }


  const navigateToAddPetsPage = () => {
    history.push('/addPets'); // Use push to navigate to another page
  };

  return (
    <>
      <div className="container">
        <p>Your Pets</p>


        <div className='yourPets'>
          {yourPets.map((pet, index) => (
            <div key={index}>
              {/* Make the pet image clickable to nav to petInfo page */}
              {/* <p>Pet URL: {pet.pet_url}</p> */}
              <a href={`/petInfo/${pet.id}`}>
                <img src={pet.pet_url} alt={pet.pet_name} />
              </a>
              <p>Pet Name: {pet.pet_name}</p>
              <p>Pet Info: {pet.pet_info}</p>

            </div>
          ))}
        </div>

      </div>
      <div className='buttons'>
        <button className='btn' onClick={navigateToAddPetsPage}>Add Pets</button>
      </div>
    </>
  );
}

export default InfoPage;
