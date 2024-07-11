import {useSelector} from 'react-redux';
import {RootState} from '../../../app/store';
import './Display.css';

const Display = () => {
  const codeValue = useSelector((state: RootState) => state.pinCode.code);
  const message = useSelector((state: RootState) => state.pinCode.message);

  let messageClass;

  if (message === 'Access Granted') {
    messageClass = 'success';
  } else if (message === 'Access Denied') {
    messageClass = 'error';
  }

  return (
    <div className={`display ${messageClass}`}>
      {codeValue.replace(/./g, '*')}
      {message && <div className="message">{message}</div>}
    </div>
  );
};

export default Display;