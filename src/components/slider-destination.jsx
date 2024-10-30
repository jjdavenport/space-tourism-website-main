const SliderDestination = ({ data, planets, button, onClick }) => {
  return (
    <>
      <div className="flex flex-1 flex-col items-center gap-10 p-5 lg:flex-row lg:justify-evenly lg:p-10">
        <img className="animate-spin-slow lg:w-2/6" src={data.images.png} />
        <article className="flex flex-col items-center gap-4 divide-y-2 divide-white divide-opacity-15 p-2 lg:w-[350px] lg:items-start lg:gap-12 lg:p-0 lg:text-start">
          <div className="flex flex-col items-center gap-4 lg:items-start lg:gap-12">
            <ul className="flex gap-6">
              {planets.map((i, index) => (
                <li key={index}>
                  <button
                    onClick={() => onClick(i.name)}
                    className={`${button === i.name ? "border-white" : "border-transparent"} border-b-4 p-1 text-2xl uppercase tracking-widest text-lightBlue transition duration-300 ease-in-out md:text-xl`}
                  >
                    {i.name}
                  </button>
                </li>
              ))}
            </ul>
            <div className="flex flex-col items-center gap-4 text-center lg:items-start lg:text-left">
              <h2 className="font-belleFair text-8xl uppercase">{data.name}</h2>
              <p className="tracking-wider text-lightBlue">
                {data.description}
              </p>
            </div>
          </div>
          <div className="flex w-full justify-center gap-8 py-4 lg:justify-start">
            <div className="flex flex-col items-center gap-2 lg:items-start">
              <span className="uppercase text-lightBlue">Avg. distance</span>
              <span className="font-belleFair text-2xl uppercase">
                {data.distance}
              </span>
            </div>
            <div className="flex flex-col items-center gap-2 lg:items-start">
              <span className="uppercase text-lightBlue">Est travel time</span>
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
