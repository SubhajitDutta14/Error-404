import { useState } from "react";
import { needs } from "../services/data";

function NGO() {
  const [form, setForm] = useState({
    title: "",
    location: "",
    urgency: "Low",
    skills: ""
  });

  const handleSubmit = () => {
    needs.push({
      ...form,
      skills: form.skills.split(",").map(s => s.trim())
    });

    alert("Need posted!");
  };

  return (
    <div className="max-w-lg mx-auto bg-white p-6 rounded-xl shadow">
      <h2 className="text-xl font-bold mb-4">Post a Need</h2>

      <input className="border p-2 w-full mb-3 rounded"
        placeholder="Title"
        onChange={e => setForm({...form, title: e.target.value})}
      />

      <input className="border p-2 w-full mb-3 rounded"
        placeholder="Location"
        onChange={e => setForm({...form, location: e.target.value})}
      />

      <select className="border p-2 w-full mb-3 rounded"
        onChange={e => setForm({...form, urgency: e.target.value})}
      >
        <option>Low</option>
        <option>Medium</option>
        <option>High</option>
      </select>

      <input className="border p-2 w-full mb-3 rounded"
        placeholder="Skills (comma separated)"
        onChange={e => setForm({...form, skills: e.target.value})}
      />

      <button className="bg-blue-600 hover:bg-blue-700 text-white w-full py-2 rounded">
        Submit
      </button>
    </div>
  );
}

export default NGO;