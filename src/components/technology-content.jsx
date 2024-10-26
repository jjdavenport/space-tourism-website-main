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
    </>
  );
};

export default TechnologyContent;
