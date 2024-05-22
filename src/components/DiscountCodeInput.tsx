import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { setDiscountCode } from '../store/slice/discountSlice';

const DiscountCodeInput: React.FC = () => {
  const [code, setCode] = useState('');
  const [error, setError] = useState('');
  const [isValid, setIsValid] = useState(false);
  const [successMessage, setSuccessMessage] = useState('');
  const dispatch = useDispatch();

  const pattern = /^[A-Z]+[0-9]+$/;
  const validCodes = ['DISCOUNT2024', 'NEWCODE123', 'OLDCODE456', 'NEWCODE789'];

  const validateCode = (value: string) => {
    if (value.length < 6 || value.length > 12) {
      setError('Code length must be between 6 and 12 characters.');
      return false;
    }
    if (!pattern.test(value)) {
      setError('Invalid code format. Use uppercase letters followed by numbers.');
      return false;
    }
    if (!validCodes.includes(value)) {
      setError('Discount code not valid.');
      return false;
    }
    setError('');
    setSuccessMessage('Congrats! You got a 20% discount.');
    return true;
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter') {
      handleConfirm();
    }
  };

  const handlePaste = (e: React.ClipboardEvent<HTMLInputElement>) => {
    e.preventDefault();
    const text = e.clipboardData?.getData('text/plain');
    if (text && validateCode(text)) {
      setCode(text);
      setIsValid(true);
      dispatch(setDiscountCode(text));
    } else {
      setIsValid(false);
    }
  };

  const handleBlur = () => {
    if (!validateCode(code)) {
      setCode('');
      setIsValid(false);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setCode(value);
    setIsValid(false); // Reset isValid on change
    setSuccessMessage(''); // Clear success message on change
  };

  const handleConfirm = () => {
    if (validateCode(code)) {
      setIsValid(true);
      dispatch(setDiscountCode(code));
    } else {
      setIsValid(false);
    }
  };

  const copyCode = () => {
    navigator.clipboard.writeText(code);
  };

  const clearCode = () => {
    setCode('');
    setError('');
    setIsValid(false);
    setSuccessMessage('');
    dispatch(setDiscountCode(''));
  };

  return (
    <div className="p-4">
      <input
        type="text"
        value={code}
        onChange={handleChange}
        onKeyDown={handleKeyDown}
        onPaste={handlePaste}
        onBlur={handleBlur}
        placeholder="Enter discount code"
        className="border p-2"
      />
        {!isValid && (
          <button onClick={handleConfirm} className="bg-green-500 text-white p-2">
            Confirm Discount
          </button>
        )}
      {error && (
        <p className="text-red-500">{error}</p>
      )}
      {successMessage && (
        <p className="text-green-500">{successMessage}</p>
      )}
      {isValid && (
        <div className="mt-2">
          <button onClick={copyCode} className="bg-blue-500 text-white p-2">
            Copy code
          </button>
          <button onClick={clearCode} className="bg-red-500 text-white p-2">
            Clear code
          </button>
        </div>
      )}
    </div>
  );
};

export default DiscountCodeInput;
