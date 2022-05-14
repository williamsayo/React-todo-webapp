import React from 'react';
import { Link } from 'react-router-dom';
import Button from './Button';

const Home = () => {
  return (
    <div className='intro-container'>
        <i className="fa fa-check-square fa-7x fa-beat-fade intro-item" style={{'--fa-fade-opacity'
        :'0.5',
        '--fa-animation-delay':'2000ms',
        '--fa-animation-duration':'2000ms'}}></i>
        <span className='intro-item'> Order your daily affairs with ease</span>
        <Link to='/to-do'>
            <Button btnClass='btn btn-primary intro-item' btnType='button' title='Explore' />
        </Link>
    </div>
  )
}

export default Home
