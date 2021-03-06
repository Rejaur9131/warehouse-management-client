import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import Carousel from '../Carousel/Carousel';
import HomeInventory from '../HomeInventory/HomeInventory';
import Loading from './../../Loading/Loading';

const Home = () => {
  const [inventoryItems, setInventoryItems] = useState([]);
  useEffect(() => {
    const url = `https://mighty-tundra-60572.herokuapp.com/inventoryitems`;
    fetch(url)
      .then((res) => res.json())
      .then((data) => setInventoryItems(data.slice(0, 6)));
  }, []);

  return (
    <div>
      <Carousel></Carousel>
      <h2 className="text-3xl py-5 text-red-500 font-bold">Inventory Items</h2>
      <h2 className="text-2xl font-bold py-5">Items: {inventoryItems.length}</h2>

      <div className="flex justify-around flex-wrap">
        {inventoryItems.map((inventoryItem) => (
          <HomeInventory key={inventoryItem._id} inventoryItem={inventoryItem}></HomeInventory>
        ))}
      </div>
      <div className="mb-24">
        <Link to="/inventoryitems" className="text-lg text-white italic bg-red-500 px-4 rounded-md py-2">
          Manage Inventories
        </Link>
      </div>
    </div>
  );
};

export default Home;
