// src/Blagues.js
import React, { useState, useEffect } from "react";

const Blagues = () => {
  const [blague, setBlague] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchBlague = async () => {
      try {
        const response = await fetch("https://api.blablagues.net/?rub=blagues");
        if (!response.ok) {
          throw new Error("erreur lors de la recuperation des dones");
        }
        const data = await response.json();
        const { text_head, text, text_hidden } = data.data.content;
        setBlague({ text_head, text, text_hidden });
        setLoading(false);
      } catch (error) {
        setError(error.message);
        setLoading(false);
      }
    };

    fetchBlague();
  }, []);

  if (loading) {
    return <p>Chargement</p>;
  }

  if (error) {
    return <p>Erreur: {error}</p>;
  }

  return (
    <div>
      <p>
        <strong>{blague.text_head}</strong>
      </p>
      <p>{blague.text}</p>
      {blague.text_hidden && <p>{blague.text_hidden}</p>}
    </div>
  );
};

export default Blagues;
