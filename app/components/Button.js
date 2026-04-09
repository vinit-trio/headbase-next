import Link from "next/link";

const Button = ({ children, text, variant, classes, link }) => {

  return (
    <Link href={link} className={`${variant === 'primary' ? 'btn_blue' : 'btn_transparent'} btn ${classes}`}>
      <span>{text}</span>
      {children}
    </Link>
  )
}

export default Button