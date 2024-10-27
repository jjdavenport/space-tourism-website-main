const SliderDestination = ({ data, planets, button }) => {
  return (
    <>
      <div className="flex flex-1 flex-col items-center gap-10 md:flex-row md:p-10">
        <img className="animate-spin-slow md:w-1/2" src={data.images.png} />
        <article className="flex flex-col items-center gap-4 p-2 text-center md:w-1/2 md:items-start md:p-0 md:text-start">
          <ul className="flex gap-4">
            {planets.map((i, index) => (
              <li key={index}>
                <button
                  onClick={() => {
                    destinationBtn(i.name);
                  }}
                  className={`${button === i.name ? "border-white" : "border-transparent"} border-b-2 text-2xl uppercase`}
                >
                  {i.name}
                </button>
              </li>
            ))}
          </ul>
          <h2 className="font-belleFair text-7xl uppercase">{data.name}</h2>
          <p>{data.description}</p>
          <div className="flex gap-8">
            <div className="flex flex-col gap-2">
              <span className="uppercase">Avg. distance</span>
              <span className="font-belleFair text-4xl uppercase">
                {data.distance}
              </span>
            </div>
            <div className="flex flex-col gap-2">
              <span className="uppercase">Est travel time</span>
              <span className="font-belleFair text-4xl uppercase">
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
