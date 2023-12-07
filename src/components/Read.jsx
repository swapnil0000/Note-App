import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector} from 'react-redux'
import { deleteUser, showUser } from '../feature/userDetailSlice';
import { Link } from 'react-router-dom';
import CustomModal from './CustomModal';

const Read = () => {

     const {users,loading}=useSelector((state)=>state.app)
    const dispatch=useDispatch();

    useEffect(()=>{
      dispatch(showUser());
    },[])

    const [showPopup,setShowPopup]=useState(false)

    const [id,setId]=useState();

    if(loading)
    {
        return (<h2>Loading</h2>)
    }

  return (
   <div style={{margin:'10px'}}>
   {showPopup && <CustomModal id={id} setShowPopup={setShowPopup}/>}
   <div style={{display:'flex',flexDirection:'column',alignItems:'center',margin:'10px',padding:'10px'}}><h1>All Data</h1></div>
   { users && users.map((ele)=>(
    <div key={ele.id} className="card w-50 m-auto" style={{display:'flex',alignItems:'center',flexDirection:'column',margin:'10px',gap:10}} >
    <div className="card-body" style={{display:'flex',flexDirection:'column',alignItems:'center'}}>
    
      <h5 className="card-title">{ele.name}</h5>
      <h6 className="card-subtitle mb-2 text-body-secondary">{ele.email}</h6>
      <h6>{ele.gender}</h6>
      <div style={{margin:'10px',display:'flex',flexDirection:'row',justifyContent:'space-between'}}>
      <button onClick={()=>[setId(ele.id),setShowPopup(true)]}  style={{margin:'10px', textDecoration:'none'}} >View</button>
        <Link to={`/edit/${ele.id}`} style={{margin:'10px', textDecoration:'none'}}>Edit</Link>
      <Link onClick={()=>dispatch(deleteUser(ele.id))} style={{margin:'10px', textDecoration:'none'}}>Delete</Link>
      </div>

    </div>
  </div>
   ))
   }
  </div>
  )
}

export default Read