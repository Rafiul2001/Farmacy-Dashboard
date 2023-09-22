import React, { useState } from 'react'
import Company from '../components/settings/company/Company'
import Store from '../components/settings/store/Store'

const Settings = () => {

    const [tableHeader, setTableHeader] = useState('Company')

    return (
        <div className='w-full h-auto bg-farmacy-dark'>
            <h1 className='text-white text-4xl font-bold p-4'>Settings</h1>

            <div className='w-full h-auto p-4 overflow-auto'>
                <ul className='text-farmacy-gray font-semibold text-2xl flex flex-row flex-nowrap gap-5 p-4 overflow-auto'>
                    <li onClick={() => setTableHeader('Company')} className={tableHeader === 'Company' ? 'text-white' : 'cursor-pointer'}>Company</li>
                    <li onClick={() => setTableHeader('Store')} className={tableHeader === 'Store' ? 'text-white' : 'cursor-pointer'}>Store</li>
                </ul>
            
                {/* Settings Container */}
                {
                    tableHeader === 'Company' ?
                        <Company />: null
                }
                {
                    tableHeader === 'Store' ?
                        <Store />: null
                }
            </div>
        </div>
    )
}

export default Settings