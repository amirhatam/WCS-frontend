import { MDBBtn, MDBCardTitle, MDBCol, MDBInput, MDBRow } from 'mdb-react-ui-kit'
import React, { useEffect } from 'react';
import axios from "axios";


export default function Create(props) {

    const getInputValue = (e) => {
        const userValue = e.target.value.toLowerCase()
        props.setInput(userValue)
    }

    const addArgonaute = async () => {
        try {
            const response = await axios.post('http://localhost:8080/argonaute/add', { argonaute: props.input })
            const responseData = await axios.get("http://localhost:8080/argonaute")
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
