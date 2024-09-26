 import React from 'react';
import RecurrenceOptions from './RecurrenceOptions';
import CalendarPreview from './CalendarPreview';
import { useDateContext } from './DateContext';

const DatePicker = () => {
  const { startDate, endDate, setStartDate, setEndDate } = useDateContext();

  return (
    <div className="p-4 bg-white shadow-md rounded-md max-w-md mx-auto">
      <h2 className="text-xl font-semibold mb-4">Select Recurring Dates</h2>

      <div className="mb-4">
        <label className="block font-medium">Start Date:</label>
        <input
          type="date"
          value={startDate}
          onChange={(e) => setStartDate(e.target.value)}
          className="border p-2 rounded-md w-full"
        />
      </div>

      <div className="mb-4">
        <label className="block font-medium">End Date (optional):</label>
        <input
          type="date"
          value={endDate || ''}
          onChange={(e) => setEndDate(e.target.value)}
          className="border p-2 rounded-md w-full"
        />
      </div>

      <RecurrenceOptions />
      <CalendarPreview />
    </div>
  );
};

export default DatePicker;
