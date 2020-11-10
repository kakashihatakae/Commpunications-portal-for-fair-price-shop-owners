import React,{useEffect, useState} from 'react'
import './Message.css'
import axios from 'axios';

function Message(props) {
    const [Message , setMessage] = useState("");
    const [Number, setNumber] =useState("");
    const [Button, setButton] = useState({})

    const handleSubmit = (evt) =>{
        // alert(`Are you sure you want to send this message? \n ${name} \n `);
        const r = window.confirm('Are you sure about this?');
        if(r === true){
            setButton({'number':Number, 'message':Message})
            console.log(Button)
        }
        evt.preventDefault();

    }

    useEffect(() => {
        axios.post('http://127.0.0.1:8000/wel/', Button)
        .then(function(res){
            console.log(res.data)
            setNumber("")
            setMessage("")
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
            
            <button type='submit' className='button'>
                submit
            </button>
        </form>
    )
}

export default Message
