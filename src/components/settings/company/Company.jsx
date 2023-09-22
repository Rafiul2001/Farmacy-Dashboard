import React, { useState } from 'react'

const Company = () => {

    const [buttonValue, setButtonValue] = useState('')

    return (
        <div className='w-full h-max overflow-auto'>


            {
                buttonValue === 'Update' ?
                    <form action="" className='rounded-lg flex flex-col w-full bg-farmacy-light-blue p-4 mt-4'>
                        <label className='text-white py-2 text-lg' htmlFor="username">Username</label>
                        <input type="text" name="username" id="username" />

                        <label className='text-white py-2 mt-8 text-lg' htmlFor="email">Email</label>
                        <input type="email" name="email" id="email" />

                        <div className='flex flex-row gap-5'>
                            <input className='w-48 border mt-8 rounded-lg py-2 text-white font-semibold cursor-pointer hover:bg-farmacy-blue hover:border-farmacy-blue' type="submit" value="Save" />

                            <input onClick={()=> setButtonValue('')} className='w-48 border mt-8 rounded-lg py-2 text-white font-semibold cursor-pointer hover:bg-farmacy-blue hover:border-farmacy-blue' type="button" value="Cancel" />
                        </div>

                    </form>
                    :
                    <div className='w-full'>
                        <div className='w-full bg-farmacy-light-blue text-white flex flex-col md:flex-row rounded-lg overflow-auto'>
                            <div className='flex-1 max-w-[320px] p-4'>
                                <img className='w-full h-auto' src="https://dfstudio-d420.kxcdn.com/wordpress/wp-content/uploads/2019/06/digital_camera_photo-1080x675.jpg" alt="img" />
                                <p className='text-center text-white py-2 font-semibold'>PMY Pharmacy</p>
                            </div>
                            <ul className='flex-1 p-4 flex flex-col gap-3 text-xl font-semibold'>
                                <li>Username: PMY Pharmacy</li>
                                <li>Email: pmypharmacy@gmail.com</li>
                                <li>Status: Active</li>
                            </ul>
                        </div>


                        <button onClick={() => setButtonValue('Update')} className='block w-fit text-white bg-farmacy-light-blue border rounded-lg cursor-pointer mt-8 font-semibold hover:bg-farmacy-blue hover:border-farmacy-blue px-20 py-2'>Update</button>
                    </div>
            }
        </div>
    )
}

export default Company