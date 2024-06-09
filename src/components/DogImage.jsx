import React, { useState, useEffect } from "react";

const DogImage = () => {
  const [imageUrl, setImageUrl] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchDogImage = async () => {
      try {
        const response = await fetch("https://dog.ceo/api/breeds/image/random");
        if (!response.ok) {
          throw new Error("erreur lors de la recuperation des dones");
        }
        const data = await response.json();
        setImageUrl(data.message);
        setLoading(false);
      } catch (error) {
        setError(error.message);
        setLoading(false);
      }
    };

    fetchDogImage();
  }, []);
  if (loading) {
    return <p>Chargement</p>;
  }

  if (error) {
    return <p>Erreur: {error}</p>;
  }

  return (
    <div>
      <img className="DogImage" src={imageUrl} alt="img" />
    </div>
  );
};

export default DogImage;
