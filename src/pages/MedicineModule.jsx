import React, { useState } from 'react'
import Medicine from '../components/medicineModule/medicine/Medicine'

const MedicineModule = () => {

    const [tableHeader, setTableHeader] = useState('Medicine')

    return (
        <div className='w-full h-full bg-farmacy-dark'>
            <h1 className='text-white text-4xl font-bold p-4'>Medicine Module</h1>

            <div className='w-full h-auto p-4 overflow-auto'>
                <ul className='text-farmacy-gray font-semibold text-2xl flex flex-row flex-nowrap gap-5 p-4 overflow-auto whitespace-nowrap'>
                    <li onClick={() => setTableHeader('Medicine')} className={tableHeader === 'Medicine' ? 'text-white' : 'cursor-pointer'}>Medicine</li>
                </ul>

                {/* Back Office Container */}
                {
                    tableHeader === 'Medicine' ?
                        <Medicine />
                        : null
                }
            </div>
        </div>
    )
}

export default MedicineModule