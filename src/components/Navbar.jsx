import React from 'react'
import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom'

const Navbar = () => {
    const count = useSelector((state)=>state.app.users)
    return (
        <div style={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-between' }}>
            <div style={{ margin: '20px', display: 'flex', flexDirection: 'row', gap: 20, alignItems:'center' }}>
                <h3>RTK</h3>
                <div></div>
                <Link style={{textDecoration:'none',color:'maroon',cursor:'pointer'}} to='/'>
                    <h6>Create Post</h6>
                </Link>
                <Link style={{textDecoration:'none',color:'maroon',cursor:'pointer'}} to='/read'>
                    <h6>All Post ({count.length})</h6>
                </Link>
            </div>
            <div style={{ margin: '20px' }}>
                <input style={{ width: '500px', borderRadius: '5px', border: "1px solid black", alignItems: 'center' }} placeholder='Search'></input>
            </div>
        </div>
    )
}

export default Navbar