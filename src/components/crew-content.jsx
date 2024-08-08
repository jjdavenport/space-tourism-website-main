import Data from "./assets/data.json";
import { useState } from "react";

const CrewContent = () => {
  const [crew, selectCrew] = useState(Data.crew[0]);
  const [button, activeButton] = useState("1");

  const click = (buttonNum) => {
    activeButton(buttonNum);
  };

  return (
    <>
      <section className="flex flex-col">
        <span className="p-8 text-5xl uppercase">02 Meet your crew</span>
        <div className="flex flex-col md:flex-row">
          <article className="flex flex-col items-center justify-center gap-4 p-8 text-center md:w-1/2 md:items-start md:text-start">
            <div className="flex flex-col gap-4">
              <span className="font-belleFair text-2xl uppercase">
                {crew.role}
              </span>
              <h2 className="font-belleFair text-7xl uppercase">{crew.name}</h2>
              <p>{crew.bio}</p>
            </div>
            <ul className="flex gap-4">
              <li>
                <button
                  className={`${button === "1" ? "bg-opacity-100" : "bg-opacity-10"} h-5 w-5 rounded-full bg-white bg-opacity-10 hover:bg-opacity-100`}
                  onClick={() => click("1")}
                ></button>
              </li>
              <li>
                <button
                  className={`${button === "2" ? "bg-opacity-100" : "bg-opacity-10"} h-5 w-5 rounded-full bg-white bg-opacity-10 hover:bg-opacity-100`}
                  onClick={() => click("2")}
                ></button>
              </li>
              <li>
                <button
                  className={`${button === "3" ? "bg-opacity-100" : "bg-opacity-10"} h-5 w-5 rounded-full bg-white bg-opacity-10 hover:bg-opacity-100`}
                  onClick={() => click("3")}
                ></button>
              </li>
              <li>
                <button
                  className={`${button === "4" ? "bg-opacity-100" : "bg-opacity-10"} h-5 w-5 rounded-full bg-white bg-opacity-10 hover:bg-opacity-100`}
                  onClick={() => click("4")}
                ></button>
              </li>
            </ul>
          </article>
          <img src={crew.images.png} />
        </div>
      </section>
    </>
  );
};

export default CrewContent;
