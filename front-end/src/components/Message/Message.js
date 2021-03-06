import React,{useEffect, useState, useRef} from 'react'
import './Message.css'
import axios from 'axios';

function Message(props) {
    const [Message , setMessage] = useState("");
    const [Number, setNumber] =useState("");
    const [Button, setButton] = useState({})
    const [File, setFile] = useState({csvfile:null})
    const file_ref = useRef()

    const form_data = new FormData()

    const handleSubmit = (evt) =>{
        // alert(`Are you sure you want to send this message? \n ${name} \n `);
        const r = window.confirm('Are you sure about this?');
        console.log(File);
        if(r === true){
            setButton({'number':Number, 'message':Message, 'file':File.csvfile})
            console.log(Button)
        }
        evt.preventDefault();

    }

    useEffect(() => {
        form_data.append('number', Button.number)
        form_data.append('message', Button.message)
        form_data.append('file', Button.file)
        // console.log(form_data.entries())

        axios.post('http://127.0.0.1:8000/wel/', form_data)
        .then(function(res){
            // console.log(res.data)
            setNumber("")
            setMessage("")
            file_ref.current.value = ''
            setFile({csvfile:null})

        })
        .catch(err => {
            console.log(err)
        })
    }, [Button])

    return (
        <form onSubmit={handleSubmit} className='Form'>

            <label className='label'>
                Message
            </label>
{/*             
                <input type="textarea" value={name} 
                onChange={e=>setName(e.target.value)}/> */}
                <textarea value = {Message} onChange={e=>setMessage(e.target.value)} className='text-box'/>

                <input type ="text" value = {Number} onChange={d=>setNumber(d.target.value)} className='number-box'/>
                <input type = "file" label="upload csv" onChange={e=>setFile({csvfile:e.target.files[0]})} 
                ref={file_ref} className='file-upload'/>

            <button type='submit' className='button'>
                submit
            </button>
        </form>
    )
}

export default Message
