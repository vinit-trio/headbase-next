const Button = ({ children, text, variant, classes, link }) => {
  return (
    <a href={link} className={`${variant === 'primary' ? 'btn_blue' : 'btn_transparent'} btn ${classes}`}>
        <span>{text}</span>
        {children}
    </a>
  )
}

export default Button