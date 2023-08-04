import React from 'react'
import './UserProfileCard.css'
import profile_icon from '../Assets/dp.jpg'

export const UserProfileCard = () => {
  return (
    <div className="upc">
        <div className="gradiant"></div>
        <div className="profile-down">
            <img src={profile_icon} alt="" />
            <div className="profile-title">Nayeem Khan</div>
            <div className="profile-discription">I'm a front end developer. I work for a company called TeamExio since 2022.</div>
            <div className="profile-button">
                <a href="mailto:abumdnayeemkhan@gmail.com">Contact Me</a>
            </div>
        </div>
    </div>
  )
}
