import Data from "./assets/data.json";
import { useState } from "react";

const TechnologyContent = () => {
  const [tech, selectTech] = useState(Data.technology[0]);

  const [button, activeButton] = useState("1");

  const click = (button) => {
    activeButton(button);
  };

  return (
    <>
      <section className="flex flex-1 flex-col justify-center">
        <span className="p-10 text-5xl uppercase">03 Space launch 101</span>
        <div className="flex flex-col md:flex-row">
          <article className="flex flex-col justify-center p-8 text-center md:w-3/6 md:text-start">
            <div className="flex flex-col gap-8 md:flex-row-reverse">
              <div className="flex flex-col gap-4">
                <span className="uppercase">The terminology ...</span>
                <h3 className="font-belleFair text-6xl uppercase">
                  {tech.name}
                </h3>
                <p>{tech.description}</p>
              </div>
              <ul className="flex justify-between gap-4 md:flex-col">
                <li>
                  <button
                    className={`${button === "1" ? "bg-white text-black" : "bg-transparent text-white"} h-16 w-16 rounded-full font-belleFair text-xl outline outline-1 outline-white hover:bg-white hover:text-black hover:outline-none`}
                    onClick={() => click("1")}
                  >
                    1
                  </button>
                </li>
                <li>
                  <button
                    className={`${button === "2" ? "bg-white text-black" : "bg-transparent text-white"} h-16 w-16 rounded-full font-belleFair text-xl outline outline-1 outline-white hover:bg-white hover:text-black hover:outline-none`}
                    onClick={() => click("2")}
                  >
                    2
                  </button>
                </li>
                <li>
                  <button
                    className={`${button === "3" ? "bg-white text-black" : "bg-transparent text-white"} h-16 w-16 rounded-full font-belleFair text-xl outline outline-1 outline-white hover:bg-white hover:text-black hover:outline-none`}
                    onClick={() => click("3")}
                  >
                    3
                  </button>
                </li>
              </ul>
            </div>
          </article>
          <img
            className="object-contain md:w-3/6"
            src={tech.images.portrait}
            alt={tech.name}
          />
        </div>
      </section>
    </>
  );
};

export default TechnologyContent;
