import React from 'react';

const Schedule = ({ subjects }) => {
  
  const totalHours = subjects.reduce((acc, curr) => acc + curr.hours, 0);

  return (
    <div>
      <h2>Study Schedule</h2>
    
      <p>Total Study Hours: {totalHours} hours</p>
    </div>
  );
};

export default Schedule;
