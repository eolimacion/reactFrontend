import React, { useEffect, useState } from 'react';
import { buscarAllRider } from '../../services/rider.service';



export const SelectRiders = ({ registerForm,position}) => {
    const [allRiders, setAllRiders] = useState({});
    const [loading, setLoading] = useState(true);
  
    const getAllRiders = async () => {
    
      const ridersData = await buscarAllRider();
      setAllRiders(ridersData || []);
      setLoading(false);
     
    };
  
    useEffect(() => {
      getAllRiders();
         console.log(allRiders);
    }, []); 
  
 
    
    

    return (
        <>
          {loading ? (
            <div>Cargando...</div>
          ) : (
            allRiders && (
              <div>
                <label htmlFor="rider">{position}</label>
                <select id="rider" name="rider" {...registerForm}>
                  {allRiders.data?.map((rider) => (
                    <option key={rider._id} value={rider.name}>
                      {rider.name}
                    </option>
                  ))}
                </select>
              </div>
            )
          )}
        </>
      );
                  }