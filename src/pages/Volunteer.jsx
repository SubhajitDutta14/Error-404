import { useState } from "react";
import { needs } from "../services/data";

function Volunteer() {
  const [skills, setSkills] = useState("");
  const [location, setLocation] = useState("");
  const [matches, setMatches] = useState([]);

  const findMatches = () => {
    const userSkills = skills.split(",").map(s => s.trim());

    const results = needs.map((need) => {
      let score = 0;

      const skillMatch = need.skills.filter(skill =>
        userSkills.includes(skill)
      ).length;
      score += skillMatch * 5;

      if (need.location === location) score += 3;

      if (need.urgency === "High") score += 5;
      if (need.urgency === "Medium") score += 3;

      return { ...need, score };
    });

    results.sort((a, b) => b.score - a.score);
    setMatches(results);
  };

  return (
    <div className="max-w-lg mx-auto">
      <div className="bg-white p-6 rounded-xl shadow mb-6">
        <h2 className="text-xl font-bold mb-4">Find Opportunities</h2>

        <input className="border p-2 w-full mb-3 rounded"
          placeholder="Your Skills"
          onChange={e => setSkills(e.target.value)}
        />

        <input className="border p-2 w-full mb-3 rounded"
          placeholder="Your Location"
          onChange={e => setLocation(e.target.value)}
        />

        <button
          className="bg-green-600 hover:bg-green-700 text-white w-full py-2 rounded"
          onClick={findMatches}
        >
          Find Matches
        </button>
      </div>

      <div className="space-y-3">
        {matches.map((m, i) => (
          <div key={i} className="bg-white p-4 rounded-xl shadow">
            <div className="font-bold text-lg">{m.title}</div>
            <div className="text-sm text-gray-500">{m.location}</div>
            <div className="text-sm">Score: {m.score}</div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Volunteer;