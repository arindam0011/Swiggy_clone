import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import MenuCard from './MenuCard'
import { v4 as uuidv4 } from 'uuid';

const Manue = () => {
  const { id } = useParams();
  const [Items, setItems] = useState([]);
  // const [searchInput, setSearchInput] = useState("");
  // const [allItems, setAllItems] = useState([]);



  useEffect(() => {
    const getManuData = async () => {
      try{
        const responce = await fetch(`https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=21.99740&lng=79.00110&restaurantId=${id}`)
        const data = await responce.json()
        setItems(data.data?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards.slice(1));
      }
      catch (error) {
        console.error("Failed to fetch menu data", error);
      }
    }
    getManuData();
  }, [])



  return (
    <div className='w-[full] h-screen overflow-y-scroll'>

      <div className='w-[50%] mx-auto select-none'>

        {
          Items.filter((item) => item?.card?.card?.itemCards?.length > 0).map((item) => {
            return (
              <div key={uuidv4()} className='my-10 w-full mx-auto h-auto'>
                <MenuCard items={item.card.card} />
              </div>
            )
          })
        }

      </div>

    </div>
  )
}

export default Manue
