import React from 'react';
import { useHistory } from 'react-router-dom/cjs/react-router-dom.min';

function AddPetsPage() {

    const history = useHistory();

    const navigateToYourPetsPage = () => {
        history.push('/yourPets'); // Use push to navigate to another page
      };

    return (
        <>
            <div className='contaainer'>
                <p>Add Pets</p>
            </div>
            <div className='buttons'>
                <button className='btn' onClick={navigateToYourPetsPage}>Back to Your Pets</button>
                {/* need pop-up here and onChange event for POST */}
                <button className='btn'>Submit</button>
            </div>
        </>
    )
}

export default AddPetsPage;