import React from 'react'

const Register = () => {
    return (
        <div className='w-full h-max overflow-auto'>
            <div className='w-full p-4 bg-farmacy-light-blue rounded-lg overflow-auto'>
                <table className='w-full table-auto text-lg whitespace-nowrap'>
                    <thead className='border-b-2 text-white'>
                        <tr>
                            <th className='text-start p-2'>User ID</th>
                            <th className='text-start p-2'>Username</th>
                            <th className='text-start p-2'>Password</th>
                            <th className='text-start p-2'>Email</th>
                            <th className='text-start p-2'>isAdmin</th>
                        </tr>
                    </thead>
                    <tbody className='text-farmacy-light-gray'>
                        <tr className='hover:bg-farmacy-blue hover:text-white cursor-pointer'>
                            <td className='text-start p-2'>User ID</td>
                            <td className='text-start p-2'>Username</td>
                            <td className='text-start p-2'>Password</td>
                            <td className='text-start p-2'>Email</td>
                            <td className='text-start p-2'>isAdmin</td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
    )
}

export default Register