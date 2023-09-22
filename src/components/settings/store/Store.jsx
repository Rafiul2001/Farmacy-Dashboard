import React from 'react'

const Store = () => {
    return (
        <div className='w-full h-max overflow-auto'>
            <div className='w-full p-4 bg-farmacy-light-blue rounded-lg overflow-auto'>
                <table className='w-full table-auto text-lg whitespace-nowrap'>
                    <thead className='border-b-2 text-white'>
                        <tr>
                            <th className='text-start p-2'>Store Name</th>
                            <th className='text-start p-2'>Address</th>
                            <th className='text-start p-2'>City</th>
                            <th className='text-start p-2'>Postal Code</th>
                            <th className='text-start p-2'>Contact No.</th>
                        </tr>
                    </thead>
                    <tbody className='text-farmacy-light-gray'>
                        <tr className='hover:bg-farmacy-blue hover:text-white cursor-pointer'>
                            <td className='p-2'>Address</td>
                            <td className='p-2'>Store Name</td>
                            <td className='p-2'>City</td>
                            <td className='p-2'>Postal Code</td>
                            <td className='p-2'>Contact No.</td>
                        </tr>

                        <tr className='hover:bg-farmacy-blue hover:text-white cursor-pointer'>
                            <td className='p-2'>Address</td>
                            <td className='p-2'>Store Name</td>
                            <td className='p-2'>City</td>
                            <td className='p-2'>Postal Code</td>
                            <td className='p-2'>Contact No.</td>
                        </tr>

                        <tr className='hover:bg-farmacy-blue hover:text-white cursor-pointer'>
                            <td className='p-2'>Address</td>
                            <td className='p-2'>Store Name</td>
                            <td className='p-2'>City</td>
                            <td className='p-2'>Postal Code</td>
                            <td className='p-2'>Contact No.</td>
                        </tr>

                        <tr className='hover:bg-farmacy-blue hover:text-white cursor-pointer'>
                            <td className='p-2'>Address</td>
                            <td className='p-2'>Store Name</td>
                            <td className='p-2'>City</td>
                            <td className='p-2'>Postal Code</td>
                            <td className='p-2'>Contact No.</td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
    )
}

export default Store