import React, { useState } from "react";

function App() {
  const [skill, setSkill] = useState("");
  const [jobs, setJobs] = useState([]);

  const searchJobs = async () => {
    const res = await fetch(`http://127.0.0.1:5000/jobs?skill=${skill}`);
    const data = await res.json();
    setJobs(data);
  };

  return (
    <div style={{ textAlign: "center" }}>
      <h1>💼 Job Recommender</h1>

      <input
        type="text"
        placeholder="Enter skill (python, react...)"
        value={skill}
        onChange={(e) => setSkill(e.target.value)}
      />

      <button onClick={searchJobs}>Search Jobs</button>

      <div>
        {jobs.map((job, index) => (
          <div key={index}>
            <h3>{job.title}</h3>
            <p>{job.company}</p>
            <p>{job.skills}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default App;
