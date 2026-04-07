import React, { Children } from 'react'

const Button = ({ children, text, variant, classes }) => {
  return (
    <a href="#" className={`${variant === 'primary' ? 'btn_blue' : 'btn_transparent'} btn ${classes}`}>
        <span>{text}</span>
        {children}
    </a>
  )
}

export default Button