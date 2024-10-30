import { useContext } from "react";
import MediaContext from "../media-context";

const SliderCrew = ({ data, button, onClick }) => {
  const desktop = useContext(MediaContext);
  return (
    <>
      <div
        className={`${desktop && "~lg/xl:~pl-20/0"} flex flex-col items-center md:justify-center md:gap-4 lg:h-full lg:flex-row lg:justify-evenly lg:gap-0`}
      >
        <article className="flex flex-col items-center justify-center gap-10 p-8 text-center md:w-[500px] lg:w-[460px] lg:items-start lg:gap-20 lg:p-0 lg:text-start">
          <div className="flex flex-col gap-4 lg:gap-6">
            <span className="font-belleFair text-2xl font-thin uppercase tracking-widest text-white text-opacity-50">
              {data.role}
            </span>
            <h2 className="font-belleFair text-3xl uppercase md:text-5xl">
              {data.name}
            </h2>
            <p className="font-light tracking-wider text-lightBlue lg:w-[360px]">
              {data.bio}
            </p>
          </div>
          <ul className="flex gap-4">
            <li>
              <button
                className={`${button === 0 ? "bg-opacity-100" : "bg-opacity-10"} h-5 w-5 rounded-full bg-white bg-opacity-10 transition duration-300 ease-in-out hover:bg-opacity-100`}
                onClick={() => onClick(0)}
              ></button>
            </li>
            <li>
              <button
                className={`${button === 1 ? "bg-opacity-100" : "bg-opacity-10"} h-5 w-5 rounded-full bg-white bg-opacity-10 transition duration-300 ease-in-out hover:bg-opacity-100`}
                onClick={() => onClick(1)}
              ></button>
            </li>
            <li>
              <button
                className={`${button === 2 ? "bg-opacity-100" : "bg-opacity-10"} h-5 w-5 rounded-full bg-white bg-opacity-10 transition duration-300 ease-in-out hover:bg-opacity-100`}
                onClick={() => onClick(2)}
              ></button>
            </li>
            <li>
              <button
                className={`${button === 3 ? "bg-opacity-100" : "bg-opacity-10"} h-5 w-5 rounded-full bg-white bg-opacity-10 transition duration-300 ease-in-out hover:bg-opacity-100`}
                onClick={() => onClick(3)}
              ></button>
            </li>
          </ul>
        </article>
        <img
          className="w-11/12 object-contain lg:h-[700px] lg:w-5/12"
          src={data.images.png}
        />
      </div>
    </>
  );
};

export default SliderCrew;
