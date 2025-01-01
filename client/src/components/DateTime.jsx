import React from 'react'
import { useState, useEffect } from 'react';

const DateTime = () => {
     // State to store the formatted date
  const [currentDate, setCurrentDate] = useState('');

  // Function to format the current date
  const formatDate = (date) => {
    const options = { year: 'numeric', month: 'long', day: 'numeric' };
    return new Intl.DateTimeFormat('en-US', options).format(date);
  };

  // Use effect to set the date when the component mounts
  useEffect(() => {
    const today = new Date();
    setCurrentDate(formatDate(today));
  }, []);

  return (
    <em>{currentDate }</em>
  )
}

export default DateTime