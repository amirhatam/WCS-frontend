import { MDBCardTitle, MDBCol, MDBContainer, MDBRow } from 'mdb-react-ui-kit'
import React from 'react';


export default function Read(props) {

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
                                    className="text-capitalize my-2"
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
        </div>
    )
}
