import React from 'react';
import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom/cjs/react-router-dom.min';

function MedInfoPage () {

    const history = useHistory();

    // nav back to Pet Info page without saved changes
    const navigateToPetInfoPage = () => {
        history.push('/petInfo'); // Use push to navigate to another page
    };

    return(
        <>
         
         <div>
            {/*  */}
         </div>
        </>
    )
}

export default MedInfoPage;