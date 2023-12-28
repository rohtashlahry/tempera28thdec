import React from 'react'
import './tempCommon.css'

export const HeroSection = (props: any) => {
  return (
    <div className='hero-container'>
        <div className='hero-main'>
            <h1 className='hero-heading'>{props.heading}</h1>
            <p className='hero-text'>{props.paraText}</p>
            <div className='hero-btn'>
              <button className='button-39'>{props.ButtonTitle}</button>
              <button className='btn2'>{props.ButtonTitle2}</button>
            </div>
        </div>
    </div>
  )
}
