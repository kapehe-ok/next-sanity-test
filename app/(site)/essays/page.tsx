"use client"
import React from 'react'

const Page = () => {
  return (
    <div className='mt-3 flex flex-col gap-3'>
      <div className=' text-gray-500'>
        <p className='text-xs mr-20'>
          If you are interested in reading my book reviews, which tend to be more frequent, please visit <a href='https://www.lee-up.org/' className='text-blue-500'>Lee UP</a>.
          Lee UP is the book club my friends and I funded while we were doing our undergraduate. Since then, I haven&apos;t stop posting the thoughts I have while reading a new book
          and I don&apos;t plan to do so. Appart from reading my reviews, I encourage you to take the time to read other kids&apos; reviews,
          I assure you that you will find some fascinating ideas.
        </p>
        <p className='text-xs mt-3'>
          If you wish to buy one of the books listed there, please use the discount provided. All purchases made through our affiliate program with <a href='' className='text-blue-500'>Librerías SBS</a> help the club raise funds for activities.
        </p>
      </div>
      <p className='text-3xl'>
        Recent essays
      </p>
      <p>
        Nothing to show yet..
      </p>
    </div>
  )
}

export default Page