import React, { useState } from 'react'

const VatTaxList = () => {

  const [buttonValue, setButtonValue] = useState('Vat/Tax List')

  const onSubmit = () => {
    // Enter your code On Submit
    setButtonValue('Vat/Tax List')
  }

  return (
    <div className='w-full h-max overflow-auto'>
      {
        buttonValue === 'Vat/Tax List' ?
          <div>
            <div className='w-full p-4 bg-farmacy-light-blue rounded-lg overflow-auto'>
              <table className='w-full table-auto text-lg whitespace-nowrap'>
                <thead className='border-b-2 border-farmacy-light-gray text-white'>
                  <tr>
                    <th className='text-start p-2'>Tax ID</th>
                    <th className='text-start p-2'>Tax Name</th>
                    <th className='text-start p-2'>Tax Percentage</th>
                    <th className='text-start p-2'>Type ID</th>
                  </tr>
                </thead>
                <tbody className='text-farmacy-light-gray'>
                  <tr className='hover:bg-farmacy-blue hover:text-white cursor-pointer'>
                    <td className='text-start p-2'>Tax ID</td>
                    <td className='text-start p-2'>Tax Name</td>
                    <td className='text-start p-2'>Tax Percentage</td>
                    <td className='text-start p-2'>Type ID</td>
                  </tr>
                  <tr className='hover:bg-farmacy-blue hover:text-white cursor-pointer'>
                    <td className='text-start p-2'>Tax ID</td>
                    <td className='text-start p-2'>Tax Name</td>
                    <td className='text-start p-2'>Tax Percentage</td>
                    <td className='text-start p-2'>Type ID</td>
                  </tr>
                </tbody>
              </table>
            </div>
            <button onClick={() => setButtonValue('Add')} className='block w-fit text-white bg-farmacy-light-blue border rounded-lg cursor-pointer mt-8 font-semibold hover:bg-farmacy-blue hover:border-farmacy-blue px-20 py-2' type="submit">Add Vat/Tax</button>
          </div> : null
      }

      {
        buttonValue === 'Add' ?
          <div className='w-full p-4 bg-farmacy-light-blue rounded-lg overflow-auto mt-4 text-white whitespace-nowrap'>
            <h1 className='font-semibold text-xl'>Add Vat/Tax :</h1>
            <form action="" className='mt-4 flex flex-col gap-8 w-full'>

              <ul className='flex flex-col gap-2'>
                <li className='flex flex-col sm:flex-row gap-5 sm:items-center'>
                  <label className='w-[150px]' htmlFor="taxname">Tax name:</label>
                  <input className='px-2 font-medium outline-none rounded-md bg-white text-farmacy-light-blue' type="text" name="taxname" id="taxname" />
                </li>
                <li className='flex flex-col sm:flex-row gap-5 sm:items-center'>
                  <label className='w-[150px]' htmlFor="taxpercentage">Tax Percentage:</label>
                  <input className='px-2 font-medium outline-none rounded-md bg-white text-farmacy-light-blue' type="text" name="taxpercentage" id="taxpercentage" />
                </li>
              </ul>

              <div className='mt-8 flex flex-col sm:flex-row gap-5'>
                <input onClick={onSubmit} className='block sm:w-[180px] text-white bg-farmacy-light-blue border rounded-lg cursor-pointer font-semibold hover:bg-farmacy-blue hover:border-farmacy-blue py-2' type="submit" value="Add" />
                <input onClick={() => setButtonValue('Vat/Tax List')} className='block sm:w-[180px] text-white bg-farmacy-light-blue border rounded-lg cursor-pointer font-semibold hover:bg-farmacy-blue hover:border-farmacy-blue py-2' type="button" value="Cancel" />
              </div>
            </form>
          </div>
          : null
      }
    </div>
  )
}

export default VatTaxList