"use client"
import { useState } from 'react';
import axios from "axios"
export default function ApplicationForm() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    whatsapp: '',
    domain: '',
    workshop: '',
    description: '',
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    const response = await axios.post("/api/applications", formData, { headers: { 'Content-Type': 'application/json', "Banger":"The KFP" }})


    if (response.status == 201) {
      alert('Candidature soumise avec succès!');
      setFormData({ name: '', email: '', whatsapp: '', domain: '', workshop: '', description: '' });
    } else {
      alert('Erreur lors de la soumission.');
    }
  };

  return (
    <div className="p-8 max-w-xl mx-auto">
      <h1 className="text-2xl font-bold mb-4">Appel à Candidature</h1>
      <form className="space-y-4" onSubmit={handleSubmit}>
        <input
          type="text"
          name="name"
          placeholder="Nom"
          value={formData.name}
          onChange={handleChange}
          className="w-full p-2 border rounded"
        />
        <input
          type="email"
          name="email"
          placeholder="Email"
          value={formData.email}
          onChange={handleChange}
          className="w-full p-2 border rounded"
        />
        <input
          type="text"
          name="whatsapp"
          placeholder="Numéro WhatsApp (facultatif)"
          value={formData.whatsapp}
          onChange={handleChange}
          className="w-full p-2 border rounded"
        />
        <select
          name="domain"
          value={formData.domain}
          onChange={handleChange}
          className="w-full p-2 border rounded"
        >
          <option value="">Domaine</option>
          <option value="Genie Logiciel">Génie Logiciel</option>
          <option value="Machine Learning">Machine Learning</option>
          <option value="IoT">IoT</option>
          <option value="BlockChain">BlockChain</option>
          <option value="Cloud">Cloud</option>
        </select>
        <input
          type="text"
          name="workshop"
          placeholder="Thème du workshop"
          value={formData.workshop}
          onChange={handleChange}
          className="w-full p-2 border rounded"
        />
        <textarea
          name="description"
          placeholder="Petite description"
          value={formData.description}
          onChange={handleChange}
          className="w-full p-2 border rounded"
        ></textarea>
        <button type="submit" className="px-4 py-2 bg-blue-500 text-white rounded">Soumettre</button>
      </form>
    </div>
  );
}
