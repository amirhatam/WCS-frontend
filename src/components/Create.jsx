import { MDBBtn, MDBCardTitle, MDBCol, MDBInput, MDBRow } from 'mdb-react-ui-kit'
import React, { useEffect, useState } from 'react';
import axios from "axios";
import AnimationBG from './AnimationBG';



export default function Create(props) {
    const [valueErr, setValueErr] = useState('')

    const getInputValue = (e) => {
        const userValue = e.target.value.toLowerCase()

        props.setInput(userValue)
        setValueErr("");


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
            // Condition for validation alphabets only
            var letters = /^[A-Za-z]+$/
            if (props.input.match(letters)) {
                const response = await axios.post('http://localhost:8080/argonaute/add', { argonaute: props.input })
                const responseData = await axios.get("http://localhost:8080/argonaute")
                props.setArgonaute(responseData.data)

                if (!response) {
                    console.error("response err:", response);
                }
            } else {
                setValueErr("Please enter alphabets only");
            }

        } catch (err) {
            console.log(err)
        }
    }

    useEffect(() => {
        (async () => {
            try {
                const response = await axios.get("http://localhost:8080/argonaute")

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

            <MDBRow className="input-group justify-content-center mx-0" >
                <MDBCol size='2' className="input-group-prepend px-0">
                    <MDBInput
                        label='Ajouter votre Argonaute'
                        onChange={getInputValue}
                        id='form'
                        type='text'
                        className='form-control'
                    />
                    <p className='text-danger'>{valueErr} </p>
                </MDBCol>

                <MDBCol size='1' className="input-group-prepend px-0">
                    <MDBBtn id="btn" onClick={addArgonaute}>
                        Envoyer
                    </MDBBtn>
                </MDBCol>

            </MDBRow>


            <AnimationBG />

        </div>
    )
}
