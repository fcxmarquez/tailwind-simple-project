export const Card = () => {
  return (
    <div className="card">
      <div className="h-3/5 w-full bg-norway bg-cover" />
      <div className="h-2/5 w-full bg-secondary">
        <p className="text-bold px-4 py-2 text-xl text-white">Norway</p>
        <p className="text-md px-4 text-white">Beautiful landscapes</p>
      </div>
    </div>
  );
};
