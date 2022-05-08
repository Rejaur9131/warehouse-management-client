import React, { useEffect, useState } from 'react';
import AllInventory from '../AllInventory/AllInventory';
import { useNavigate } from 'react-router-dom';

const ManageInventories = () => {
  const navigate = useNavigate();
  const [inventoryItems, setInventoryItems] = useState([]);
  const navigateToAddItems = () => {
    navigate(`/addItems/`);
  };

  useEffect(() => {
    const url = `https://mighty-tundra-60572.herokuapp.com/inventoryitems`;
    fetch(url)
      .then((res) => res.json())
      .then((data) => setInventoryItems(data));
  }, []);

  return (
    <div className="mb-10">
      <h2 className="text-3xl py-5 text-red-500 font-bold"> Manage Inventory Items</h2>
      <h2 className="text-2xl font-bold py-5">Items: {inventoryItems.length}</h2>
      <div className="flex justify-around flex-wrap mb-12">
        {inventoryItems.map((inventoryItem) => (
          <AllInventory key={inventoryItem._id} inventoryItem={inventoryItem}></AllInventory>
        ))}
      </div>
      <button onClick={navigateToAddItems} type="button" className=" inline-block px-6 py-2.5 bg-red-500 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-red-700 hover:shadow-lg focus:bg-red-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-red-700 active:shadow-lg transition duration-150 ease-in-out mb-10">
        Add New Item
      </button>
    </div>
  );
};

export default ManageInventories;
