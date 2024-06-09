import React, { useState, useEffect } from "react";
import Moi from "../components/principal_pres";
import Liste from "../components/liste_skill";
import Blagues from "../components/Blagues";
import DogImage from "../components/DogImage";

export default function Home() {
  return (
    <div>
      <Moi />
      <Liste />
      <div className="blague_api">
        <div className="blagues_titel">
          <h3>
            Pour pimenter votre journée, je vous laisse avec Archibald qui va
            vous sortir la meilleure blague de votre journée.
          </h3>
        </div>
        <DogImage />
        <div className="Blagues_texte">
          <Blagues />
        </div>
      </div>
    </div>
  );
}
