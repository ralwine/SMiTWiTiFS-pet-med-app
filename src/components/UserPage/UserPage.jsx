import React from 'react';
import LogOutButton from '../LogOutButton/LogOutButton';
import { useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom/cjs/react-router-dom.min';
import ProtectedRoute from '../ProtectedRoute/ProtectedRoute';

function UserPage() {
  // this component doesn't do much to start, just renders some user reducer info to the DOM
  const user = useSelector((store) => store.user);

  const history = useHistory();

  const navigateToYourPetsPage = () => {
    history.push('/yourPets'); // Use push to navigate to another page
  };

  return (
    <>
      <div className="container">
        <h2>Welcome, {user.username}!</h2>
        <p>Your ID is: {user.id}</p>
      </div>
      <div className='buttons'>
        <LogOutButton className="btn" />
      
      {/* add 'Continue" btn to navigate to Your Pets page */}
      <button className='btn'onClick={navigateToYourPetsPage}>Continue</button>
      </div>
      {/* <ProtectedRoute
        // logged in shows InfoPage else shows LoginPage
        exact
        path="/petInfo"
      >
        
      </ProtectedRoute> */}

    </>
  );
}

// this allows us to use <App /> in index.js
export default UserPage;
