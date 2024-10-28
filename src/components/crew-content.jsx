import data from "./assets/data.json";
import { useState } from "react";
import SliderCrew from "./slider-crew";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const CrewContent = () => {
  const [crew, selectCrew] = useState(data.crew[0]);
  const [button, activeButton] = useState("1");

  const click = (buttonNum) => {
    activeButton(buttonNum);
  };

  return (
    <>
      <main className="flex flex-1 flex-col">
        <span className="flex gap-4 px-5 py-3 text-2xl font-light uppercase tracking-widest md:p-10 md:text-4xl">
          <span className="font-semibold tracking-widest text-white text-opacity-20">
            02
          </span>
          Meet your crew
        </span>
        <Slider>
          <div>
            <SliderCrew data={data.crew[0]} button={button} />
          </div>
          <div>
            <SliderCrew data={data.crew[1]} button={button} />
          </div>
          <div>
            <SliderCrew data={data.crew[2]} button={button} />
          </div>
          <div>
            <SliderCrew data={data.crew[3]} button={button} />
          </div>
        </Slider>
      </main>
    </>
  );
};

export default CrewContent;
