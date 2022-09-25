import React from 'react';
import Card from './components/Card.jsx';

export default function Cards(props) {
  // acá va tu código
  // tip, podés usar un map
  return (
    <div>
      {
        props.cities?.map((ciudad) => {
          return (
            <Card
            max={Cairns.main.temp_max}
            min={Cairns.main.temp_min}
            name={Cairns.name}
            img={Cairns.weather[0].icon}
            onClose={onClose}
          />
          )
        })
      }
    </div>
  )
};