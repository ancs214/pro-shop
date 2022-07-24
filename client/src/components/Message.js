import { Alert } from 'react-bootstrap'

const Message = ({ variant, children }) => {
  return <Alert variant={variant}>{children}</Alert>
}

//will default to blue color
Message.defaultProps = {
  variant: 'info',
}

export default Message
