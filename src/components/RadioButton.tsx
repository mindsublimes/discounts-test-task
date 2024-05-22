import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { selectOption } from '../store/slice/optionSlice';
import { RootState } from '../store';

const RadioButtons: React.FC = () => {
  const dispatch = useDispatch();
  const selectedOption = useSelector((state: RootState) => state.option.selectedOption);

  const handleOptionChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    dispatch(selectOption(e.target.value));
  }; 
    
  return (
    <div className="p-4">
      <h4 className="font-bold">Select an option:</h4>
      <div className="p-4 flex gap-4 items-center">
        <label className="flex items-center gap-2">
          <input
            type="radio"
            value="Option A"
            checked={selectedOption === 'Option A'}
            onChange={handleOptionChange}
          />
          Option A
        </label>
        <label className="flex items-center gap-2">
          <input
            type="radio"
            value="Option B"
            checked={selectedOption === 'Option B'}
            onChange={handleOptionChange}
          />
          Option B
        </label>
        <label className="flex items-center gap-2">
          <input
            type="radio"
            value="Option C"
            checked={selectedOption === 'Option C'}
            onChange={handleOptionChange}
          />
          Option C
        </label>
      </div>
    </div>
  );
};

export default RadioButtons;
