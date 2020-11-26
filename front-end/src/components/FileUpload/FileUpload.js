import React, { useEffect, useState } from 'react';

function FileUpload(){
    const [File, setFile] = useState({csvfile:null})
    const [Button, setButton] = useState({})

    // const handleSUbmit = (event) => {
    //     set
    // }

    // useEffect (() => {

    // }, [Button])
    return (
        <div>
            <input type = "file" label="upload csv" onChange={e=>setFile(e.target.files[0])}/>
            <button type='submit' className='button'>submit</button>
        </div>
    )
}