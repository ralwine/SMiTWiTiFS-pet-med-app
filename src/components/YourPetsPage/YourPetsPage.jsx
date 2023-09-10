import React, { useEffect } from 'react';
import { useDispatch, useSelector } from "react-redux"
import { useHistory, Link } from 'react-router-dom/cjs/react-router-dom.min';

import swal from 'sweetalert';

function YourPetsPage() {

    const yourPets = useSelector((store) => store.pets)
    const dispatch = useDispatch()
    const history = useHistory();
  
    useEffect(() => {
      // Fetch your pets when the component mounts
      fetchYourPets();
    }, []);
  
    console.log("infopage", yourPets)
  
    // GET pets
    // const fetchYourPets =  () => {
    //   //event.preventDefault();
    //   console.log("infopage.jsx/yourpets: ", yourPets)
    //   dispatch({ type: 'SET_PETS', payload: yourPets })
  
    // }

    const fetchYourPets = async () => {
        try {
          const response = await fetch('/api/pets'); // Replace with your API endpoint
          const data = await response.json();
          dispatch({ type: 'SET_PETS', payload: data });
        } catch (error) {
          console.error('Error fetching pets:', error);
        }
      };
  
  
    const navigateToAddPetsPage = () => {
      history.push('/addPets'); // Use push to navigate to another page
    };
  
    return (
      <>
        <div className="container">
          <h2><b>Your Pets</b></h2>
  
  
          <div className='yourPets'>
            {yourPets.map((pet, index) => (
              <div key={index}>
                {/* Make the pet image clickable to nav to petInfo page */}
                {/* <p>Pet URL: {pet.pet_url}</p> */}
                <Link to={`/petInfo/${pet.id}`}>
                  <img src={pet.pet_url} alt={pet.pet_name} />
                </Link>
                <p>Pet Name: {pet.pet_name}</p>
            
  
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
  
  export default YourPetsPage;
  