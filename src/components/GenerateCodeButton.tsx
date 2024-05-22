import React, { useState } from 'react';

const GenerateCodeButton: React.FC = () => {
  const [generatedCode, setGeneratedCode] = useState('');

  const generateRandomCode = () => {
    const chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    const nums = '0123456789';
    let result = '';
    for (let i = 0; i < 6; i++) {
      if (i === 0) {
        result += chars.charAt(Math.floor(Math.random() * chars.length));
      } else {
        result += nums.charAt(Math.floor(Math.random() * nums.length));
      }
    }
    return result;
  };

  const handleClick = () => {
    const randomCode = generateRandomCode();
    setGeneratedCode(randomCode);
  };

  return (
    <div className="p-4">
      <button onClick={handleClick} className="bg-blue-500 text-white p-2">
        Generate Discount Code
      </button>
      {generatedCode && <p className="mt-2">{generatedCode}</p>}
    </div>
  );
};

export default GenerateCodeButton;
