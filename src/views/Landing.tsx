import sanFranciscoImg from "../assets/img/sanFrancisco.jpg";

export const Landing = () => {
  return (
    <>
      <nav></nav>
      <div id="tab-bar"></div>
      <section className="h-screen w-full">
        <div className="home">
          <div className="h-3/4 w-full">
            <div className="absolute flex h-full w-full flex-col items-center space-y-96 py-4">
              <input
                className="rounded-full p-3 shadow-sm"
                placeholder="San Francisco..."
                type="search"
                name=""
                id=""
              />
              <button className="w-36 rounded-full bg-white p-4 text-xl font-semibold text-primary shadow-sm">
                Explore
              </button>
            </div>
            <div className="h-full w-full">
              <img src={sanFranciscoImg} />
            </div>
          </div>
        </div>
        <div className="p-20" id="recommendations">
          <div className="h-64 w-48 overflow-hidden rounded-lg shadow-md">
            <div className="h-3/5 w-full bg-norway bg-cover" />
            <div className="h-2/5 w-full bg-secondary">
              <p className="text-white text-bold text-xl px-4 py-2">Norway</p>
              <p className="text-white text-md px-4">Beautiful landscapes</p>
            </div>
          </div>
        </div>
        <div id="featured-rents"></div>
      </section>
      <footer></footer>
    </>
  );
};
