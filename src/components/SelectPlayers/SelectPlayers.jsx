import React, { useEffect, useState } from 'react';
import { CardInTheGallery } from '../CardInTheGallery/CardInTheGallery';
import { getAllPlayers } from '../../services/player.service';



export const SelectPlayers = ({ registerForm, position }) => {
    const [allPlayers, setAllPlayers] = useState({});
    const [loading, setLoading] = useState(true);
  
    const getAllPlayersFunction = async () => {
    
      const playersData = await getAllPlayers();
      setAllPlayers(playersData || []);
      setLoading(false);
     
    };
  
    useEffect(() => {
      getAllPlayersFunction();
         console.log(allPlayers);
    }, []); 
    const [selectedPlayer, setSelectedPlayer] = useState(null);

  const handleSelectChange = (event) => {
    setSelectedPlayer(event.target.value);
  };

    return (
      <>
        {allPlayers ? (
          <div>
            <label htmlFor="player">{position}</label>
            <select
              id="player"
              name="player"
              {...registerForm}
              onChange={handleSelectChange}
            >
              {allPlayers.data?.map((player) => (
                <option key={player._id} value={player._id}>
                  {player.name}
                </option>
              ))}
            </select>
            {selectedPlayer && (
              <CardInTheGallery
                key={selectedPlayer}
                image={allPlayers.data.find((player) => player._id === selectedPlayer)?.image}
                name={allPlayers.data.find((player) => player._id === selectedPlayer)?.name}
              />
            )}
          </div>
        ) : (
          <div>Cargando...</div>
        )}
      </>
    );
  };