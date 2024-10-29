import React, { useState } from 'react'
import Sidebar from '../components/SideBar'
import useFetchData from '../hook/useSupplier';

const CreateItem = () => {
    const [formData, setFormData] = useState({
        itemName: '',
        inventoryLocation: '',
        brand: '',
        category: '',
        supplier: '', // This would typically be populated from your supplier list.
        sockeUnit: 'Unit',
        unitPrice: '',
        itemImages: [],
        status: 'Enabled',
      });

      const {data,isLoading,isError}=useFetchData()
      console.log(data,'data');
      
      // Handle input change
      const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
      };
    
      // Handle form submission
      const handleSubmit = async (e) => {
        e.preventDefault();
        try {
          const response = await axios.post('/api/items', formData); // Replace with your API endpoint
          console.log('Item created successfully:', response.data);
        } catch (error) {
          console.error('Error creating item:', error);
        }
      };
  return (
    <div className='h-screen flex overflow-hidden w-full'>
        <div>
            <Sidebar/>
        </div>
        <div className='w-full overflow-y-auto'>
        <div className=" p-6 bg-white rounded-lg shadow-lg mt-8">
      <h2 className="text-2xl font-bold mb-6 text-secondary">Add New Item</h2>
      <form onSubmit={handleSubmit} className="space-y-4">
        {/* Item Name */}
        <div>
          <label className="block font-semibold text-black mb-1">Item Name</label>
          <input
            type="text"
            name="itemName"
            value={formData.itemName}
            onChange={handleChange}
            className="w-full px-4 py-2 border rounded-lg"
            required
          />
        </div>

        {/* Inventory Location */}
        <div>
          <label className="block font-semibold text-black mb-1">Inventory Location</label>
          <input
            type="text"
            name="inventoryLocation"
            value={formData.inventoryLocation}
            onChange={handleChange}
            className="w-full px-4 py-2 border rounded-lg"
            required
          />
        </div>

        {/* Brand */}
        <div>
          <label className="block font-semibold text-black mb-1">Brand</label>
          <input
            type="text"
            name="brand"
            value={formData.brand}
            onChange={handleChange}
            className="w-full px-4 py-2 border rounded-lg"
            required
          />
        </div>

        {/* Category */}
        <div>
          <label className="block font-semibold text-black mb-1">Category</label>
          <input
            type="text"
            name="category"
            value={formData.category}
            onChange={handleChange}
            className="w-full px-4 py-2 border rounded-lg"
            required
          />
        </div>

        {/* Supplier */}
        <div>
  <label className="block font-semibold text-black mb-1">Supplier</label>
  <select
    name="supplier"
    value={formData.supplier} // Assuming formData.supplier is the selected supplier ID
    onChange={handleChange} // Use the same handler to update form data
    className="w-full px-4 py-2 border rounded-lg"
    required
  >
    <option value="">Select a Supplier</option> {/* Placeholder option */}
    {isLoading && <option>Loading...</option>} {/* Loading state */}
    {isError && <option>Error loading suppliers</option>} {/* Error state */}
    {data && data.map(supplier => (
      <option className='text-black' key={supplier._id} value={supplier._id}>
        {supplier.supplierName} {/* Display the supplier name */}
      </option>
    ))}
  </select>
</div>

        {/* Socke Unit */}
        <div>
          <label className="block font-semibold text-black mb-1">Unit of Measure</label>
          <select
            name="sockeUnit"
            value={formData.sockeUnit}
            onChange={handleChange}
            className="w-full px-4 py-2 border rounded-lg"
            required
          >
            <option value="Unit">Unit</option>
            <option value="Kg">Kg</option>
            <option value="Litre">Litre</option>
          </select>
        </div>

        {/* Unit Price */}
        <div>
          <label className="block font-semibold text-black mb-1">Unit Price</label>
          <input
            type="number"
            name="unitPrice"
            value={formData.unitPrice}
            onChange={handleChange}
            className="w-full px-4 py-2 border rounded-lg"
            required
          />
        </div>

        {/* Item Images */}
        <div>
          <label className="block font-semibold text-black mb-1">Item Images</label>
          <input
            type="text"
            name="itemImages"
            value={formData.itemImages}
            onChange={(e) => setFormData({ ...formData, itemImages: e.target.value.split(',') })}
            className="w-full px-4 py-2 border rounded-lg"
            placeholder="Image URLs separated by commas"
          />
        </div>

        {/* Status */}
        <div>
          <label className="block font-semibold text-black mb-1">Status</label>
          <select
            name="status"
            value={formData.status}
            onChange={handleChange}
            className="w-full px-4 py-2 border rounded-lg"
          >
            <option value="Enabled">Enabled</option>
            <option value="Disabled">Disabled</option>
          </select>
        </div>

        {/* Submit Button */}
        <button type="submit" className="w-full py-2 bg-primary text-black hover:text-white rounded-lg font-semibold hover:bg-secondary">
          Add Item
        </button>
      </form>
    </div>
        </div>
    </div>
  )
}

export default CreateItem