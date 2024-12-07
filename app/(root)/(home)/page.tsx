import Image from 'next/image'
import React from 'react'

const HomePage = () => {
  const now = new Date();
  const time = now.toLocaleTimeString('en-US', { hour: '2-digit', minute: '2-digit' });
  const date = (new Intl.DateTimeFormat('en-US', { dateStyle: 'full' })).format(now);
  return (
    <div className='flex flex-col size-full text-white'>
      <div className='h-[303px] w-full rounded-2xl bg-hero bg-cover flex flex-col justify-between'>
        <div className='glassmorphism2 w-[300px] flex justify-center items-center m-2 rounded-xl p-2'>
          <p>Upcoming Meeting at 12:30 PM</p>
        </div>
        <div className='flex flex-col h-[150px] w-[300px] m-4 p-2 rounded-lg justify-center items-start'>
            <h1 className='text-6xl'>{time}</h1>
            <p className='text-xl'>{date}</p>
        </div>
      </div>
    </div>
  )
}

export default HomePage
