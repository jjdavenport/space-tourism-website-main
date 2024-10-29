import data from "./assets/data.json";
import { useState } from "react";
import Slider from "react-slick";
import SliderDestination from "./slider-destination";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const DestinationContent = () => {
  const [button, setButton] = useState("moon");

  const destinationBtn = (destination) => {
    setButton(destination);
  };

  return (
    <>
      <main className="flex flex-1 flex-col gap-4 lg:gap-0 lg:p-0">
        <span className="flex gap-4 px-5 py-3 text-2xl font-light uppercase tracking-widest lg:px-28 lg:py-10 lg:text-3xl">
          <span className="font-semibold tracking-widest text-white text-opacity-20">
            01
          </span>
          Pick your Destination
        </span>
        <Slider arrows={false}>
          <div>
            <SliderDestination
              data={data.destinations[0]}
              planets={data.destinations}
              button={button}
            />
          </div>
          <div>
            <SliderDestination
              planets={data.destinations}
              data={data.destinations[1]}
            />
          </div>
          <div>
            <SliderDestination
              planets={data.destinations}
              data={data.destinations[2]}
              button={button}
            />
          </div>
          <div>
            <SliderDestination
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