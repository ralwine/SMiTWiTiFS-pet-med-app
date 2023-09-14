import React from 'react';
import { useDispatch, useSelector } from "react-redux"
import { useHistory, useParams, Link } from 'react-router-dom/cjs/react-router-dom.min';
import swal from 'sweetalert';

export function DeleteMed() {

    const yourMed = useSelector((store) => store.medinfo);
    const yourPet = useSelector((store) => store.petinfo);
    const dispatch = useDispatch();
    const history = useHistory();
    const { id } = useParams();

    const handleDelete = (event) => {
        event.preventDefault();

        // Use SweetAlert to show a confirmation dialog
        swal({
            title: 'Are you sure?',
            text: 'Do you want to delete this medication?',
            icon: 'warning',
            buttons: ['Cancel', 'Delete Medication'],
            dangerMode: false,
        }).then((willAdd) => {
            if (willAdd) {
                // If the user clicks "Delete Medication" in the SweetAlert dialog, proceed with deleting the pet
                console.log("in Delete", yourMed.id, yourMed)
                dispatch({
                    type: 'DELETE_MED',
                    payload: yourMed.id
                })
                // Redirect to PetInfo Page
                history.push(`/petInfo/${yourPet.id}`)
            } else {
                // If the user clicks "Cancel" or closes the dialog, do nothing
            }
        });
    }

    return <>
        <button className='btn' onClick={handleDelete}>Delete Medication</button>
    </>;
}
