import data from "./assets/data.json";
import { useState } from "react";
import Slider from "react-slick";
import SliderTechnology from "./slider-technology";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const TechnologyContent = () => {
  const [tech, selectTech] = useState(data.technology[0]);

  const [button, activeButton] = useState("1");

  const click = (button) => {
    activeButton(button);
  };

  return (
    <>
      <main className="flex flex-1 flex-col">
        <span className="flex gap-4 px-5 py-3 text-2xl font-light uppercase tracking-widest lg:px-28 lg:py-0 lg:text-3xl">
          <span className="font-semibold tracking-widest text-white text-opacity-20">
            03
          </span>
          Space launch 101
        </span>
        <Slider>
          <div>
            <SliderTechnology data={data.technology[0]} button={button} />
          </div>
          <div>
            <SliderTechnology data={data.technology[1]} button={button} />
          </div>
          <div>
            <SliderTechnology data={data.technology[2]} button={button} />
          </div>
        </Slider>
      </main>
    </>
  );
};

export default TechnologyContent;
