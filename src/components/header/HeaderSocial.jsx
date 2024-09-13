import React from 'react'
import { RiLinkedinBoxFill } from "react-icons/ri";
import { SiGithub } from "react-icons/si";
import leetcode from '../../assets/leetcode.png'

const HeaderSocial = () => {
  return (
    <div className='headerSocials'>
      <a href="https://www.linkedin.com/in/rahul-singh-3699541aa/" target='_blank'><RiLinkedinBoxFill /></a>
      <a href="https://github.com/pratap-rahul15" target='_blank'><SiGithub /></a>
      <a href="https://leetcode.com/u/rahul660singh/" target='_blank'><img src={leetcode} alt="leetcode" style={{width:"16px", height:"16px"}}/></a>
    </div>
  )
}

export default HeaderSocial
