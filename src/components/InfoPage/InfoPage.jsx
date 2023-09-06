import React from 'react';
import { useHistory } from 'react-router-dom/cjs/react-router-dom.min';

// This is one of our simplest components
// It doesn't have local state
// It doesn't dispatch any redux actions or display any part of redux state
// or even care what the redux state is

function InfoPage() {

  const history = useHistory();
  
  const navigateToAddPetsPage = () => {
    history.push('/addPets'); // Use push to navigate to another page
  };

  return (
    <>
      <div className="container">
        <p>Your Pets</p>
      </div>
      <div className='buttons'>
        <button className='btn' onClick={navigateToAddPetsPage}>Add Pets</button>
      </div>
    </>
  );
}

export default InfoPage;
