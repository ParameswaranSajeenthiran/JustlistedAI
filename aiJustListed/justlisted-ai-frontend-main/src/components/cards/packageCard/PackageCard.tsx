import React from 'react'
import { CheckSvg } from '../../../assets/icon'
import './packageCard.scss'
function PackageCard() {
  return (
    <div className="your-pack">
    <div className="header">
      <span>Small</span>
      <p>For Individual Users</p>
    </div>
    <div>$10/mon</div>
    <div className="upgradeplan">Upgrade Plan</div>
    <ul>
      <li>
        <CheckSvg />
        Lorem ipsum dolor sit amet
      </li>
      <li>
        <CheckSvg />
        Lorem ipsum dolor sit amet
      </li>
      <li>
        <CheckSvg />
        Lorem ipsum dolor sit amet
      </li>
      <li>
        <CheckSvg />
        Lorem ipsum dolor sit amet
      </li>
    </ul>
    <div className="timer">
      <div className="time">Time Left</div>
      <div className="timeleft">18d : 03h : 54s</div>
    </div>
  </div>
  )
}

export default PackageCard
