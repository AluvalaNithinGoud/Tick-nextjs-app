 "use client";

 import React from 'react';
import { useDateContext } from './DateContext';
import { generateRecurrenceDates } from './utils';

const CalendarPreview = () => {
  const { startDate, endDate, recurrenceType, recurrenceInterval } = useDateContext();
  const recurringDates = generateRecurrenceDates(startDate, endDate, recurrenceType, recurrenceInterval);

  return (
    <div className="mt-4">
      <h3 className="font-semibold mb-2">Preview Recurring Dates:</h3>
      <ul className="list-disc pl-5">
        {recurringDates.map((date, index) => (
          <li key={index}>{date}</li>
        ))}
      </ul>
    </div>
  );
};

export default CalendarPreview;
