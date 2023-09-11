import React from 'react';
import { useDispatch, useSelector } from "react-redux"
import { useHistory, useParams, Link } from 'react-router-dom/cjs/react-router-dom.min';
import swal from 'sweetalert';

export function DeletePet() {

    const pet = useSelector((store) => store.petinfo);
    const dispatch = useDispatch();
    const history = useHistory();
    const { id } = useParams();

    const handleDelete = (event) => {
        event.preventDefault();

        // Use SweetAlert to show a confirmation dialog
        swal({
            title: 'Are you sure?',
            text: 'Do you want to delete this pet?',
            icon: 'warning',
            buttons: ['Cancel', 'Delete Pet'],
            dangerMode: false,
        }).then((willAdd) => {
            if (willAdd) {
                // If the user clicks "Delete Pet" in the SweetAlert dialog, proceed with deleting the pet
                console.log("in Delete", pet.id, pet)
                dispatch({
                    type: 'DELETE_PET',
                    payload: pet.id
                })
                // Redirect to YourPetsPage
                history.push('/yourpets')
            } else {
                // If the user clicks "Cancel" or closes the dialog, do nothing
            }
        });
    }
    return (<>
        <button className='btn' onClick={handleDelete}>Delete Pet</button>
    </>
    );
}
