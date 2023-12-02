import React, { useEffect, useState } from "react";
import { CardInTheGallery } from "../CardInTheGallery/CardInTheGallery";
import { getAllPlayers } from "../../services/player.service";
import { Loading } from "../Loading/Loading";

export const SelectPlayers = ({ registerForm, position,suPosicion }) => {
  const [allPlayers, setAllPlayers] = useState({});
  const [loading, setLoading] = useState(true);
  const [selectedPlayer, setSelectedPlayer] = useState(null);

  const getAllPlayersFunction = async () => {
    const playersData = await getAllPlayers();
    setAllPlayers(playersData || []);
    setLoading(false);
  };

  useEffect(() => {
    getAllPlayersFunction();
  }, []);

  const handleSelectChange = (event) => {
    setSelectedPlayer(event.target.value);
  };

  useEffect(() => {
    
  }, [allPlayers]);

  return (
    <>
      {allPlayers ? (
        <div className="opcionJugador">
        
          <select
          className="selecEleven"
            id="player"
            name="player"
            {...registerForm}
            onChange={handleSelectChange}
          >
            <option  className="defecto"value="">
              Choose one
            </option>
          
            {allPlayers.data
              ?.filter((player) => player.position ===suPosicion)
              .map((player) => (
                <option key={player._id} value={player._id}>
                  {player.name}
                </option>
              ))}
          </select>
          {selectedPlayer && (
            <section
              key={
                allPlayers.data.find((player) => player._id === selectedPlayer)
                  ?.name
              }
            >
              <img
                className="imagenEleven"
                src={
                  allPlayers.data.find(
                    (player) => player._id === selectedPlayer
                  )?.image
                }
                alt={name}
              />
            
              
            </section>
          )}
        </div>
      ) : (
        <Loading />
      )}
    </>
  );
};