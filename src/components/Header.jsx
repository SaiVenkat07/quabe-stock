function Header() {

  return (
    <div className="flex flex-col lg:flex-row justify-between items-start lg:items-center mb-6">
      <div>
        <h1 className="text-2xl font-bold">Hello, Arjun</h1>
        <p className="text-gray-500">
          Welcome to Quabe Stock
        </p>
      </div>
      <div className="flex space-x-4 mt-4 lg:mt-0">
        <button className="bg-gray-800 p-2 rounded">For you</button>
        <button className="bg-gray-800 p-2 rounded">Screener</button>
        <button className="bg-gray-800 p-2 rounded">Portfolio</button>
      </div>
    </div>
  );
}

export default Header;

