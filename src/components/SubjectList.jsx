import React from 'react';

const SubjectList = ({ subjects }) => {
  return (
    <ul>
      {/* Map through subjects array and display each subject */}
      {subjects.map((subject) => (
        <li key={subject.id}>
          {/* Display subject name */}
          <span>{subject.name}</span>
          {/* Display subject hours */}
          <span>{subject.hours} hours</span>
        </li>
      ))}
    </ul>
  );
};

export default SubjectList;
