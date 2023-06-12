import React from 'react'

function ImageLinkForm() {
  return (
    <div>
         <p className="text-center text-xl font-semibold">This is the magic!!!</p>
         <div className="backG rounded-md shadow-sm p-8  mt-4 mx-96">
            <div className="display ml-3 flex justify-center w-[400px]">
                <input type="text" className='w-[70%] p-1'/>
                <button className='w-[30%] bg-violet-600 font-thin text-lg text-white hover:scale-105' >Detect</button>
            </div>
         </div>
        
    </div>
  )
}

export default ImageLinkForm