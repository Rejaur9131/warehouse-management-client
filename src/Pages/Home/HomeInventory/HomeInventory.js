import React from 'react';
import { useNavigate } from 'react-router-dom';

const HomeInventory = ({ inventoryItem }) => {
  const { _id, title, description, img } = inventoryItem;
  const navigate = useNavigate();
  const navigateToInventoryDetail = (id) => {
    navigate(`/inventoryItems/${id}`);
  };

  return (
    <div className="flex justify-center mb-16 px-4">
      <div className="rounded-lg shadow-lg bg-white max-w-sm">
        <img className="rounded-t-lg" src={img} alt="" />
        <div className="p-6">
          <h5 className="text-gray-900 text-xl font-medium mb-2">{title}</h5>
          <p className="text-gray-700 text-base mb-4">{description}</p>
          <p className="text-gray-700 text-base mb-1">Available in Stock: {inventoryItem.quantity}</p>
          <p className="text-gray-700 text-base mb-1">Price: {inventoryItem.price}</p>
          <p className="text-gray-700 text-base mb-1">Sold: {inventoryItem.sold}</p>
          <p className="text-gray-700 text-base mb-3">Supplier: {inventoryItem.supplier}</p>
          <button onClick={() => navigateToInventoryDetail(_id)} type="button" className=" inline-block px-6 py-2.5 bg-red-500 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-red-700 hover:shadow-lg focus:bg-red-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-red-700 active:shadow-lg transition duration-150 ease-in-out">
            Update
          </button>
        </div>
      </div>
    </div>
  );
};

export default HomeInventory;
