import { MDBBtn, MDBCardTitle, MDBCol, MDBContainer, MDBInput, MDBRow } from 'mdb-react-ui-kit'
import React, { useState, useEffect } from 'react';
import axios from "axios";


export default function Main() {
    const [input, setInput] = useState("")
    const [argonaute, setArgonaute] = useState([]);



    const getInputValue = (e) => {
        const userValue = e.target.value.toLowerCase()
        setInput(userValue)
    }

    const addArgonaute = async () => {
        try {
            const response = await axios.post('http://localhost:8080/argonaute/add', { argonaute: input })
            const responseData = await axios.get("http://localhost:8080/argonaute")
            setArgonaute(responseData.data)

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
                    // console.log(response.data);
                    setArgonaute(response.data)

                }

            } catch (err) {
                console.error(err);
            }
        })();
    }, [])

    // console.log(argonaute);

    return (
        <MDBContainer className='text-center'>
            <MDBCardTitle className='my-5 display-6'>Ajouter un(e) Argonaute</MDBCardTitle>
            <MDBRow className="input-group justify-content-center pb-5 block-example border-bottom border-gray">
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

            <MDBCardTitle className='my-5 display-6'>Membres de l'équipage</MDBCardTitle>

            <MDBContainer>
                <MDBRow>
                    {
                        argonaute.map((e, i) => {
                            return (
                                <MDBCol
                                    size='4'
                                    key={i}
                                    className="text-capitalize my-3"
                                >
                                    <MDBCardTitle className='fw-light'>
                                        {e.argonaute}
                                    </MDBCardTitle>
                                </MDBCol>
                            )
                        })
                    }
                </MDBRow>
            </MDBContainer>
        </MDBContainer>
    )
}
