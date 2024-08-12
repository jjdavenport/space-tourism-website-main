import data from "./assets/data.json";
import { useState } from "react";

const DestinationContent = () => {
  const destination = data.destinations[0];
  const [button, setButton] = useState("moon");
  const destinationBtn = (destination) => {
    setButton(destination);
  };
  return (
    <>
      <section className="flex flex-1 flex-col gap-4">
        <span className="p-10 text-4xl uppercase">
          01 Pick your Destination
        </span>
        <div className="flex flex-col items-center gap-10 md:flex-row md:p-10">
          <img
            className="animate-spin-slow md:w-1/2"
            src={destination.images.png}
          />
          <article className="flex flex-col items-center gap-4 p-2 text-center md:w-1/2 md:items-start md:p-0 md:text-start">
            <ul className="flex gap-4">
              {data.destinations.map((i) => (
                <li key={i.name}>
                  <button
                    onClick={() => {
                      destinationBtn(i.name);
                    }}
                    className={`${button === "Moon" ? "border-white" : "border-transparent"} border-b-2 text-2xl uppercase`}
                  >
                    {i.name}
                  </button>
                </li>
              ))}
            </ul>
            <h2 className="font-belleFair text-7xl uppercase">
              {destination.name}
            </h2>
            <p>{destination.description}</p>
            <div className="flex gap-8">
              <div className="flex flex-col gap-2">
                <span className="uppercase">Avg. distance</span>
                <span className="font-belleFair text-4xl uppercase">
                  {destination.distance}
                </span>
              </div>
              <div className="flex flex-col gap-2">
                <span className="uppercase">Est travel time</span>
                <span className="font-belleFair text-4xl uppercase">
                  {destination.travel}
                </span>
              </div>
            </div>
          </article>
        </div>
      </section>
    </>
  );
};

export default DestinationContent;
