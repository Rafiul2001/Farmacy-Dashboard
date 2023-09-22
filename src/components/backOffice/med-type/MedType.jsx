import React, { useState } from 'react'

const MedType = () => {

  const [buttonValue, setButtonValue] = useState('MedType-List')

  const onSubmit = () => {
    // Enter your code On Submit
    setButtonValue('MedType-List')
  }

  return (
    <div className='w-full h-max overflow-auto'>
      {
        buttonValue === 'MedType-List' ?
          <div>
            <div className='w-full p-4 bg-farmacy-light-blue rounded-lg overflow-auto'>
              <table className='w-full table-auto text-lg whitespace-nowrap'>
                <thead className='border-b-2 border-farmacy-light-gray text-white'>
                  <tr>
                    <th className='text-start p-2'>Medicine Type ID</th>
                    <th className='text-start p-2'>Medicine Type Name</th>
                    <th className='text-start p-2'>Generic ID</th>
                  </tr>
                </thead>
                <tbody className='text-farmacy-light-gray'>
                  <tr className='hover:bg-farmacy-blue hover:text-white cursor-pointer'>
                    <td className='text-start p-2'>Medicine Type ID</td>
                    <td className='text-start p-2'>Medicine Type Name</td>
                    <td className='text-start p-2'>Generic ID</td>
                  </tr>
                  <tr className='hover:bg-farmacy-blue hover:text-white cursor-pointer'>
                    <td className='text-start p-2'>Medicine Type ID</td>
                    <td className='text-start p-2'>Medicine Type Name</td>
                    <td className='text-start p-2'>Generic ID</td>
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
                  <label className='w-[150px]' htmlFor="medtype_name">Medicine Type Name:</label>
                  <input className='px-2 font-medium outline-none rounded-md bg-white text-farmacy-light-blue' type="text" name="medtype_name" id="medtype_name" />
                </li>
                <li className='flex flex-col sm:flex-row gap-5 sm:items-center'>
                  <label className='w-[150px]' htmlFor="generic_id">Generic ID:</label>
                  <input className='px-2 font-medium outline-none rounded-md bg-white text-farmacy-light-blue' type="text" name="generic_id" id="generic_id" />
                </li>
              </ul>

              <div className='mt-8 flex flex-col sm:flex-row gap-5'>
                <input onClick={onSubmit} className='block sm:w-[180px] text-white bg-farmacy-light-blue border rounded-lg cursor-pointer font-semibold hover:bg-farmacy-blue hover:border-farmacy-blue py-2' type="submit" value="Add" />
                <input onClick={() => setButtonValue('MedType-List')} className='block sm:w-[180px] text-white bg-farmacy-light-blue border rounded-lg cursor-pointer font-semibold hover:bg-farmacy-blue hover:border-farmacy-blue py-2' type="button" value="Cancel" />
              </div>
            </form>
          </div>
          : null
      }
    </div>
  )
}

export default MedType