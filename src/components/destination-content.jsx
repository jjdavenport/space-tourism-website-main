import Data from "./assets/data.json";
import { useState } from "react";

const DestinationContent = () => {
  const [destination, selectDesintation] = useState(Data.destinations[0]);
  return (
    <>
      <section className="flex flex-1 lg:p-8">
        <div>
          <span>01 Pick your Destination</span>
          <img src={destination.images.png} />
        </div>
        <article>
          <ul>
            <li>
              <button>{destination.name}</button>
            </li>
            <li>
              <button>{destination.name}</button>
            </li>
            <li>
              <button>{destination.name}</button>
            </li>
            <li>
              <button>{destination.name}</button>
            </li>
          </ul>
          <h2>{destination.name}</h2>
          <p>{destination.description}</p>
          <span>{destination.distance}</span>
          <span>{destination.travel}</span>
        </article>
      </section>
    </>
  );
};

export default DestinationContent;
