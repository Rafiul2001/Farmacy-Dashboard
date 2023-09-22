import React, { useState } from 'react'

const Manufacture = () => {

  const [buttonValue, setButtonValue] = useState('Manufacture')

  const onSubmit = () => {
    // Enter your code On Submit
    setButtonValue('Manufacture')
  }

  return (
    <div className='w-full h-max overflow-auto'>
      {
        buttonValue === 'Manufacture' ?
          <div>
            <div className='w-full p-4 bg-farmacy-light-blue rounded-lg flex flex-col gap-5 overflow-auto whitespace-nowrap'>
              {/* Manucture List */}
              <div className='flex gap-8 items-center'>
                <div className='max-w-[150px] min-w-[100px] min-h-[100px] max-h-[150px] overflow-hidden flex flex-row items-center justify-center'>
                  <img className='w-full h-auto' src="https://statusneo.com/wp-content/uploads/2023/02/MicrosoftTeams-image551ad57e01403f080a9df51975ac40b6efba82553c323a742b42b1c71c1e45f1.jpg" alt="img" />
                </div>
                <div className='text-white font-medium text-lg'>
                  <h3 className=''>Manufacture Name</h3>
                  <p>Manufacture Status</p>
                  <p>Manufacture Rank</p>
                </div>
              </div>

              <div className='flex gap-8 items-center'>
                <div className='max-w-[150px] min-w-[100px] min-h-[100px] max-h-[150px] overflow-hidden flex flex-row items-center justify-center'>
                  <img className='w-full h-auto' src="https://statusneo.com/wp-content/uploads/2023/02/MicrosoftTeams-image551ad57e01403f080a9df51975ac40b6efba82553c323a742b42b1c71c1e45f1.jpg" alt="img" />
                </div>
                <div className='text-white font-medium text-lg'>
                  <h3 className=''>Manufacture Name</h3>
                  <p>Manufacture Status</p>
                  <p>Manufacture Rank</p>
                </div>
              </div>
            </div>
            <button onClick={() => setButtonValue('Add')} className='block w-fit text-white bg-farmacy-light-blue border rounded-lg cursor-pointer mt-8 font-semibold hover:bg-farmacy-blue hover:border-farmacy-blue px-20 py-2' type="submit">Add Medicine Company</button>
          </div> : null
      }

      {
        buttonValue === 'Add' ?
          <div className='w-full p-4 bg-farmacy-light-blue rounded-lg overflow-auto mt-4 text-white whitespace-nowrap'>
            <h1 className='font-semibold text-xl'>Add Medicine Company :</h1>
            <form action="" className='mt-4 flex flex-col gap-8 w-full'>

              <ul className='flex flex-col gap-2'>
                <li className='flex flex-col sm:flex-row gap-5 sm:items-center'>
                  <label className='w-[150px]' htmlFor="manu_name">Manufacture Name:</label>
                  <input className='px-2 font-medium outline-none rounded-md bg-white text-farmacy-light-blue' type="text" name="manu_name" id="manu_name" />
                </li>
                <li className='flex flex-col sm:flex-row gap-5 sm:items-center'>
                  <label className='w-[150px]' htmlFor="manu_img">Manufacture image:</label>
                  <input className='px-2 font-medium outline-none rounded-md bg-white text-farmacy-light-blue' type="text" name="manu_img" id="manu_img" />
                </li>
                <li className='flex flex-col sm:flex-row gap-5 sm:items-center'>
                  <label className='w-[150px]' htmlFor="manu_status">Manufacture Status:</label>
                  <input className='px-2 font-medium outline-none rounded-md bg-white text-farmacy-light-blue' type="text" name="manu_status" id="manu_status" />
                </li>
                <li className='flex flex-col sm:flex-row gap-5 sm:items-center'>
                  <label className='w-[150px]' htmlFor="manu_rank">Manufacture Rank:</label>
                  <input className='px-2 font-medium outline-none rounded-md bg-white text-farmacy-light-blue' type="text" name="manu_rank" id="manu_rank" />
                </li>
              </ul>

              <div className='mt-8 flex flex-col sm:flex-row gap-5'>
                <input onClick={onSubmit} className='block sm:w-[180px] text-white bg-farmacy-light-blue border rounded-lg cursor-pointer font-semibold hover:bg-farmacy-blue hover:border-farmacy-blue py-2' type="submit" value="Add" />
                <input onClick={() => setButtonValue('Manufacture')} className='block sm:w-[180px] text-white bg-farmacy-light-blue border rounded-lg cursor-pointer font-semibold hover:bg-farmacy-blue hover:border-farmacy-blue py-2' type="button" value="Cancel" />
              </div>
            </form>
          </div>
          : null
      }

    </div>
  )
}

export default Manufacture