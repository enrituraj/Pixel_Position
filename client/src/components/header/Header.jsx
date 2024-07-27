import React from 'react'
import { AiOutlineSearch } from "react-icons/ai";
import "./header.scss"

const Header = () => {
  return (
    <div className='header'>
        <div className="container">
            <h1 className='title'>Let's find you a great job</h1>
            <form action="" method="post">
                <div className="input_search">
                    <input type="search" name="search_job" id="search job" placeholder='i am looking for...' />
                    <button className='btn_search'>
                        <AiOutlineSearch/>
                    </button>
                </div>
            </form>
        </div>
    </div>
  )
}

export default Header
