import React, { useState } from 'react'
import Supplier from '../components/backOffice/supplier/Supplier'
import Customer from '../components/backOffice/customer/Customer'
import Manufacture from '../components/backOffice/manufacture/Manufacture'
import GenericList from '../components/backOffice/generic-list/GenericList'
import MedType from '../components/backOffice/med-type/MedType'
import MedRack from '../components/backOffice/med-rack/MedRack'
import BankAccount from '../components/backOffice/bank-account/BankAccount'
import VatTaxList from '../components/backOffice/vat-tax-list/VatTaxList'

const BackOffice = () => {

    const [tableHeader, setTableHeader] = useState('Supplier')

    return (
        <div className='w-full h-auto'>
            <h1 className='text-white text-4xl font-bold p-4'>Back Office</h1>

            <div className='w-full h-auto p-4 overflow-auto'>
                <ul className='text-farmacy-gray font-semibold text-2xl flex flex-row flex-nowrap gap-5 p-4 overflow-auto whitespace-nowrap'>
                    <li onClick={() => setTableHeader('Supplier')} className={tableHeader === 'Supplier' ? 'text-white' : 'cursor-pointer'}>Supplier</li>
                    <li onClick={() => setTableHeader('Customer')} className={tableHeader === 'Customer' ? 'text-white' : 'cursor-pointer'}>Customer</li>
                    <li onClick={() => setTableHeader('Manufacture')} className={tableHeader === 'Manufacture' ? 'text-white' : 'cursor-pointer'}>Manufacture</li>
                    <li onClick={() => setTableHeader('Generic List')} className={tableHeader === 'Generic List' ? 'text-white' : 'cursor-pointer'}>Generic List</li>
                    <li onClick={() => setTableHeader('Med Type')} className={tableHeader === 'Med Type' ? 'text-white' : 'cursor-pointer'}>Med Type</li>
                    <li onClick={() => setTableHeader('Med Rack')} className={tableHeader === 'Med Rack' ? 'text-white' : 'cursor-pointer'}>Med Rack</li>
                    <li onClick={() => setTableHeader('Bank Account')} className={tableHeader === 'Bank Account' ? 'text-white' : 'cursor-pointer'}>Bank Account</li>
                    <li onClick={() => setTableHeader('Vat/Tax List')} className={tableHeader === 'Vat/Tax List' ? 'text-white' : 'cursor-pointer'}>Vat/Tax List</li>
                </ul>

                {/* Back Office Container */}
                {
                    tableHeader === 'Supplier' ?
                        <Supplier />
                        : null
                }
                {
                    tableHeader === 'Customer' ?
                        <Customer />
                        : null
                }
                {
                    tableHeader === 'Manufacture' ?
                        <Manufacture />
                        : null
                }
                {
                    tableHeader === 'Generic List' ?
                        <GenericList />
                        : null
                }
                {
                    tableHeader === 'Med Type' ?
                        <MedType />
                        : null
                }
                {
                    tableHeader === 'Med Rack' ?
                        <MedRack />
                        : null
                }
                {
                    tableHeader === 'Bank Account' ?
                        <BankAccount />
                        : null
                }
                {
                    tableHeader === 'Vat/Tax List' ?
                        <VatTaxList />
                        : null
                }
            </div>
        </div>
    )
}

export default BackOffice