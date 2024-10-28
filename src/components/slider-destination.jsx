const SliderDestination = ({ data, planets, button }) => {
  return (
    <>
      <div className="flex flex-1 flex-col items-center gap-10 p-5 md:flex-row md:justify-center md:gap-20 md:p-10">
        <img className="animate-spin-slow md:w-2/6" src={data.images.png} />
        <article className="flex flex-col items-center gap-4 divide-y-2 divide-white divide-opacity-15 p-2 md:w-[400px] md:items-start md:gap-12 md:p-0 md:text-start">
          <div className="flex flex-col items-center gap-4 md:items-start md:gap-12">
            <ul className="flex gap-4">
              {planets.map((i, index) => (
                <li key={index}>
                  <button
                    className={`${button === i.name ? "border-white" : "border-transparent"} text-lightBlue border-b-2 text-2xl uppercase tracking-widest transition duration-300 ease-in-out md:text-xl`}
                  >
                    {i.name}
                  </button>
                </li>
              ))}
            </ul>
            <div className="flex flex-col items-center gap-4 text-center md:items-start md:text-left">
              <h2 className="font-belleFair text-7xl uppercase">{data.name}</h2>
              <p className="text-lightBlue tracking-wide">{data.description}</p>
            </div>
          </div>
          <div className="flex w-full justify-center gap-8 py-4 md:justify-start">
            <div className="flex flex-col items-center gap-2 md:items-start">
              <span className="text-lightBlue uppercase">Avg. distance</span>
              <span className="font-belleFair text-2xl uppercase">
                {data.distance}
              </span>
            </div>
            <div className="flex flex-col items-center gap-2 md:items-start">
              <span className="text-lightBlue uppercase">Est travel time</span>
              <span className="font-belleFair text-2xl uppercase">
                {data.travel}
              </span>
            </div>
          </div>
        </article>
      </div>
    </>
  );
};

export default SliderDestination;
