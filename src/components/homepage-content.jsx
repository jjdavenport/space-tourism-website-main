const main = () => {
  return (
    <>
      <section className="flex flex-1 flex-col items-center justify-evenly lg:flex-row lg:p-8">
        <article className="flex flex-col items-center text-center lg:items-start lg:gap-8 lg:text-left">
          <span className="flex flex-col text-2xl font-normal uppercase">
            So, you want to travel to
          </span>
          <h1 className="font-belleFair text-7xl font-normal uppercase md:text-9xl">
            Space
          </h1>
          <p className="w-1/2">
            Let’s face it; if you want to go to space, you might as well
            genuinely go to outer space and not hover kind of on the edge of it.
            Well sit back, and relax because we’ll give you a truly out of this
            world experience!
          </p>
        </article>
        <button className="relative min-h-60 min-w-60 rounded-full bg-white font-belleFair text-5xl uppercase text-black transition-all duration-300 hover:shadow-2xl hover:shadow-white">
          Explore
        </button>
      </section>
    </>
  );
};

export default main;
