import React from "react";
import Car from './CarDetails';

const CarInventory: React.FC = () => {
 const cars = [
    { make: 'GMC', model: 'Terrain', year: 2021 },
    { make: 'BMW', model: 'PathFinder', year: 2020 },
    { make: 'Ford', model: 'Mustang', year: 2022 },
 ];

 return (
    <div>
      <h1>Car Inventory</h1>
      {cars.map((car, index) => (
        <Car key={index} make={car.make} model={car.model} year={car.year} />
      ))}
    </div>
 );
};

export default CarInventory;