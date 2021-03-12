import React from 'react'
import './header.css'


function Header() {
    return (
        <div className="header">
            <h1 className="header_head">Good shepherd School</h1>
            <h1 className="header_head2">Vill. nagal bhaga,tehsil. kalka,distt. panchkula</h1>
            <h1 className="header_head3">mob : 9996305570</h1>
            {/* <h1 className="header_head4">Class: <input type="text" className="profile_input" /></h1> */}
            <img src={process.env.PUBLIC_URL + "/Images/IMG-20210216-WA0010-removebg-preview.png"} alt="hero_img" />
            <hr className="header_line"/>
         
        </div>
    )
}

export default Header
