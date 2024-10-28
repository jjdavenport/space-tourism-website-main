const SliderCrew = ({ data, button }) => {
  return (
    <>
      <div className="flex flex-col md:flex-row">
        <article className="flex flex-col items-center justify-center gap-4 p-8 text-center md:w-1/2 md:items-start md:p-0 md:text-start">
          <div className="flex flex-col gap-4">
            <span className="font-belleFair text-2xl uppercase tracking-widest text-white text-opacity-20">
              {data.role}
            </span>
            <h2 className="font-belleFair text-3xl uppercase md:text-7xl">
              {data.name}
            </h2>
            <p className="text-lightBlue font-light tracking-wide">
              {data.bio}
            </p>
          </div>
          <ul className="flex gap-4">
            <li>
              <button
                className={`${button === "1" ? "bg-opacity-100" : "bg-opacity-10"} h-5 w-5 rounded-full bg-white bg-opacity-10 transition duration-300 ease-in-out hover:bg-opacity-100`}
                onClick={() => click("1")}
              ></button>
            </li>
            <li>
              <button
                className={`${button === "2" ? "bg-opacity-100" : "bg-opacity-10"} h-5 w-5 rounded-full bg-white bg-opacity-10 transition duration-300 ease-in-out hover:bg-opacity-100`}
                onClick={() => click("2")}
              ></button>
            </li>
            <li>
              <button
                className={`${button === "3" ? "bg-opacity-100" : "bg-opacity-10"} h-5 w-5 rounded-full bg-white bg-opacity-10 transition duration-300 ease-in-out hover:bg-opacity-100`}
                onClick={() => click("3")}
              ></button>
            </li>
            <li>
              <button
                className={`${button === "4" ? "bg-opacity-100" : "bg-opacity-10"} h-5 w-5 rounded-full bg-white bg-opacity-10 transition duration-300 ease-in-out hover:bg-opacity-100`}
                onClick={() => click("4")}
              ></button>
            </li>
          </ul>
        </article>
        <img className="object-contain md:w-1/2" src={data.images.png} />
      </div>
    </>
  );
};

export default SliderCrew;
