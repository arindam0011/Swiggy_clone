import { useEffect, useState } from 'react'
import Loading from './Loading';
import ResturentsCard from './ResturentsCard';
import ShimmerCard from './ShimmerCard';
const Outlets = () => {
    const [latitude, setLatitude] = useState(null);
    const [longitude, setLongitude] = useState(null);
    const [apiData, setApiData] = useState([]);
    const [loading, setLoading] = useState(true);
    const [resturents, setResturents] = useState([]);

    useEffect(() => {
        const getLocation = () => {
            return new Promise((resolve, reject) => {
                if (navigator.geolocation) {
                    navigator.geolocation.getCurrentPosition(
                        (position) => {
                            resolve({
                                latitude: position.coords.latitude,
                                longitude: position.coords.longitude
                            });
                        },
                        (error) => {
                            reject(error);
                        }
                    );
                } else {
                    reject(new Error("Geolocation is not supported by this browser."));
                }
            });
        };

        const getData = async () => {
            try {
                const location = await getLocation();
                setLatitude(location.latitude);
                setLongitude(location.longitude);
                // https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=21.99740&lng=79.00110&restaurantId=196341&catalog_qa=undefined&submitAction=ENTER
                const res = await fetch(`https://www.swiggy.com/dapi/restaurants/list/v5?lat=${location.latitude}&lng=${location.longitude}`);
                const data = await res.json();
                setResturents(data.data.cards[4].card.card.gridElements.infoWithStyle.restaurants);
                setApiData(data.data);
               
                
            } catch (error) {
                console.error("Error:", error);
            }
            finally {
                setLoading(false);
                
            }
        };


        if (latitude === null && longitude === null) {
            getData();
            
        }
        console.log(resturents);
        
    }, [latitude, longitude]);




    return (
        resturents.length === 0 ? <ShimmerCard /> : (

            <div className='grid grid-cols-4 gap-5 w-[90%] mx-auto mt-10'>
                {
                    resturents.map((item) => {
                        return <ResturentsCard key={item.info.id} item={item} />
                    })
                }
            </div>

        )

    )
}

export default Outlets
