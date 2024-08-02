const main = () => {
  return (
    <>
      <section className="flex flex-1 flex-col items-center justify-evenly xl:flex-row">
        <article className="flex flex-col items-center text-center xl:items-start xl:text-left">
          <h1 className="flex flex-col text-2xl font-normal uppercase">
            So, you want to travel to{" "}
            <strong className="text-9xl font-normal">Space</strong>{" "}
          </h1>
          <p className="w-1/2">
            Let’s face it; if you want to go to space, you might as well
            genuinely go to outer space and not hover kind of on the edge of it.
            Well sit back, and relax because we’ll give you a truly out of this
            world experience!
          </p>
        </article>
        <button className="h-60 w-60 rounded-full bg-white text-5xl uppercase text-black">
          Explore
        </button>
      </section>
    </>
  );
};

export default main;
