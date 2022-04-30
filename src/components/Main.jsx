import { MDBBtn, MDBCardTitle, MDBCol, MDBInput, MDBRow } from 'mdb-react-ui-kit'
import React from 'react'

export default function Main() {
    return (
        <main className='text-center'>
            <MDBCardTitle className='my-5 display-6'>Ajouter un(e) Argonaute</MDBCardTitle>
            <MDBRow className="input-group justify-content-center my-5">
                <MDBCol size='3' className="input-group-prepend px-0">
                    <MDBInput
                        label='Ajouter votre Argonaute'
                        // onChange={getInputValue}
                        id='form'
                        type='text'
                        className='mb-md-3 form-control'
                    />
                </MDBCol>

                <MDBCol size='1' className="input-group-prepend px-0">
                    <MDBBtn id="btn"
                    // onClick={props.findMysteryWord}
                    >
                        Envoyer
                    </MDBBtn>
                </MDBCol>
            </MDBRow>

            <MDBCardTitle className='my-5 display-6'>Membres de l'équipage</MDBCardTitle>

            <section class="member-list">
                <div class="member-item">Eleftheria</div>
                <div class="member-item">Gennadios</div>
                <div class="member-item">Lysimachos</div>
            </section>
        </main>
    )
}
