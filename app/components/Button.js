import { useClickSound } from "@/hooks/useClickSound";
import Link from "next/link";

const Button = ({ children, text, variant, classes, link }) => {

  const playClick = useClickSound();

  const handleClick = () => {
    playClick();
  };

  return (
    <Link onClick={handleClick} href={link} className={`${variant === 'primary' ? 'btn_blue' : 'btn_transparent'} btn ${classes}`}>
      <span>{text}</span>
      {children}
    </Link>
  )
}

export default Button