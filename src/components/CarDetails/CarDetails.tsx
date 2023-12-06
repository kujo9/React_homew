import React from "react";


    interface Car {
        make: string;
        model: string;
        year: number;
        price?: number;
       }
       
        const Car: React.FC<Car> = ({ make, model, year, price=200 }) => {
        return (
           <div>
             <h2>{make} {model}</h2>
             <p>Year: {year}</p>
           </div>
        );
       };
       export default Car;




