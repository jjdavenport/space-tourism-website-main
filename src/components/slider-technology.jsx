const SliderTechnology = ({ data, button, onClick }) => {
  return (
    <>
      <div className="flex flex-col items-center lg:flex-row lg:justify-end">
        <article className="flex flex-col justify-center p-8 text-center lg:text-start">
          <div className="flex flex-col gap-8 lg:flex-row-reverse">
            <div className="flex flex-col gap-4">
              <span className="uppercase tracking-widest text-lightBlue">
                The terminology ...
              </span>
              <h3 className="font-belleFair text-3xl uppercase">{data.name}</h3>
              <p className="h-[200px] font-light leading-7 tracking-wider text-lightBlue md:h-fit">
                {data.description}
              </p>
            </div>
            <ul className="flex justify-between gap-8 lg:flex-col">
              <li>
                <button
                  className={`${button === 0 ? "bg-white text-black" : "bg-transparent text-white"} h-16 w-16 rounded-full font-belleFair text-3xl outline outline-1 outline-white transition duration-300 ease-in-out hover:bg-white hover:text-black hover:outline-none lg:h-24 lg:w-24`}
                  onClick={() => onClick(0)}
                >
                  1
                </button>
              </li>
              <li>
                <button
                  className={`${button === 1 ? "bg-white text-black" : "bg-transparent text-white"} h-16 w-16 rounded-full font-belleFair text-3xl outline outline-1 outline-white transition duration-300 ease-in-out hover:bg-white hover:text-black hover:outline-none lg:h-24 lg:w-24`}
                  onClick={() => onClick(1)}
                >
                  2
                </button>
              </li>
              <li>
                <button
                  className={`${button === 2 ? "bg-white text-black" : "bg-transparent text-white"} h-16 w-16 rounded-full font-belleFair text-3xl outline outline-1 outline-white transition duration-300 ease-in-out hover:bg-white hover:text-black hover:outline-none lg:h-24 lg:w-24`}
                  onClick={() => onClick(2)}
                >
                  3
                </button>
              </li>
            </ul>
          </div>
        </article>
        <img
          className="object-contain"
          src={data.images.portrait}
          alt={data.name}
        />
      </div>
    </>
  );
};

export default SliderTechnology;
