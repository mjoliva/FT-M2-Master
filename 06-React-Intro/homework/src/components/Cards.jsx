import React from 'react';
import Card from './Card';

export default function Cards(props) {
  // acá va tu código
  // tip, podés usar un map
  return (
    <div>
      {
        props.cities ? props.cities.map((ciudad) => {
          return (
            <Card
            max={ciudad.main.temp_max}
            min={ciudad.main.temp_min}
            name={ciudad.name}
            img={ciudad.weather[0].icon}
            onClose={props.onClose}
          />
          )
        }) : <div>
              <h1> NO HAY CIUDADES PARA MOSTRAR</h1>
        </div>
      }
    </div>
  )
};

/*import Card from './components/Card.jsx';
import React from 'react';


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
};*/