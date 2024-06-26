import React from 'react'
import { NavLink } from 'react-router-dom'
import { MdHomeFilled } from 'react-icons/md'
import { GiBabyBottle, GiBowTie, GiLipstick } from 'react-icons/gi'

const Navbar = ({containerStyles}) => {
  return (
    <nav className={`${containerStyles}`}>
        <NavLink to={'/'}>
            <div className='flexCenter gap-x-1'>
                <MdHomeFilled/>Home
            </div>
        </NavLink>
        <NavLink to={'/men'}>
            <div className='flexCenter gap-x-1'>
                <GiBowTie/>Men
            </div>
        </NavLink>
        <NavLink to={'/women'}>
            <div className='flexCenter gap-x-1'>
                <GiLipstick/>Women
            </div>
        </NavLink>
        <NavLink to={'/kids'}>
            <div className='flexCenter gap-x-1'>
                <GiBabyBottle/>Kids
            </div>
        </NavLink>
    </nav>
  )
}

export default Navbar