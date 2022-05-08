import React from 'react';
import { useNavigate } from 'react-router-dom';

const AllInventory = ({ inventoryItem }) => {
  const { _id, title, description, img } = inventoryItem;
  const navigate = useNavigate();
  const navigateToInventoryDetail = (id) => {
    navigate(`/inventoryItems/${id}`);
  };

  const handleDelete = () => {
    const confirmation = window.confirm('Are you sure you wanna delete this item?');
  };

  return (
    <div className="flex justify-center mb-4 px-4 align-middle">
      <div className="flex flex-col md:flex-row md:max-w-xl rounded-lg bg-white shadow-lg">
        <img className=" w-full h-96 md:h-auto object-cover md:w-48 rounded-t-lg md:rounded-none md:rounded-l-lg" src={img} alt="" />
        <div className="p-6 flex flex-col justify-start">
          <h5 className="text-gray-900 text-xl font-medium mb-2">{title}</h5>
          <p className="text-gray-700 text-base mb-4">{description}</p>
          <div className="flex justify-between">
            <button onClick={() => navigateToInventoryDetail(_id)} type="button" className="w-24 inline-block px-6 py-2.5 bg-red-500 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-red-700 hover:shadow-lg focus:bg-red-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-red-700 active:shadow-lg transition duration-150 ease-in-out">
              Update
            </button>
            <button onClick={handleDelete} type="button" className="w-24 inline-block px-6 py-2.5 bg-red-500 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-red-700 hover:shadow-lg focus:bg-red-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-red-700 active:shadow-lg transition duration-150 ease-in-out">
              Delete
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AllInventory;
