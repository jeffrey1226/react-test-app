import React, { useState } from 'react';

const initialData = [
  "Milk",
  "Coffie",
  "Orange",
  "Bread"
];

function App() {
  const [data, setData] = useState(initialData);
  const [searchKey, setSearchKey] = useState("");

  const onSearch = (e) => {
    setSearchKey(e.target.value);
  };

  const onAddData = () => {
    setData(
      [
        ...data,
        Math.random().toString(36).substr(2, 8)
      ]
    );
  }

  return (
    <div className="App flex justify-center">
      <div className="container w-11/12 sm:w-500 m-2">
        <div className="flex">
          <input
            type="text"
            className="flex-1 border-1 border-gray-500 text-gray-900 rounded-md py-3 px-4 focus:outline-none"
            placeholder="Search"
            onChange={onSearch}
          />
          <button
            className="ml-2 py-2 px-4 bg-black text-white font-semibold rounded-lg shadow-md hover:bg-black focus:outline-none"
            onClick={onAddData}
          >
            Add
        </button>
        </div>
        <div className="mt-2 flex-1 border-1 border-gray-500">
          {
            data
              .filter(item => searchKey.isEmpty || (item.toLowerCase().includes(searchKey.toLowerCase())))
              .map((item, index) => (
                <div className="py-2 px-4 border-b-1 border-gray-500 last:border-b-0" key={index} >
                  {item}
                </div>
              ))
          }
        </div>
      </div>
    </div>
  );
}

export default App;
