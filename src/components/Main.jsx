import { MDBContainer } from 'mdb-react-ui-kit'
import React, { useState } from 'react';
import Create from './Create';
import Read from './Read';


export default function Main() {
    const [input, setInput] = useState("")
    const [argonaute, setArgonaute] = useState([]);


    return (
        <div className='text-center'>
            <Create
                setArgonaute={setArgonaute}
                setInput={setInput}
                input={input}
            />
            <Read argonaute={argonaute} setArgonaute={setArgonaute} />

        </div>
    )
}
