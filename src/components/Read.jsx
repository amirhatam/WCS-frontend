import { MDBBtn, MDBCardTitle, MDBCol, MDBContainer, MDBRow } from 'mdb-react-ui-kit'
import React from 'react';
import axios from "axios";



export default function Read(props) {

    const deleteArgonaute = async (e) => {
        try {
            const response = await axios.delete(`http://localhost:8080/argonaute/${e.target.value}/delete-argonaute`)
            if (!response) {
                console.error("response err:", response);
            }
            const responseData = await axios.get("http://localhost:8080/argonaute")
            props.setArgonaute(responseData.data)

        } catch (error) {
            console.log(error)
        }
    }

    return (
        <div>
            <MDBCardTitle className='my-5 display-6'>Membres de l'équipage</MDBCardTitle>

            <MDBContainer>
                <MDBRow className='py-5'>
                    {
                        props.argonaute.map((e, i) => {
                            return (
                                <MDBCol
                                    size='4'
                                    key={i}
                                    className="text-capitalize my-5"
                                >
                                    <MDBCardTitle className='fw-light mb-4'>
                                        {e.argonaute}
                                    </MDBCardTitle>
                                    <MDBBtn
                                        color="danger"
                                        className='btn-rounded'
                                        onClick={deleteArgonaute}
                                        value={e._id}
                                    >Supprimer</MDBBtn>
                                </MDBCol>
                            )
                        })
                    }
                </MDBRow>
            </MDBContainer>
        </div>
    )
}
