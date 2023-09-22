import React from 'react'

const Finance = () => {
    return (
        <div className='w-full h-max overflow-auto'>
            <div className='w-full p-4 bg-farmacy-light-blue rounded-lg overflow-auto'>
                <table className='w-full table-auto text-lg whitespace-nowrap'>
                    <thead className='border-b-2 text-white'>
                        <tr>
                            <th className='text-start p-2'>Sale Date</th>
                            <th className='text-start p-2'>Income</th>
                            <th className='text-start p-2'>Expense</th>
                            <th className='text-start p-2'>NetProfit</th>
                        </tr>
                    </thead>
                    <tbody className='text-farmacy-light-gray'>
                        <tr className='hover:bg-farmacy-blue hover:text-white cursor-pointer'>
                            <td className='text-start p-2'>Sale Date</td>
                            <td className='text-start p-2'>Income</td>
                            <td className='text-start p-2'>Expense</td>
                            <td className='text-start p-2'>NetProfit</td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
    )
}

export default Finance