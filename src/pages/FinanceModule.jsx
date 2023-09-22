import React, { useState } from 'react'
import Finance from '../components/financeModule/finance/Finance'

const FinanceModule = () => {

    const [tableHeader, setTableHeader] = useState('Finance')

    return (
        <div className='w-full h-full bg-farmacy-dark'>
            <h1 className='text-white text-4xl font-bold p-4'>Finance Module</h1>

            <div className='w-full h-auto p-4 overflow-auto'>
                <ul className='text-farmacy-gray font-semibold text-2xl flex flex-row flex-nowrap gap-5 p-4 overflow-auto whitespace-nowrap'>
                    <li onClick={() => setTableHeader('Finance')} className={tableHeader === 'Finance' ? 'text-white' : 'cursor-pointer'}>Finance</li>
                </ul>

                {/* Back Office Container */}
                {
                    tableHeader === 'Finance' ?
                        <Finance />
                        : null
                }
            </div>
        </div>
    )
}

export default FinanceModule