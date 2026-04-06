import { useEffect, useState } from "react";

const API_BASE = "https://gevherserraseferoghlu-portfolio.onrender.com"; // your backend URL

function App() {
  const [profile, setProfile] = useState(null);
  const [skills, setSkills] = useState([]);
  const [cases, setCases] = useState([]);

  useEffect(() => {
    fetch(`${API_BASE}/api/profile`)
      .then(res => res.json())
      .then(setProfile);

    fetch(`${API_BASE}/api/skills`)
      .then(res => res.json())
      .then(setSkills);

    fetch(`${API_BASE}/api/cases`)
      .then(res => res.json())
      .then(setCases);
  }, []);

  return (
    <div className="p-6 font-sans">
      <h1 className="text-3xl font-bold mb-4">Profile</h1>
      <pre>{JSON.stringify(profile, null, 2)}</pre>

      <h2 className="text-2xl font-bold mt-6">Skills</h2>
      <pre>{JSON.stringify(skills, null, 2)}</pre>

      <h2 className="text-2xl font-bold mt-6">Cases</h2>
      <pre>{JSON.stringify(cases, null, 2)}</pre>
    </div>
  );
}

export default App;
