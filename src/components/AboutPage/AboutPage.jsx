import React from 'react';
import { useHistory } from 'react-router-dom/cjs/react-router-dom.min';

// This is one of our simplest components
// It doesn't have local state,
// It doesn't dispatch any redux actions or display any part of redux state
// or even care what the redux state is'

function AboutPage() {


  return (

    <div className="container">
      <div>
        <h2>Thank you for using SMiTWiTiFS!</h2>
        <h2>Additional Features in planning</h2>
          <ul>
            <li>Mobile compatibility</li>
            <li>Timestamping for when a medication was last administered</li>
          </ul>
        <h2>Technologies Used</h2>
        <ul>
          <li>React</li>
          <li>Redux</li>
          <li>Redux-Saga</li>
          <li>Material-UI</li>
          <li>PostgreSQL</li>
          <li>Express</li>
          <li>NodeJs</li>
          <li>SweetAlert2</li>
        </ul>
        <h2>Extra Amazing Thanks to...</h2>
        <p>Key, Rachel, Dane, Andrew, Matt and Emma. Iolite cohort! My wife Sonia, and the menagerie (Ladybird, Biscuit, Zee and Louie).</p>

      </div>
      <div className='memorial'>
        <h3>In memory of the best cat ever, Muscatine (2005-2021)</h3>
      </div>
    </div>

  );
}

export default AboutPage;
