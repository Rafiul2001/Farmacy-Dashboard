import React, { useState } from 'react'

const Medicine = () => {

  const [buttonValue, setButtonValue] = useState('Medicine List')

  const onSubmit = () => {
    // Enter your code On Submit
    setButtonValue('Medicine List')
  }

  return (
    <div className='w-full h-max overflow-auto'>
      {
        buttonValue === 'Medicine List' ?
          <div>
            <div className='w-full p-4 bg-farmacy-light-blue rounded-lg overflow-auto'>
              <table className='w-full table-auto text-lg whitespace-nowrap'>
                <thead className='border-b-2 text-white'>
                  <tr>
                    <th className='text-start p-2'>Medicine ID</th>
                    <th className='text-start p-2'>Medicine Name</th>
                    <th className='text-start p-2'>Description</th>
                    <th className='text-start p-2'>Expiry Date</th>
                    <th className='text-start p-2'>Cost Price</th>
                    <th className='text-start p-2'>Selling Price</th>
                    <th className='text-start p-2'>Quantity In Stock</th>
                  </tr>
                </thead>
                <tbody className='text-farmacy-light-gray'>
                  <tr className='hover:bg-farmacy-blue hover:text-white cursor-pointer'>
                    <td className='text-start p-2'>Medicine ID</td>
                    <td className='text-start p-2'>Medicine Name</td>
                    <td className='text-start p-2'>Description</td>
                    <td className='text-start p-2'>Expiry Date</td>
                    <td className='text-start p-2'>Cost Price</td>
                    <td className='text-start p-2'>Selling Price</td>
                    <td className='text-start p-2'>Quantity In Stock</td>
                  </tr>
                </tbody>
              </table>
            </div>

            <button onClick={() => setButtonValue('Add')} className='block w-fit text-white bg-farmacy-light-blue border rounded-lg cursor-pointer mt-8 font-semibold hover:bg-farmacy-blue hover:border-farmacy-blue px-20 py-2' type="submit">Add Medicine</button>

          </div> : null
      }

      {
        buttonValue === 'Add' ?
          <div className='w-full p-4 bg-farmacy-light-blue rounded-lg overflow-auto mt-4 text-white whitespace-nowrap'>
            <h1 className='font-semibold text-xl'>Add Medicine :</h1>
            <form action="" className='mt-4 flex flex-col gap-8 w-full'>

              <ul className='flex flex-col gap-2'>
                <li className='flex flex-col sm:flex-row gap-5 sm:items-center'>
                  <label className='w-[150px]' htmlFor="med_name">Medicine Name:</label>
                  <input className='px-2 font-medium outline-none rounded-md bg-white text-farmacy-light-blue' type="text" name="med_name" id="med_name" />
                </li>
                <li className='flex flex-col sm:flex-row gap-5 sm:items-center'>
                  <label className='w-[150px]' htmlFor="description">Description:</label>
                  <input className='px-2 font-medium outline-none rounded-md bg-white text-farmacy-light-blue' type="text" name="description" id="description" />
                </li>
                <li className='flex flex-col sm:flex-row gap-5 sm:items-center'>
                  <label className='w-[150px]' htmlFor="expirydate">Expiry date:</label>
                  <input className='px-2 font-medium outline-none rounded-md bg-white text-farmacy-light-blue' type="text" name="expirydate" id="expirydate" />
                </li>
                <li className='flex flex-col sm:flex-row gap-5 sm:items-center'>
                  <label className='w-[150px]' htmlFor="costprice">Cost Price:</label>
                  <input className='px-2 font-medium outline-none rounded-md bg-white text-farmacy-light-blue' type="text" name="costprice" id="costprice" />
                </li>
                <li className='flex flex-col sm:flex-row gap-5 sm:items-center'>
                  <label className='w-[150px]' htmlFor="sellingprice">Selling Price:</label>
                  <input className='px-2 font-medium outline-none rounded-md bg-white text-farmacy-light-blue' type="text" name="sellingprice" id="sellingprice" />
                </li>
                <li className='flex flex-col sm:flex-row gap-5 sm:items-center'>
                  <label className='w-[150px]' htmlFor="quantityInStock">Quantity in Stock:</label>
                  <input className='px-2 font-medium outline-none rounded-md bg-white text-farmacy-light-blue' type="text" name="quantityInStock" id="quantityInStock" />
                </li>
              </ul>

              <div className='mt-8 flex flex-col sm:flex-row gap-5'>
                <input onClick={onSubmit} className='block sm:w-[180px] text-white bg-farmacy-light-blue border rounded-lg cursor-pointer font-semibold hover:bg-farmacy-blue hover:border-farmacy-blue py-2' type="submit" value="Add" />
                <input onClick={() => setButtonValue('Medicine List')} className='block sm:w-[180px] text-white bg-farmacy-light-blue border rounded-lg cursor-pointer font-semibold hover:bg-farmacy-blue hover:border-farmacy-blue py-2' type="button" value="Cancel" />
              </div>
            </form>
          </div>
          : null
      }
    </div>
  )
}

export default Medicine