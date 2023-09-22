import React, { useState } from 'react'

const BankAccount = () => {

  const [buttonValue, setButtonValue] = useState('BankAccount')

  const onSubmit = () => {
    // Enter your code On Submit
    setButtonValue('BankAccount')
  }

  return (
    <div className='w-full h-max overflow-auto'>
      {
        buttonValue === 'BankAccount' ?
          <div>
            <div className='w-full p-4 bg-farmacy-light-blue rounded-lg overflow-auto'>
              <table className='w-full table-auto text-lg whitespace-nowrap'>
                <thead className='border-b-2 border-farmacy-light-gray text-white'>
                  <tr>
                    <th className='text-start p-2'>Account ID</th>
                    <th className='text-start p-2'>Bank Name</th>
                    <th className='text-start p-2'>Account Number</th>
                    <th className='text-start p-2'>balance</th>
                    <th className='text-start p-2'>Phone</th>
                    <th className='text-start p-2'>Vat/Tax List</th>
                  </tr>
                </thead>
                <tbody className='text-farmacy-light-gray'>
                  <tr className='hover:bg-farmacy-blue hover:text-white cursor-pointer'>
                    <td className='text-start p-2'>Account ID</td>
                    <td className='text-start p-2'>Bank Name</td>
                    <td className='text-start p-2'>Account Number</td>
                    <td className='text-start p-2'>balance</td>
                    <td className='text-start p-2'>Phone</td>
                    <td className='text-start p-2'>Vat/Tax List</td>
                  </tr>
                  <tr className='hover:bg-farmacy-blue hover:text-white cursor-pointer'>
                    <td className='text-start p-2'>Account ID</td>
                    <td className='text-start p-2'>Bank Name</td>
                    <td className='text-start p-2'>Account Number</td>
                    <td className='text-start p-2'>balance</td>
                    <td className='text-start p-2'>Phone</td>
                    <td className='text-start p-2'>Vat/Tax List</td>
                  </tr>
                </tbody>
              </table>
            </div>
            <button onClick={() => setButtonValue('Add')} className='block w-fit text-white bg-farmacy-light-blue border rounded-lg cursor-pointer mt-8 font-semibold hover:bg-farmacy-blue hover:border-farmacy-blue px-20 py-2' type="submit">Add Bank Account</button>
          </div> : null
      }

      {
        buttonValue === 'Add' ?
          <div className='w-full p-4 bg-farmacy-light-blue rounded-lg overflow-auto mt-4 text-white whitespace-nowrap'>
            <h1 className='font-semibold text-xl'>Add Bank Account :</h1>
            <form action="" className='mt-4 flex flex-col gap-8 w-full'>

              <ul className='flex flex-col gap-2'>
                <li className='flex flex-col sm:flex-row gap-5 sm:items-center'>
                  <label className='w-[150px]' htmlFor="bankname">Bank Name:</label>
                  <input className='px-2 font-medium outline-none rounded-md bg-white text-farmacy-light-blue' type="text" name="bankname" id="bankname" />
                </li>

                <li className='flex flex-col sm:flex-row gap-5 sm:items-center'>
                  <label className='w-[150px]' htmlFor="accountnumber">Account number:</label>
                  <input className='px-2 font-medium outline-none rounded-md bg-white text-farmacy-light-blue' type="text" name="accountnumber" id="accountnumber" />
                </li>

                <li className='flex flex-col sm:flex-row gap-5 sm:items-center'>
                  <label className='w-[150px]' htmlFor="balance">Balance:</label>
                  <input className='px-2 font-medium outline-none rounded-md bg-white text-farmacy-light-blue' type="text" name="balance" id="balance" />
                </li>

                <li className='flex flex-col sm:flex-row gap-5 sm:items-center'>
                  <label className='w-[150px]' htmlFor="vat/tax_list">Vat/Tax List:</label>
                  <input className='px-2 font-medium outline-none rounded-md bg-white text-farmacy-light-blue' type="text" name="vat/tax_list" id="vat/tax_list" />
                </li>
              </ul>

              <div className='mt-8 flex flex-col sm:flex-row gap-5'>
                <input onClick={onSubmit} className='block sm:w-[180px] text-white bg-farmacy-light-blue border rounded-lg cursor-pointer font-semibold hover:bg-farmacy-blue hover:border-farmacy-blue py-2' type="submit" value="Add" />
                <input onClick={() => setButtonValue('BankAccount')} className='block sm:w-[180px] text-white bg-farmacy-light-blue border rounded-lg cursor-pointer font-semibold hover:bg-farmacy-blue hover:border-farmacy-blue py-2' type="button" value="Cancel" />
              </div>
            </form>
          </div>
          : null
      }
    </div>
  )
}

export default BankAccount