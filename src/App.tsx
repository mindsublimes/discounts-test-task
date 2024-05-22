import React from 'react';
import RadioButtons from './components/RadioButton';
import DiscountCodeInput from './components/DiscountCodeInput';
import GenerateCodeButton from './components/GenerateCodeButton';
import NoteField from './components/NoteField';

const App: React.FC = () => {
  return (
    <div className="flex justify-center items-center h-screen bg-gray-100 p-4 gap-4 flex-col">
      <div className="container mx-auto">
        <div className="bg-white rounded-lg shadow-lg p-4">
          <h1 className="text-2xl font-bold mb-4 text-center text-blue-500">React Task App</h1>
          <div className="grid grid-cols-1 md:grid-cols-1 gap-4">
            <div className="bg-gray-100 rounded-lg shadow-lg p-4">
              <RadioButtons />
            </div>
            <div className="bg-gray-100 rounded-lg shadow-lg p-4">
              <h3 className="text-lg font-bold mb-4 ">Enter a discount code:</h3>
              <DiscountCodeInput />
              <GenerateCodeButton />
            </div>
            <div className="bg-gray-100 rounded-lg shadow-lg p-4">
              <h3 className="text-lg font-bold mb-4">Enter your notes:</h3>
              <NoteField />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default App;
