import { Link } from "react-router-dom";

const main = () => {
  return (
    <>
      <main className="flex max-w-screen-xl flex-1 flex-col items-center md:w-full md:justify-between lg:flex-row lg:p-10">
        <article className="flex flex-col items-center py-6 text-center md:h-96 md:w-min md:justify-end lg:items-start lg:justify-center lg:gap-8 lg:text-left">
          <div className="flex flex-col items-center gap-6 lg:items-start">
            <span className="text-lightBlue flex flex-col text-xl font-light uppercase tracking-wide md:text-2xl md:tracking-widest">
              So, you want to travel to
            </span>
            <h1 className="font-belleFair text-7xl uppercase md:text-9xl">
              Space
            </h1>
            <p className="text-lightBlue w-[80%] font-light tracking-wide md:w-full">
              Let’s face it; if you want to go to space, you might as well
              genuinely go to outer space and not hover kind of on the edge of
              it. Well sit back, and relax because we’ll give you a truly out of
              this world experience!
            </p>
          </div>
        </article>
        <div className="flex flex-1 items-end py-6 md:items-center md:justify-end md:py-0">
          <Link
            to="/destination"
            className="relative flex h-40 w-40 items-center justify-center rounded-full bg-white font-belleFair text-2xl uppercase text-black transition-all duration-300 hover:shadow-2xl hover:shadow-white md:h-60 md:w-60 md:text-4xl"
          >
            Explore
          </Link>
        </div>
      </main>
    </>
  );
};

export default main;
