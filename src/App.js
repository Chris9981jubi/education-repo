import React, { useState, useEffect } from 'react';
import SubjectForm from './components/SubjectForm';
import SubjectList from './components/SubjectList';
import Schedule from './components/Schedule';
import './styles.css';

const App = () => {
  const [subjects, setSubjects] = useState([]);

  useEffect(() => {
    const storedSubjects = JSON.parse(localStorage.getItem('subjects'));
    if (storedSubjects) {
      setSubjects(storedSubjects);
    }
  }, []);

  const addSubject = (subjectName) => {
    const newSubject = {
      id: Math.random().toString(),
      name: subjectName,
      hours: 0,
    };
    setSubjects([...subjects, newSubject]);
  };
  useEffect(() => {
    localStorage.setItem('subjects', JSON.stringify(subjects));
  }, [subjects]);

  return (
    <div>
      <h1>Education Planner</h1>
      <SubjectForm addSubject={addSubject} />
      <SubjectList subjects={subjects} />
      <Schedule subjects={subjects} />
    </div>
  );
};

export default App;
