import { Link } from "react-router-dom"
import { Button, ButtonProps } from "./ui/button"

type ButtonLinkProps = ButtonProps & {
  text: string
  url: string
}

const ButtonLink = ({ text, url, variant, className }: ButtonLinkProps) => {
  return (
    <Button asChild variant={variant} className={className}>
      <Link to={url}>{text}</Link>
    </Button>
  )
}
export default ButtonLink
