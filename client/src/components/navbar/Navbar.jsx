import React, { useState } from 'react'
import "./Navbar.scss"

import { AiOutlineMenu } from "react-icons/ai";

const Navbar = () => {
	const [toogleNav,setToogleNav] = useState(false)
	
	function openNavbar(){
		toogleNav ? setToogleNav(false) : setToogleNav(true)
	}

  return (
	<div className="nav_container">
		<nav className='navbar'>
    	<div className="logo">
			<a href="" className='logo_text'>
				<div>Pixel</div>
				<div>Position</div>
			</a>
		</div>
		<ul className={`menu sm-hidden ${toogleNav ? 'active' :'' }`}>
			<li className="menu_li">
				<a href="/jobs" className='menu_link'>Jobs</a>
			</li>
			<li className="menu_li">
				<a href="/career" className='menu_link'>career</a>
			</li>
			<li className="menu_li">
				<a href="/salaries" className='menu_link'>salaries</a>
			</li>
			<li className="menu_li">
				<a href="/Companies" className='menu_link'>Companies</a>
			</li>
			<li className="menu_li">
				<a href="/post_job" className='menu_link lg-hidden'>Post a job</a>
			</li>
		</ul>
		<div className='toogle_menu lg-hidden' onClick={()=>openNavbar()}>
			<span><AiOutlineMenu/></span>
		</div>
		<a href=""className='post_job_btn sm-hidden'>post a job</a>
    </nav>
	</div>
    
  )
}

export default Navbar
