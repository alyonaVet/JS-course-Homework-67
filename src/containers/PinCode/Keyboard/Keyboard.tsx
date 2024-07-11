import './Keyboard.css';
import {useDispatch, useSelector} from 'react-redux';
import {RootState} from '../../../app/store';
import {pressNumKeys, checkPinCode, pressBackspace} from '../PinCodeSlice';

const Keyboard = () => {
  const numbers = [7, 8, 9, 4, 5, 6, 1, 2, 3];

  const dispatch = useDispatch();

  const codeValue = useSelector((state: RootState) => state.pinCode.code);
  const disabled = codeValue.length === 4;

  return (
    <div className="keyboard">
      {numbers.map((number) => (
        <button
          key={number}
          onClick={() => dispatch(pressNumKeys(number))}
          className="btn"
          disabled={disabled}
        >
          {number}
        </button>
      ))}
      <button className="btn" onClick={() => dispatch(pressBackspace())}>{`<`}</button>
      <button className="btn" onClick={() => dispatch(pressNumKeys(0))}>0</button>
      <button className="btn" onClick={() => dispatch(checkPinCode())}>E</button>
    </div>
  );
};

export default Keyboard;