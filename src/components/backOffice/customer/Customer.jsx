import React, { useState } from 'react'

const Customer = () => {

  const [buttonValue, setButtonValue] = useState('Customer-List')

  const onSubmit = () => {
    // Enter your code On Submit
    setButtonValue('Customer-List')
  }

  return (
    <div className='w-full h-max overflow-auto'>
      {
        buttonValue === 'Customer-List' ?
          <div>
            <div className='w-full p-4 bg-farmacy-light-blue rounded-lg overflow-auto'>
              <table className='w-full table-auto text-lg whitespace-nowrap'>
                <thead className='border-b-2 border-farmacy-light-gray text-white'>
                  <tr>
                    <th className='text-start p-2'>Customer ID</th>
                    <th className='text-start p-2'>Customer Name</th>
                    <th className='text-start p-2'>Email</th>
                    <th className='text-start p-2'>City</th>
                    <th className='text-start p-2'>Phone</th>
                    <th className='text-start p-2'>Status</th>
                  </tr>
                </thead>
                <tbody className='text-farmacy-light-gray'>
                  <tr className='hover:bg-farmacy-blue hover:text-white cursor-pointer'>
                    <td className='text-start p-2'>Customer ID</td>
                    <td className='text-start p-2'>Customer Name</td>
                    <td className='text-start p-2'>Email</td>
                    <td className='text-start p-2'>City</td>
                    <td className='text-start p-2'>Phone</td>
                    <td className='text-start p-2'>Status</td>
                  </tr>
                  <tr className='hover:bg-farmacy-blue hover:text-white cursor-pointer'>
                    <td className='text-start p-2'>Customer ID</td>
                    <td className='text-start p-2'>Customer Name</td>
                    <td className='text-start p-2'>Email</td>
                    <td className='text-start p-2'>City</td>
                    <td className='text-start p-2'>Phone</td>
                    <td className='text-start p-2'>Status</td>
                  </tr>
                </tbody>
              </table>
            </div>

            <button onClick={() => setButtonValue('Add')} className='block w-fit text-white bg-farmacy-light-blue border rounded-lg cursor-pointer mt-8 font-semibold hover:bg-farmacy-blue hover:border-farmacy-blue px-20 py-2' type="submit">Add Customer</button>

          </div>
          : null
      }
      {
        buttonValue === 'Add' ?
          <div className='w-full p-4 bg-farmacy-light-blue rounded-lg overflow-auto mt-4 text-white whitespace-nowrap'>
            <h1 className='font-semibold text-xl'>Add Customer :</h1>
            <form action="" className='mt-4 flex flex-col gap-8 w-full'>

              <ul className='flex flex-col gap-2'>
                <li className='flex flex-col sm:flex-row gap-5 sm:items-center'>
                  <label className='w-[150px]' htmlFor="customer-name">Customer Name:</label>
                  <input className='px-2 font-medium outline-none rounded-md bg-white text-farmacy-light-blue' type="text" name="customer-name" id="customer-name" />
                </li>
                <li className='flex flex-col sm:flex-row gap-5 sm:items-center'>
                  <label className='w-[150px]' htmlFor="email">Email:</label>
                  <input className='px-2 font-medium outline-none rounded-md bg-white text-farmacy-light-blue' type="text" name="email" id="email" />
                </li>
                <li className='flex flex-col sm:flex-row gap-5 sm:items-center'>
                  <label className='w-[150px]' htmlFor="city">City:</label>
                  <input className='px-2 font-medium outline-none rounded-md bg-white text-farmacy-light-blue' type="text" name="city" id="city" />
                </li>
                <li className='flex flex-col sm:flex-row gap-5 sm:items-center'>
                  <label className='w-[150px]' htmlFor="phone">Phone:</label>
                  <input className='px-2 font-medium outline-none rounded-md bg-white text-farmacy-light-blue' type="text" name="phone" id="phone" />
                </li>
                <li className='flex flex-col sm:flex-row gap-5 sm:items-center'>
                  <label className='w-[150px]' htmlFor="status">Status</label>
                  <input className='px-2 font-medium outline-none rounded-md bg-white text-farmacy-light-blue' type="text" name="status" id="status" />
                </li>
              </ul>

              <div className='mt-8 flex flex-col sm:flex-row gap-5'>
                <input onClick={onSubmit} className='block sm:w-[180px] text-white bg-farmacy-light-blue border rounded-lg cursor-pointer font-semibold hover:bg-farmacy-blue hover:border-farmacy-blue py-2' type="submit" value="Add" />
                <input onClick={() => setButtonValue('Customer-List')} className='block sm:w-[180px] text-white bg-farmacy-light-blue border rounded-lg cursor-pointer font-semibold hover:bg-farmacy-blue hover:border-farmacy-blue py-2' type="button" value="Cancel" />
              </div>
            </form>
          </div>
          : null
      }
    </div>
  )
}

export default Customer