 "use client";

 import React, { createContext, useContext, useState } from 'react';

const DateContext = createContext();

export const DateProvider = ({ children }) => {
  const [startDate, setStartDate] = useState('');
  const [endDate, setEndDate] = useState('');
  const [recurrenceType, setRecurrenceType] = useState('daily');
  const [recurrenceInterval, setRecurrenceInterval] = useState(1);

  return (
    <DateContext.Provider
      value={{
        startDate,
        setStartDate,
        endDate,
        setEndDate,
        recurrenceType,
        setRecurrenceType,
        recurrenceInterval,
        setRecurrenceInterval,
      }}
    >
      {children}
    </DateContext.Provider>
  );
};

// Custom hook for consuming the date context
export const useDateContext = () => useContext(DateContext);
