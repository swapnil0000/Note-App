import React, { useState } from 'react'
import { useDispatch } from 'react-redux';
import { createUser } from '../feature/userDetailSlice';
import { useNavigate } from 'react-router-dom';
const Create = () => {


    const dispatch=useDispatch();
    const navigate=useNavigate();
    const [users,setUsers]=useState({});

    const getUserData=(e)=>{
        setUsers({...users,[e.target.name]:e.target.value})
    }

    const handleSubmit=(e)=>{
        e.preventDefault();
        console.log("users....",users);
        navigate('/read')

       dispatch(createUser(users));
    }

    return (
        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center'  , backgroundColor:'#a799b7'}}>
            <form onSubmit={handleSubmit} style={{width:'500px'  , height:'400px',backgroundColor:'lightnavy',marginTop:'40px'}}>
                <div style={{ display: 'flex', flexDirection: 'column', margin: '20px',alignItems:'center',color:'white' }}>
                    <label  >Name</label>
                    <input style={{width:'400px',borderRadius:'5px',border:'1px solid grey', margin:'5px'}} type='name' name='name' onChange={getUserData} />
                </div>

                <div style={{ display: 'flex', flexDirection: 'column', margin: '30px',alignItems:'center' ,color:'white' }}>
                    <label>Email</label>
                    <input style={{width:'400px',borderRadius:'5px',border:'1px solid grey', margin:'5px'}} type='name' name='email' onChange={getUserData} />
                </div>

                <div style={{ display: 'flex', flexDirection: 'column', margin: '30px',alignItems:'center', color:'white'}}>
                    <label>Age</label>
                    <input style={{width:'400px',borderRadius:'5px',border:'1px solid grey', margin:'5px'}} type='name' name='age' onChange={getUserData} />
                </div>

                <div style={{ display: 'flex', flexDirection: 'row', margin: '5px', alignItems:'center' , gap:15,color:'white'}}>
                    <label>Male</label>
                    <input value="Male" type='radio' name='gender' onChange={getUserData} />
                </div>

                <div style={{ display: 'flex', flexDirection: 'row', margin: '5px' , alignItems:"center",gap:15,color:'white'}}>
                    <label>Female</label>
                    <input value="Female" type='radio' name='gender' onChange={getUserData} />
                </div>

                <div style={{display:'flex',flexDirection:'column',alignItems:'center'}}>
                 <button style={{backgroundColor:'white',textDecoration:'none',boxShadow:'none',border:'none',color:'black',margin:'10px'}} >Submit</button>
                </div>

            </form>
        </div>
    )
}

export default Create