import Data from "./assets/data.json";
import { useState } from "react";

const CrewContent = () => {
  const [crew, selectCrew] = useState(Data.crew[0]);
  return (
    <>
      <section className="flex flex-1 lg:p-8">
        <article>
          <span>Meet your crew</span>
          <span>{crew.role}</span>
          <h2>{crew.name}</h2>
          <p>{crew.bio}</p>
          <ul className="flex gap-2">
            <li>
              <button className="h-10 w-10 rounded-full bg-white bg-opacity-10"></button>
            </li>
            <li>
              <button className="h-10 w-10 rounded-full bg-white bg-opacity-10"></button>
            </li>
            <li>
              <button className="h-10 w-10 rounded-full bg-white bg-opacity-10"></button>
            </li>
            <li>
              <button className="h-10 w-10 rounded-full bg-white bg-opacity-10"></button>
            </li>
          </ul>
        </article>
        <img src={crew.images.png} />
      </section>
    </>
  );
};

export default CrewContent;
