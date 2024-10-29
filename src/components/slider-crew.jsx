const SliderCrew = ({ data, button, onClick }) => {
  return (
    <>
      <div className="flex flex-col md:justify-center lg:flex-row">
        <article className="flex flex-col items-center justify-center gap-4 p-8 text-center lg:w-[400px] lg:items-start lg:p-0 lg:text-start">
          <div className="flex flex-col gap-4">
            <span className="font-belleFair text-2xl font-light uppercase tracking-widest text-white text-opacity-30">
              {data.role}
            </span>
            <h2 className="font-belleFair text-3xl uppercase md:text-7xl">
              {data.name}
            </h2>
            <p className="font-light tracking-wide text-lightBlue">
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
        <img className="h-[700px] object-contain" src={data.images.png} />
      </div>
    </>
  );
};

export default SliderCrew;
