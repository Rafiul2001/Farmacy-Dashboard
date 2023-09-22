import React from 'react'

const Sales = () => {
    return (
        <div className='w-full h-max overflow-auto'>
            <div className='w-full p-4 bg-farmacy-light-blue rounded-lg overflow-auto'>
                <table className='w-full table-auto text-lg whitespace-nowrap'>
                    <thead className='border-b-2 text-white'>
                        <tr>
                            <th className='text-start p-2'>Sale ID</th>
                            <th className='text-start p-2'>Medicine ID</th>
                            <th className='text-start p-2'>User ID</th>
                            <th className='text-start p-2'>Sale Date</th>
                            <th className='text-start p-2'>Quantity Sold</th>
                            <th className='text-start p-2'>Total Amount</th>
                        </tr>
                    </thead>
                    <tbody className='text-farmacy-light-gray'>
                        <tr className='hover:bg-farmacy-blue hover:text-white cursor-pointer'>
                            <td className='text-start p-2'>Sale ID</td>
                            <td className='text-start p-2'>Medicine ID</td>
                            <td className='text-start p-2'>User ID</td>
                            <td className='text-start p-2'>Sale Date</td>
                            <td className='text-start p-2'>Quantity Sold</td>
                            <td className='text-start p-2'>Total Amount</td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
    )
}

export default Sales