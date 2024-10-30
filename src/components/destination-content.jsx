import data from "./assets/data.json";
import { useRef, useState } from "react";
import Slider from "react-slick";
import SliderDestination from "./slider-destination";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const DestinationContent = () => {
  const [button, setButton] = useState(data.destinations[0].name);
  const slider = useRef(null);

  const slide = (destName) => {
    setButton(destName);
    const index = data.destinations.findIndex((dest) => dest.name === destName);
    slider.current.slickGoTo(index);
  };

  return (
    <>
      <main className="flex flex-1 flex-col gap-4 md:justify-center lg:justify-normal lg:gap-0 lg:p-0">
        <span className="flex gap-4 px-5 py-3 text-2xl font-light uppercase tracking-widest lg:px-28 lg:py-10 lg:text-3xl">
          <span className="font-semibold tracking-widest text-white text-opacity-20">
            01
          </span>
          Pick your Destination
        </span>
        <Slider
          afterChange={(i) => setButton(data.destinations[i].name)}
          arrows={false}
          ref={slider}
        >
          <div>
            <SliderDestination
              onClick={slide}
              data={data.destinations[0]}
              planets={data.destinations}
              button={button}
            />
          </div>
          <div>
            <SliderDestination
              onClick={slide}
              planets={data.destinations}
              data={data.destinations[1]}
              button={button}
            />
          </div>
          <div>
            <SliderDestination
              onClick={slide}
              planets={data.destinations}
              data={data.destinations[2]}
              button={button}
            />
          </div>
          <div>
            <SliderDestination
              onClick={slide}
              planets={data.destinations}
              data={data.destinations[3]}
              button={button}
            />
          </div>
        </Slider>
      </main>
    </>
  );
};

export default DestinationContent;
