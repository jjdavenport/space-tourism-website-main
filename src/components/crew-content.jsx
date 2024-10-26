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
    </>
  );
};

export default CrewContent;
