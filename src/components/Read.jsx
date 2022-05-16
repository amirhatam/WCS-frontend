import { MDBBtn, MDBCard, MDBCardBody, MDBCardGroup, MDBCardImage, MDBCardTitle, MDBCol, MDBContainer, MDBRow } from 'mdb-react-ui-kit'
import React, { useState } from 'react';
import axios from "axios";

import one from '../assets/images/1.jpg'
import two from '../assets/images/2.jpg'
import three from '../assets/images/3.jpg'
import four from '../assets/images/4.jpg'
import five from '../assets/images/5.jpg'
import six from '../assets/images/6.jpg'
import seven from '../assets/images/7.jpg'
import eight from '../assets/images/8.jpg'
import nine from '../assets/images/9.jpg'


export default function Read(props) {
    const [arrayImg] = useState([
        one,
        two,
        three,
        four,
        five,
        six,
        seven,
        eight,
        nine,
        one,
        two,
        three,
        four,
        five,
        six,
        seven,
        eight,
        nine,
    ])

    const deleteArgonaute = async (e) => {
        try {
            // const response = await axios.delete(`/argonaute/${e.target.value}/delete-argonaute`)
            const response = await axios.delete(`http://localhost:8080/argonaute/${e.target.value}/delete-argonaute`)
            if (!response) {
                console.error("response err:", response);
            }
            // const responseData = await axios.get("/argonaute")
            const responseData = await axios.get("http://localhost:8080/argonaute")
            props.setArgonaute(responseData.data)

        } catch (error) {
            console.log(error)
        }
    }



    return (
        <div className='bg-dark view'>
            <MDBContainer>
                <MDBCardTitle className='text-light py-5 display-6'>Membres de l'équipage</MDBCardTitle>
                <MDBCardGroup>
                    <MDBRow className='justify-content-around py-5'>
                        {
                            props.argonaute.map((e, i) => {
                                return (
                                    <MDBCard key={i} className="col-lg-3 col-8 px-0 mb-5 mx-3">
                                        <MDBCardImage
                                            src={arrayImg[i]}
                                            // top hover
                                            overlay="white-slight"
                                            alt=""
                                            className="img-fluid"
                                        />
                                        <MDBCardBody>
                                            <MDBCardTitle className='text-capitalize' tag="h5">{e.argonaute}</MDBCardTitle>
                                            <MDBBtn
                                                color="danger"
                                                className='btn-rounded'
                                                onClick={deleteArgonaute}
                                                value={e._id}
                                            >Supprimer</MDBBtn>
                                        </MDBCardBody>
                                    </MDBCard>
                                )
                            })
                        }
                    </MDBRow>
                </MDBCardGroup>
            </MDBContainer>
        </div>
    )
}
