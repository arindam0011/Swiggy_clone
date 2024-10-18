import React, { useEffect, useState, useContext } from 'react'
import { useParams } from 'react-router-dom'
import MenuCard from './MenuCard'
import { v4 as uuidv4 } from 'uuid';
import { locationContext } from '../App';
import Loading from './Loading';


const Menu = () => {
  const { id } = useParams();
  const [items, setItems] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const { latitude, longitude } = useContext(locationContext);

  useEffect(() => {
    const getMenuData = async () => {
      try {
        const response = await fetch(`/api/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=${latitude}&lng=${longitude}&restaurantId=${id}`);
        const data = await response.json();
        setItems(data.data?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards.slice(1) || []);
      } catch (error) {
        setError("Failed to fetch menu data.");
        console.error("Failed to fetch menu data", error);
      } finally {
        setLoading(false);
      }
    };

    if (latitude && longitude) {
      getMenuData();
    }
  }, [latitude, longitude, id]);

  if (loading) return <Loading />;
  if (error) return <div className="text-red-500">{error}</div>;

  return (
    <div className='w-[full] h-[87vh] mx-auto mt-10 overflow-y-scroll'>
      <div className='w-[50%] mx-auto select-none'>
        {items.filter((item) => item?.card?.card?.itemCards?.length > 0).map((item) => (
          <div key={uuidv4()} className='my-10 w-full mx-auto h-auto'>
            <MenuCard items={item.card.card} />
          </div>
        ))}
      </div>
    </div>
  )
}

export default Menu;
