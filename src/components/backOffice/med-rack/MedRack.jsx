import React, { useState } from 'react'

const MedRack = () => {

  const [buttonValue, setButtonValue] = useState('Med-Rack')

  const onSubmit = () => {
    // Enter your code On Submit
    setButtonValue('Med-Rack')
  }

  return (
    <div className='w-full h-max overflow-auto'>
      {
        buttonValue === 'Med-Rack' ?
          <div>
            <div className='w-full p-4 bg-farmacy-light-blue rounded-lg overflow-auto'>
              <table className='w-full table-auto text-lg whitespace-nowrap'>
                <thead className='border-b-2 border-farmacy-light-gray text-white'>
                  <tr>
                    <th className='text-start p-2'>Rack Id</th>
                    <th className='text-start p-2'>Rack Location</th>
                    <th className='text-start p-2'>Type ID</th>
                  </tr>
                </thead>
                <tbody className='text-farmacy-light-gray'>
                  <tr className='hover:bg-farmacy-blue hover:text-white cursor-pointer'>
                    <td className='text-start p-2'>Rack Id</td>
                    <td className='text-start p-2'>Rack Location</td>
                    <td className='text-start p-2'>Type ID</td>
                  </tr>
                  <tr className='hover:bg-farmacy-blue hover:text-white cursor-pointer'>
                    <td className='text-start p-2'>Rack Id</td>
                    <td className='text-start p-2'>Rack Location</td>
                    <td className='text-start p-2'>Type ID</td>
                  </tr>
                </tbody>
              </table>
            </div>

            <button onClick={() => setButtonValue('Add')} className='block w-fit text-white bg-farmacy-light-blue border rounded-lg cursor-pointer mt-8 font-semibold hover:bg-farmacy-blue hover:border-farmacy-blue px-20 py-2' type="submit">Add Medicine Rack</button>
          </div> : null
      }

      {
        buttonValue === 'Add' ?
          <div className='w-full p-4 bg-farmacy-light-blue rounded-lg overflow-auto mt-4 text-white whitespace-nowrap'>
            <h1 className='font-semibold text-xl'>Add Medicine Rack :</h1>
            <form action="" className='mt-4 flex flex-col gap-8 w-full'>

              <ul className='flex flex-col gap-2'>
                <li className='flex flex-col sm:flex-row gap-5 sm:items-center'>
                  <label className='w-[150px]' htmlFor="rack_location">Rack Location:</label>
                  <input className='px-2 font-medium outline-none rounded-md bg-white text-farmacy-light-blue' type="text" name="rack_location" id="rack_location" />
                </li>
                <li className='flex flex-col sm:flex-row gap-5 sm:items-center'>
                  <label className='w-[150px]' htmlFor="type_id">Type Id:</label>
                  <input className='px-2 font-medium outline-none rounded-md bg-white text-farmacy-light-blue' type="text" name="type_id" id="type_id" />
                </li>
              </ul>

              <div className='mt-8 flex flex-col sm:flex-row gap-5'>
                <input onClick={onSubmit} className='block sm:w-[180px] text-white bg-farmacy-light-blue border rounded-lg cursor-pointer font-semibold hover:bg-farmacy-blue hover:border-farmacy-blue py-2' type="submit" value="Add" />
                <input onClick={() => setButtonValue('Med-Rack')} className='block sm:w-[180px] text-white bg-farmacy-light-blue border rounded-lg cursor-pointer font-semibold hover:bg-farmacy-blue hover:border-farmacy-blue py-2' type="button" value="Cancel" />
              </div>
            </form>
          </div>
          : null
      }
    </div>
  )
}

export default MedRack