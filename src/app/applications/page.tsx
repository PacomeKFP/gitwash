"use client"
import { useEffect, useState } from 'react';

export default function ApplicationsList() {
  const [applications, setApplications] = useState([]);

  useEffect(() => {
    const fetchApplications = async () => {
      const response = await fetch('/api/applications');
      const data = await response.json();
      setApplications(data);
    };

    fetchApplications();
  }, []);

  return (
    <div className="p-8 max-w-4xl mx-auto">
      <h1 className="text-2xl font-bold mb-4">Liste des Candidatures</h1>
      <ul className="space-y-4">
        {applications.map((app: any) => (
          <li key={app.id} className="p-4 border rounded">
            <h2 className="text-xl font-bold">{app.name}</h2>
            <p>Email: {app.email}</p>
            <p>WhatsApp: {app.whatsapp || 'N/A'}</p>
            <p>Domaine: {app.domain}</p>
            <p>Thème: {app.workshop}</p>
            <p>Description: {app.description}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}
