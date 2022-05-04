import React, { useEffect, useState } from 'react';
import AllInventory from '../AllInventory/AllInventory';

const ManageInventories = () => {
  const [inventoryItems, setInventoryItems] = useState([]);
  useEffect(() => {
    const url = `https://mighty-tundra-60572.herokuapp.com/inventoryitems`;
    fetch(url)
      .then((res) => res.json())
      .then((data) => setInventoryItems(data));
  }, []);
  return (
    <div>
      <h2 className="text-3xl py-5 text-red-500 font-bold"> Manage Inventory Items</h2>
      <h2 className="text-2xl font-bold py-5">Items: {inventoryItems.length}</h2>
      <div className="flex justify-around flex-wrap mb-12">
        {inventoryItems.map((inventoryItem) => (
          <AllInventory key={inventoryItem._id} inventoryItem={inventoryItem}></AllInventory>
        ))}
      </div>
    </div>
  );
};

export default ManageInventories;
