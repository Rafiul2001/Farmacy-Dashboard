import React, { useState } from 'react'
import Sales from '../components/salesAndReturns/sales/Sales'
import Returns from '../components/salesAndReturns/returns/Returns'

const SalesAndReturns = () => {

    const [tableHeader, setTableHeader] = useState('Sales')

    return (
        <div className='w-full h-full bg-farmacy-dark'>
            <h1 className='text-white text-4xl font-bold p-4'>Sales and Returns</h1>

            <div className='w-full h-auto p-4 overflow-auto'>
                <ul className='text-farmacy-gray font-semibold text-2xl flex flex-row flex-nowrap gap-5 p-4 overflow-auto whitespace-nowrap'>
                    <li onClick={() => setTableHeader('Sales')} className={tableHeader === 'Sales' ? 'text-white' : 'cursor-pointer'}>Sales</li>
                    <li onClick={() => setTableHeader('Returns')} className={tableHeader === 'Returns' ? 'text-white' : 'cursor-pointer'}>Returns</li>
                </ul>

                {/* Back Office Container */}
                {
                    tableHeader === 'Sales' ?
                        <Sales />
                        : null
                }
                {
                    tableHeader === 'Returns' ?
                        <Returns />
                        : null
                }
            </div>
        </div>
    )
}

export default SalesAndReturns