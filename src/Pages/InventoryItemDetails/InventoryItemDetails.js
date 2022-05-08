import React, { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';

const InventoryItemDetails = () => {
  const { itemsId } = useParams();
  const [inventoryItem, setInventoryItem] = useState({});

  useEffect(() => {
    const url = `https://mighty-tundra-60572.herokuapp.com/inventoryitems/${itemsId}`;
    fetch(url)
      .then((res) => res.json())
      .then((data) => setInventoryItem(data));
  }, [itemsId]);

  return (
    <div>
      <div className="flex justify-center mb-4 px-4 align-middle mt-6">
        <div className="flex flex-col md:flex-row md:max-w-xl rounded-lg bg-white shadow-lg">
          <img className=" w-full h-96 md:h-auto object-cover md:w-48 rounded-t-lg md:rounded-none md:rounded-l-lg" src={inventoryItem.img} alt="" />
          <div className="p-6 flex flex-col justify-start">
            <h5 className="text-gray-900 text-xl font-medium mb-2">{inventoryItem.title}</h5>
            <p className="text-gray-700 text-xl mb-4">{inventoryItem.description}</p>
            <p className="text-gray-700 text-base mb-1">Available in Stock: {inventoryItem.quantity}</p>
            <p className="text-gray-700 text-base mb-1">Price: {inventoryItem.price}</p>
            <p className="text-gray-700 text-base mb-1">Sold: {inventoryItem.sold}</p>
            <p className="text-gray-700 text-base mb-3">Supplier: {inventoryItem.supplier}</p>
            <div className="flex justify-center">
              <button type="button" className=" inline-block px-6 py-2.5 bg-red-500 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-red-700 hover:shadow-lg focus:bg-red-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-red-700 active:shadow-lg transition duration-150 ease-in-out">
                Deliver
              </button>
              {/* <button onClick={handleDelete} type="button" className="w-28 inline-block px-6 py-2.5 bg-red-500 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-red-700 hover:shadow-lg focus:bg-red-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-red-700 active:shadow-lg transition duration-150 ease-in-out">
              Delete
            </button> */}
            </div>
          </div>
        </div>
      </div>
      <form>
        <label className="text-red-500 text-2xl mb-4" htmlFor="stock">
          Restock The Items
        </label>
        <br />
        <input className="bg-slate-200 text-center text-xl mt-2" type="number" name="stock" id="" />
      </form>
      <div className="mb-24 mt-6">
        <Link to="/inventoryitems" className="text-lg text-white italic bg-red-500 px-4 rounded-md py-2">
          Manage Inventories
        </Link>
      </div>
    </div>
  );
};

export default InventoryItemDetails;
