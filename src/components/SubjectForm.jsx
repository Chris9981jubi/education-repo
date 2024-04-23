import React, { useState } from 'react';

const SubjectForm = ({ addSubject }) => {
  // State for storing subject name
  const [subjectName, setSubjectName] = useState('');

  // Function to handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    if (!subjectName.trim()) return; // If subject name is empty, do nothing
    addSubject(subjectName); // Call addSubject function from parent component
    setSubjectName(''); // Reset subjectName state
  };

  return (
    <form onSubmit={handleSubmit}>
      {/* Input field for entering subject name */}
      <input
        type="text"
        placeholder="Enter subject name"
        value={subjectName}
        onChange={(e) => setSubjectName(e.target.value)}
      />
      {/* Button to submit the form */}
      <button type="submit">Add Subject</button>
    </form>
  );
};

export default SubjectForm;
