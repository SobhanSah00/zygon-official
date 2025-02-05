import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Cards from './Cards';
import CARD1 from '/CARD1.png';
import CARD2 from '/CARD2.png';
import CARD3 from '/CARD3.png';
import CARD4 from '/CARD4.png';
import AnimatedName from '../AnimatedName/AnimatedName';

function Points() {
  const [houseData, setHouseData] = useState([]);
  const [error, setError] = useState('');

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get('https://backen-zygon.onrender.com/api/v1/zygonInfo/ZygonTable');
        if (response.data && Array.isArray(response.data.statusCode)) {
          const fetchedData = response.data.statusCode;
  
          // Group events by year and calculate total points
          const groupedByYear = [1, 2, 3, 4].map(year => {
            const events = fetchedData.filter(event => event.Year === year);
            const totalPoints = events.reduce((sum, event) => sum + event.PonintSequre, 0);
            return { year, events, totalPoints };
          });
  
          // Sort groups by total points in descending order
          const sortedData = groupedByYear.sort((a, b) => b.totalPoints - a.totalPoints);
  
          setHouseData(sortedData);
          console.log(sortedData);
          
        } else {
          setError('Invalid data format received');
        }
      } catch (err) {
        setError(`Failed to load data: ${err.message}`);
        console.error('Error fetching data:', err);
      }
    };
    fetchData();
  }, []);
  

  const cardImages = [CARD1, CARD2, CARD3, CARD4];

  return (
    <div>
      <AnimatedName title="Odyssey Cup"></AnimatedName>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 p-4">
        {error ? (
          <p className="text-red-500 text-center mb-4">{error}</p>
        ) : (
          houseData.map((house, index) => (
            <Cards
              key={house.year}
              houseName={`Year ${house.year}`}
              score={house.totalPoints} // Assuming score is the number of events
              events={house.events}
              image={cardImages[index]}
            />
          ))
        )}
      </div>
    </div>
  );
}

export default Points;
