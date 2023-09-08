import React from 'react';
import { useHistory } from 'react-router-dom/cjs/react-router-dom.min';
import AddPetsPage from '../AddPetsPage/AddPetsPage';
import swal from 'sweetalert';
// This is one of our simplest components
// It doesn't have local state
// It doesn't dispatch any redux actions or display any part of redux state
// or even care what the redux state is

function InfoPage() {

  const history = useHistory();
  // GET pets
  const fetchYourPets = (event) => {
    event.preventDefault();
  }

  const navigateToAddPetsPage = () => {
    history.push('/addPets'); // Use push to navigate to another page
  };

  return (
    <>
      <div className="container">
        <p>Your Pets</p>
        {/* {emotionsList.map((item, index) =>
                <div className='feedbackInfo'>
                  <div key={index}>
                    <h3>{item.feeling_rating}</h3>
                    <h3>{item.understanding_rating}</h3>
                    <h3>{item.support_rating}</h3>
                    <h3>{item.comments}</h3>
                  </div>
                </div>
              )} */}
      </div>
      <div className='buttons'>
        <button className='btn' onClick={navigateToAddPetsPage}>Add Pets</button>
      </div>
    </>
  );
}

export default InfoPage;
