import React, { useState } from "react";

const VoitureItem = ({voiture,setVoitures,voitures}) => {
    const [filter, setFilter] = useState(false);

    const handledelete = (matricule) => {
        const newVoitures = voitures.filter((voiture) => voiture.matricule !== matricule);
        setVoitures(newVoitures);
    }


  return (
    <div className="max-w-sm rounded sm:mx-auto overflow-hidden shadow-lg">
      <img className={`${filter ? "grayscale" : ""} w-full`} src={voiture.image} alt={voiture.marque} />
      <div className="px-6 py-4">
        <div className="font-bold text-xl mb-2">{voiture.marque  + " "  + voiture.modele} </div>
        <p className="text-gray-700 text-base">
         {voiture.description}
        </p>
      </div>
      <div className="flex  justify-center items-center gap-3 pb-3 ">
      <button  className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-2 rounded" onClick={()=>setFilter(!filter)}>
        apply filter
      </button>
        <button  onClick={()=>{handledelete(voiture.matricule)}}
            className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-2 rounded">
            supprimer 
        </button>
      </div>
    </div>
  );
};

export default VoitureItem;
