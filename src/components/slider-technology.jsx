const SliderTechnology = ({ data, button, onClick }) => {
  return (
    <>
      <div className="flex flex-col items-center gap-4 lg:flex-row lg:justify-between lg:gap-10 lg:~pl-20/28">
        <article className="flex w-11/12 flex-col items-center justify-center pt-6 text-center lg:order-2 lg:min-w-fit lg:pt-0 lg:text-start">
          <div className="flex flex-col gap-8 md:gap-0 lg:flex-row-reverse">
            <div className="flex flex-col gap-4">
              <span className="font-light uppercase tracking-widest text-lightBlue">
                The terminology ...
              </span>
              <h3 className="font-belleFair text-3xl uppercase md:text-5xl lg:text-6xl">
                {data.name}
              </h3>
              <p className="h-[180px] font-light leading-7 tracking-wider text-lightBlue md:h-fit md:max-w-[400px] lg:max-w-[350px]">
                {data.description}
              </p>
            </div>
          </div>
        </article>
        <ul className="flex justify-between gap-8 lg:order-1 lg:flex-col">
          <li>
            <button
              className={`${button === 0 ? "bg-white text-black" : "bg-transparent text-white"} h-16 w-16 rounded-full border border-white border-opacity-40 font-belleFair text-2xl transition duration-300 ease-in-out hover:bg-white hover:text-black hover:outline-none`}
              onClick={() => onClick(0)}
            >
              1
            </button>
          </li>
          <li>
            <button
              className={`${button === 1 ? "bg-white text-black" : "bg-transparent text-white"} h-16 w-16 rounded-full border border-white border-opacity-40 font-belleFair text-2xl transition duration-300 ease-in-out hover:bg-white hover:text-black hover:outline-none`}
              onClick={() => onClick(1)}
            >
              2
            </button>
          </li>
          <li>
            <button
              className={`${button === 2 ? "bg-white text-black" : "bg-transparent text-white"} h-16 w-16 rounded-full border border-white border-opacity-40 font-belleFair text-2xl transition duration-300 ease-in-out hover:bg-white hover:text-black hover:outline-none`}
              onClick={() => onClick(2)}
            >
              3
            </button>
          </li>
        </ul>
        <div className="lg:order-3">
          <img
            className="object-cover"
            src={data.images.portrait}
            alt={data.name}
          />
        </div>
      </div>
    </>
  );
};

export default SliderTechnology;
