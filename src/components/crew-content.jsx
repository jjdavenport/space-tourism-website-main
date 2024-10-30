import data from "./assets/data.json";
import { useRef, useState } from "react";
import SliderCrew from "./slider-crew";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const CrewContent = () => {
  const [button, setButton] = useState(0);
  const slider = useRef(null);

  const slide = (num) => {
    setButton(num);
    slider.current.slickGoTo(num);
  };

  return (
    <>
      <main className="flex flex-1 flex-col justify-end">
        <span className="flex gap-4 px-5 py-3 text-2xl font-light uppercase tracking-widest lg:px-28 lg:pb-0 lg:pt-10 lg:text-3xl">
          <span className="font-semibold tracking-widest text-white text-opacity-20">
            02
          </span>
          Meet your crew
        </span>
        <Slider afterChange={(i) => setButton(i)} ref={slider}>
          <div>
            <SliderCrew data={data.crew[0]} button={button} onClick={slide} />
          </div>
          <div>
            <SliderCrew data={data.crew[1]} button={button} onClick={slide} />
          </div>
          <div>
            <SliderCrew data={data.crew[2]} button={button} onClick={slide} />
          </div>
          <div>
            <SliderCrew data={data.crew[3]} button={button} onClick={slide} />
          </div>
        </Slider>
      </main>
    </>
  );
};

export default CrewContent;
