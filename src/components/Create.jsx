import { MDBBtn, MDBCardTitle, MDBCol, MDBInput, MDBRow } from 'mdb-react-ui-kit'
import React, { useEffect } from 'react';
import axios from "axios";


export default function Create(props) {

    const getInputValue = (e) => {
        const userValue = e.target.value.toLowerCase()
        props.setInput(userValue)

        // Clear input field after submit
        btn.addEventListener('click', function handleClick(event) {
            //  if you are submitting a form (prevents page reload)
            event.preventDefault();

            const formInput = document.getElementById('form');

            //  clear input field
            formInput.value = '';
        });
    }

    const addArgonaute = async () => {
        try {
            const response = await axios.post('/argonaute/add', { argonaute: props.input })
            const responseData = await axios.get("/argonaute")
            props.setArgonaute(responseData.data)

            if (!response) {
                console.error("response err:", response);
            }

        } catch (err) {
            console.log(err)
        }
    }



    useEffect(() => {
        (async () => {
            try {
                const response = await axios.get("/argonaute")

                if (response.status === 200) {
                    props.setArgonaute(response.data)
                }

            } catch (err) {
                console.error(err);
            }
        })();
    }, [])


    return (
        <div>
            <MDBCardTitle className='my-5 display-6'>Ajouter un(e) Argonaute</MDBCardTitle>

            <MDBRow className="input-group justify-content-center py-5 block-example border-bottom border-gray">
                <MDBCol size='2' className="input-group-prepend px-0">
                    <MDBInput
                        label='Ajouter votre Argonaute'
                        onChange={getInputValue}
                        id='form'
                        type='text'
                        className='mb-md-3 form-control'
                    />
                </MDBCol>

                <MDBCol size='1' className="input-group-prepend px-0">
                    <MDBBtn id="btn"
                        onClick={addArgonaute}
                    >
                        Envoyer
                    </MDBBtn>
                </MDBCol>
            </MDBRow>
        </div>
    )
}
