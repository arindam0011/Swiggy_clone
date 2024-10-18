import React, { useContext, useEffect, useState } from 'react';
import ResturentsCard from './ResturentsCard';
import ShimmerCard from './ShimmerCard';
import { locationContext } from '../App'; // Correct import

const Outlets = () => {
  const [resturents, setResturents] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const { latitude, longitude } = useContext(locationContext);

  useEffect(() => {
    const getData = async () => {
      try {
        if (latitude && longitude) {
          const res = await fetch(`https://www.swiggy.com/dapi/restaurants/list/v5?lat=${latitude}&lng=${longitude}`);
          const data = await res.json();
          setResturents(data.data.cards[4].card.card.gridElements.infoWithStyle.restaurants);
        }
      } catch (error) {
        setError("Failed to fetch restaurants data.");
        console.error("Error:", error);
      } finally {
        setLoading(false);
      }
    };

    getData();
  }, [latitude, longitude]);

  if (loading) return <ShimmerCard />;
  if (error) return <div className="text-red-500">{"Please Use CORS Extension in the browser and Reload as this API need cors permission...."}</div>;

  return (
    <div className='grid grid-cols-4 gap-5 w-[95%] h-[90vh] mx-auto mt-10 overflow-y-scroll hide-scrollbar p-4'>
      {resturents.length === 0 ? <ShimmerCard /> : (
        resturents.map((item) => (
          <ResturentsCard key={item.info.id} item={item} />
        ))
      )}
    </div>
  );
};

export default Outlets;
