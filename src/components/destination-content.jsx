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
      <main className="flex flex-1 flex-col gap-4">
        <span className="p-10 text-4xl uppercase">
          01 Pick your Destination
        </span>
        <Slider>
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
