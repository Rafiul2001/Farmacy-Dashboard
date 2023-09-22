import React, { useState } from 'react'
import Register from '../components/usersAndSecurity/register/Register'

const UsersAndSecurity = () => {

    const [tableHeader, setTableHeader] = useState('Register')

    return (
        <div className='w-full h-full bg-farmacy-dark'>
            <h1 className='text-white text-4xl font-bold p-4'>Users And Security</h1>

            <div className='w-full h-auto p-4 overflow-auto'>
                <ul className='text-farmacy-gray font-semibold text-2xl flex flex-row flex-nowrap gap-5 p-4 overflow-auto whitespace-nowrap'>
                    <li onClick={() => setTableHeader('Register')} className={tableHeader === 'Register' ? 'text-white' : 'cursor-pointer'}>Register</li>
                </ul>

                {/* Back Office Container */}
                {
                    tableHeader === 'Register' ?
                        <Register />
                        : null
                }
            </div>
        </div>
    )
}

export default UsersAndSecurity