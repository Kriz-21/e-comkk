import React from 'react'

const NewsLetterBox = () => {
  const onSubmitHandler = (event)=> {
    event.preventDefault();
  }
  return (
    <div className="text-center">
        <p className='text-2xl font-medium text-gray-800'>Subcribe now & get 20% offer</p>
        <p className="text-gray-500 mt-3">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni, exercitationem?
        </p>
        <form onClick={onSubmitHandler} className='w-full sm:1/2 flex items-center gap-3 mx-autp my-6 border pl-3'>
          <input type="email" className='w-full sm:flex-1 outline-none' placeholder='Enter Your emil' required/>
          <button type='submit' className='bg-black text-white text-xs px-10 py-4' >SUBCRIBE</button>
        </form>
    </div>
  )
}

export default NewsLetterBox
