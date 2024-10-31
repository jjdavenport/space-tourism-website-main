import data from "./assets/data.json";
import { useRef, useState } from "react";
import Slider from "react-slick";
import SliderTechnology from "./slider-technology";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const TechnologyContent = () => {
  const [button, setButton] = useState(0);
  const slider = useRef(null);

  const slide = (num) => {
    setButton(num);
    slider.current.slickGoTo(num);
  };

  return (
    <>
      <main className="flex flex-1 flex-col md:justify-center lg:justify-normal">
        <span className="flex gap-4 px-5 py-3 text-2xl font-light uppercase tracking-widest md:px-8 lg:px-28 lg:py-10 lg:text-3xl">
          <span className="font-semibold tracking-widest text-white text-opacity-20">
            03
          </span>
          Space launch 101
        </span>
        <Slider afterChange={(i) => setButton(i)} ref={slider}>
          <div>
            <SliderTechnology
              data={data.technology[0]}
              button={button}
              onClick={slide}
            />
          </div>
          <div>
            <SliderTechnology
              data={data.technology[1]}
              button={button}
              onClick={slide}
            />
          </div>
          <div>
            <SliderTechnology
              data={data.technology[2]}
              button={button}
              onClick={slide}
            />
          </div>
        </Slider>
      </main>
    </>
  );
};

export default TechnologyContent;
