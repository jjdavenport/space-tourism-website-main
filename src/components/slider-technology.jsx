const SliderTechnology = ({ data, button }) => {
  return (
    <>
      <div className="flex flex-col md:flex-row">
        <article className="flex flex-col justify-center p-8 text-center md:w-3/6 md:text-start">
          <div className="flex flex-col gap-8 md:flex-row-reverse">
            <div className="flex flex-col gap-4">
              <span className="text-lightBlue uppercase tracking-widest">
                The terminology ...
              </span>
              <h3 className="font-belleFair text-6xl uppercase">{data.name}</h3>
              <p className="text-lightBlue font-light leading-7 tracking-wide">
                {data.description}
              </p>
            </div>
            <ul className="flex justify-between gap-8 md:flex-col">
              <li>
                <button
                  className={`${button === "1" ? "bg-white text-black" : "bg-transparent text-white"} h-16 w-16 rounded-full font-belleFair text-xl outline outline-1 outline-white transition duration-300 ease-in-out hover:bg-white hover:text-black hover:outline-none`}
                  onClick={() => click("1")}
                >
                  1
                </button>
              </li>
              <li>
                <button
                  className={`${button === "2" ? "bg-white text-black" : "bg-transparent text-white"} h-16 w-16 rounded-full font-belleFair text-xl outline outline-1 outline-white transition duration-300 ease-in-out hover:bg-white hover:text-black hover:outline-none`}
                  onClick={() => click("2")}
                >
                  2
                </button>
              </li>
              <li>
                <button
                  className={`${button === "3" ? "bg-white text-black" : "bg-transparent text-white"} h-16 w-16 rounded-full font-belleFair text-xl outline outline-1 outline-white transition duration-300 ease-in-out hover:bg-white hover:text-black hover:outline-none`}
                  onClick={() => click("3")}
                >
                  3
                </button>
              </li>
            </ul>
          </div>
        </article>
        <img
          className="object-contain md:w-3/6"
          src={data.images.portrait}
          alt={data.name}
        />
      </div>
    </>
  );
};

export default SliderTechnology;
