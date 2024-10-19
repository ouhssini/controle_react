import { useState } from "react";
import VoitureItem from "./VoitureItem";

const VoitureList = () => {
  const data = [
    {
      matricule: 1,
      marque: "Toyota",
      modele: "Corolla",
      prix: 20000,
      image: "./crolla.jpg",
      description: "A reliable and fuel-efficient sedan.",
    },
    {
      matricule: 2,
      marque: "Honda",
      modele: "Civic",
      prix: 22000,
      image: "./civic.jpg",
      description: "A compact car with a sporty feel.",
    },
    {
      matricule: 3,
      marque: "Ford",
      modele: "Mustang",
      prix: 900000,
      image: "./ford.png",
      description: "An iconic American muscle car.",
    },
    {
      matricule: 4,
      marque: "Chevrolet",
      modele: "Camaro",
      prix: 25000,
      image: "./camaro.jpg",
      description: "A stylish and powerful sports car.",
    },
    {
      matricule: 5,
      marque: "BMW",
      modele: "M3",
      prix: 70000,
      image: "./m3.jpg",
      description: "A high-performance luxury sedan.",
    },
    {
      matricule: 6,
      marque: "BMW",
      modele: "M3",
      prix: 70000,
      image: "./m3.jpg",
      description: "A high-performance luxury sedan.",
    },
  ];

  const [voitures, setVoitures] = useState(data);
  const total = voitures.length;
  const marque = [...new Set(voitures.map((voiture) => voiture.marque))];

  const maxPrix =
    total > 0
      ? voitures.reduce(
          (max, voiture) => (voiture.prix > max.prix ? voiture : max),
          voitures[0]
        )
      : null;

  return (
    <div className="p-6 px-20">
      <h1 className="text-2xl font-bold mb-4">Liste des Voitures</h1>
      <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 xl:grid-cols-4 gap-4  mb-10">
        {voitures.map((voiture) => (
          <VoitureItem
            key={voiture.matricule}
            voiture={voiture}
            voitures={voitures}
            setVoitures={setVoitures}
          />
        ))}
      </div>
      {total === 0 ? (
        <p className="mb-4">Aucune voiture disponible.</p>
      ) : (
        <div className="flex justify-between px-10 gap-5  bg-white py-6 border-2 border-gray-300 shadow-md rounded-md">
        
          <div  className="flex-1">
          <p className="mb-4">Nombre total des voitures: {total}</p>
          <h2 className="text-xl font-semibold mb-2">
            Nombre total des voitures par marque:
          </h2>
          {marque.map((marque) => {
            const totalM = voitures.filter(
              (voiture) => voiture.marque === marque
            ).length;
            return (
              <p key={marque} className="mb-1 bg-slate-300 px-10 py-2">
                {marque}: {totalM}
              </p>
            );
          })}
          </div>
            <div className="border-2 rounded-sm  px-10 py-5 flex-1">
            {maxPrix && (
            <>
              <h2 className="text-xl font-semibold mb-2">
                Voiture la plus chere:
              </h2>
              <p className="mb-4">
                Marque:{" "}
                {maxPrix.marque +
                  "-" +
                  maxPrix.modele +
                  " " +
                  maxPrix.prix +
                  " $"}
              </p>
              <img src={maxPrix.image}  className="w-3/4 mx-auto"/>
            </>
          )}
            </div>
        </div>
      )}
    </div>
  );
};

export default VoitureList;
