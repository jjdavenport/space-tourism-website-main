import Data from "./assets/data.json";
import { useState } from "react";

const TechnologyContent = () => {
  const [tech, selectTech] = useState(Data.technology[0]);
  return (
    <>
      <section className="flex flex-1 lg:p-8">
        <article>
          <span>03 Space launch 101</span>
          <span>The terminology</span>
          <h3>{tech.name}</h3>
          <p>{tech.description}</p>
          <ul className="flex flex-col gap-4">
            <li>
              <button className="h-20 w-20 rounded-full bg-transparent text-white outline outline-1 outline-white">
                1
              </button>
            </li>
            <li>
              <button className="h-20 w-20 rounded-full bg-transparent text-white outline outline-1 outline-white">
                2
              </button>
            </li>
            <li>
              <button className="h-20 w-20 rounded-full bg-transparent text-white outline outline-1 outline-white">
                3
              </button>
            </li>
          </ul>
        </article>
        <img src={tech.images.portrait} alt={tech.name} />
      </section>
    </>
  );
};

export default TechnologyContent;
