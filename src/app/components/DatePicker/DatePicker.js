"use client";  // Ensures this component runs on the client-side

import React, { createContext } from 'react';
import CalendarPreview from './CalendarPreview';
import { useDateContext } from './DateContext'; // Assumes DateContext is defined elsewhere
import RecurrenceOptions from './RecuurenceOptions';
// import RecurrenceOptions from './RecurrenceOptions'; // Fixed the typo in import

const DatePicker = () => {
  const { startDate, endDate, setStartDate, setEndDate } = useDateContext();

  return (
    <div className="p-4 bg-white shadow-md rounded-md max-w-md mx-auto">
      <h2 className="text-xl font-semibold mb-4">Select Recurring Dates</h2>

      <div className="mb-4">
        <label className="block font-medium">Start Date:</label>
        <input
          type="date"
          value={startDate || ''}  // Add fallback in case startDate is null/undefined
          onChange={(e) => setStartDate(e.target.value)}
          className="border p-2 rounded-md w-full"
        />
      </div>

      <div className="mb-4">
        <label className="block font-medium">End Date (optional):</label>
        <input
          type="date"
          value={endDate || ''}  // Add fallback in case endDate is null/undefined
          onChange={(e) => setEndDate(e.target.value)}
          className="border p-2 rounded-md w-full"
        />
      </div>

      {/* <RecurrenceOptions />  Assuming this is a correct component */}
      <RecurrenceOptions />
      <CalendarPreview />    {/* Assuming this component works properly */}
    </div>
  );
};

export default DatePicker;
