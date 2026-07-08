const Card = (users) => {
  return (
    <div className="w-80 rounded-xl bg-white border border-gray-200 shadow-md p-6">
      <h2 className="text-2xl font-semibold text-slate-800">
        {users.users.name}
      </h2>

      <div className="mt-4 inline-block rounded-full bg-blue-100 px-4 py-1">
        <span className="text-lg font-semibold text-blue-700">
          ₹ {users.users.price}
        </span>
      </div>

      <p className="mt-5 text-gray-600 leading-6">{users.users.desc}</p>

      <button className="mt-6 w-full rounded-lg bg-blue-600 py-3 text-white font-medium cursor-pointer">
        Buy Now
      </button>
    </div>
  );
};

export default Card;
