import React, { useEffect, useState } from 'react';
import { buscarAllRider } from '../../services/rider.service';
import { CardInTheGallery } from '../CardInTheGallery/CardInTheGallery';
import { CardPodiums } from '../CardPodiums/CardPodiums';



export const SelectRiders = ({ registerForm,position,classEspecial}) => {
    const [allRiders, setAllRiders] = useState({});
    const [loading, setLoading] = useState(true);
  
    const getAllRiders = async () => {
    
      const ridersData = await buscarAllRider();
      setAllRiders(ridersData || []);
      setLoading(false);
     
    };
  
    useEffect(() => {
      getAllRiders();
    }, []); 
    const [selectedRider, setSelectedRider] = useState(null);

  const handleSelectChange = (event) => {
    setSelectedRider(event.target.value);
  };

 
    
    

    return (
      <>
        {allRiders ? (
          <figure className='figurePodium'>
            <label htmlFor="rider">{position}</label>
            <select
              id="rider"
              name="rider"
              {...registerForm}
              onChange={handleSelectChange}
            >
              {allRiders.data?.map((rider) => (
                <option key={rider._id} value={rider._id}>
                  {rider.name}
                </option>
              ))}
            </select>
            {selectedRider && (
              <CardPodiums
              positionClass={classEspecial}
                key={selectedRider}
                image={allRiders.data.find((rider) => rider._id === selectedRider)?.image}
                // name={allRiders.data.find((rider) => rider._id === selectedRider)?.name}
              />
            )}
          </figure>
        ) : (
          <div>Cargando...</div>
        )}
      </>
    );
  };