import React from 'react';
import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom/cjs/react-router-dom.min';
import swal from 'sweetalert';

function AddMedsPage() {

    const petID = useSelector((store) => store.pets)
    const [medName, setMedName] = useState('');
    const [medDetails, setMedDetails] = useState('');
    const dispatch = useDispatch();
    const errors = useSelector((store) => store.errors);
    const history = useHistory();

    const addNewMed = (event) => {
        event.preventDefault();

        swal({
            title: 'Are you sure?',
            text: 'Do you want to add this medication?',
            icon: 'warning',
            buttons: ['Cancel', 'Add Medication'],
            dangerMode: false,
        }).then((willAdd) => {
            if (willAdd) {
                dispatch({
                    type: 'ADD_NEW_MED',
                    payload: {
                        petID: petID,
                        medName: medName,
                        medDetails: medDetails,
                    }
                })

                history.push(`/medInfo/${petID}/${medName}/${medDetails}`)
            } else {

            }
        })
    }

    // nav back to Pet Info page without saved changes
    const navigateToPetInfoPage = () => {
        history.push('/petInfo'); // Use push to navigate to another page
    };

    return (
        <>
            <form className='formPanel' onSubmit={addNewMed}>
                <h2>Add Med</h2>
                <div>
                    <label htmlFor='medName'>
                        Medication or Supplement Name:
                        <input
                            type='text'
                            name='medName'
                            placeholder='Name of medication'
                            value={medName}
                            required onChange={(event) => setMedName(event.target.value)}
                        />
                    </label>
                </div>
                <div>
                    <label htmlFor='medDetails'>
                        Instructions:
                        <input
                            type='text'
                            name='medDetails'
                            placeholder='include things like dosage, type (pill, injection, etc), when to administer, etc.'
                            value={medDetails}
                            required onChange={(event) => setMedDetails(event.target.value)}
                        />
                    </label>
                </div>
            </form>
            <div className='buttons'>
                <button className='btn' onClick={navigateToPetInfoPage}>Back to Pet Info</button>
                {/* need pop-up here and onChange event for POST */}
                <button className='btn' onClick={addNewMed}>Submit</button>
            </div>
        </>
    )

}

export default AddMedsPage;