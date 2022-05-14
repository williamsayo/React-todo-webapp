import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <div className='nav'>
        <div className='title'>
          <Link to='/to-do' className='title-link'>  Activity organizer </Link>
        </div>
        <div className='nav-links'>
            <ul>
                <li> <Link to='/'> Home </Link> </li>
                <li> <Link to='/to-do' className='active'> To-do </Link> </li>
                <li> <Link to='/about'> About </Link> </li>
            </ul>
        </div>
    </div>
  )
}

export default Navbar
