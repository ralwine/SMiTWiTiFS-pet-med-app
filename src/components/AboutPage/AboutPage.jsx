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
          <p>This about page is for anyone to read!</p>
        </div>
      </div>
      
  );
}

export default AboutPage;
