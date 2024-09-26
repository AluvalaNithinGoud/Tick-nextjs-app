 import React from 'react';
import { useDateContext } from './DateContext';

const RecurrenceOptions = () => {
  const { recurrenceType, setRecurrenceType, recurrenceInterval, setRecurrenceInterval } = useDateContext();

  return (
    <div className="mb-4">
      <label className="block font-medium">Recurrence:</label>
      <select
        value={recurrenceType}
        onChange={(e) => setRecurrenceType(e.target.value)}
        className="border p-2 rounded-md w-full"
      >
        <option value="daily">Daily</option>
        <option value="weekly">Weekly</option>
        <option value="monthly">Monthly</option>
        <option value="yearly">Yearly</option>
      </select>

      <div className="mt-4">
        <label className="block font-medium">Repeat Every:</label>
        <input
          type="number"
          value={recurrenceInterval}
          onChange={(e) => setRecurrenceInterval(e.target.value)}
          className="border p-2 rounded-md w-full"
        />
      </div>
    </div>
  );
};

export default RecurrenceOptions;
