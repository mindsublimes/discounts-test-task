import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setNote } from '../store/slice/notesSlice';
import { RootState } from '../store';

const NoteField: React.FC = () => {
  const dispatch = useDispatch();
  const [value, setValue] = React.useState(
    useSelector((state: RootState) => state.notes.note)
  );

  const handleChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setValue(e.target.value);
    dispatch(setNote(e.target.value));
  };

  React.useEffect(() => {
    dispatch(setNote(value));
  }, [dispatch, value]);

  return (
    <div className="p-4">
      <textarea
        value={value}
        onChange={handleChange}
        rows={4}
        cols={10}
        minLength={2}
        maxLength={2}
        spellCheck="false"
        aria-label="Enter your notes"
        title="Enter your notes"
        name="notes"
        id="notes"
        placeholder="Enter your notes"
        className="border p-2 w-full resize-none"
      />
    </div>
  );
};

export default NoteField;
