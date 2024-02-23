import Rating from '@mui/material/Rating'
import StarIcon from '@mui/icons-material/Star'
import FmdGoodIcon from '@mui/icons-material/FmdGood'
import LocalFireDepartmentIcon from '@mui/icons-material/LocalFireDepartment'
import CheckIcon from '@mui/icons-material/Check'
import React from 'react'

export default function CardItem(data: any) {
  return (
    <>
      <div className='mx-8 mt-2'>
        <div className='px-8 py-6 border border-solid border-slate-200 rounded-md'>
          <div className='h-16 flex justify-between pb-3 items-start'>
            <img
              src={`https://d126ytvel6227q.cloudfront.net/logos/${data?.data?.slug}.jpg`}
              alt={data?.data?.name}
              className='h-full'
            />
            <a
              href={data?.data?.website}
              className='inline-block bg-blue-500 hover:bg-blue-700 text-white font-bold px-14 py-4 text-lg leading-none'
            >
              Get Quote
            </a>
          </div>
          <div className='pb-3'>
            <h2 className='font-extrabold text-lg pb-2'>{data?.data?.name}</h2>
            <div className='flex'>
              <Rating
                name='text-feedback'
                value={data.data.review_score}
                readOnly
                precision={0.5}
                emptyIcon={
                  <StarIcon style={{ opacity: 0.55 }} fontSize='inherit' />
                }
              />
              <p className='font-extrabold'>{data?.data?.review_score}/5</p>
              <p className='text-gray-500 px-2'>|</p>
              <p className='text-gray-500'>{data?.data?.address}</p>
            </div>
          </div>
          <div className='pb-5 flex'>
            {data?.data?.review_count >= 100 ? (
              <div className='flex mr-2'>
                <LocalFireDepartmentIcon style={{ fill: '#1F8B5C' }} />
                <p>Popular</p>
              </div>
            ) : null}
            {data?.data?.distance < 5 ? (
              <div className='flex'>
                <FmdGoodIcon style={{ fill: '#1F8B5C' }} />
                <p>Nearby</p>
              </div>
            ) : null}
          </div>
          <div className='pb-5'>
            <h3 className='uppercase text-gray-500 font-bold'>
              Services Offered
            </h3>
            <ul className='inline'>
              {data?.data?.services?.map((service: any, index: any) => (
                <li key={index} className='inline-block pr-3 capitalize'>
                  <CheckIcon style={{ fill: '#3BC37D' }} fontSize='medium' />
                  {service}
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h3 className='uppercase pb-2 text-gray-500 font-bold'>
              Experiences
            </h3>
            <div className='flex-col bg-gray-100 p-4'>
              <p className='italic'>
                “We could not be happier with our landscaping services. Lorem
                ipsum dolor sit amet consectetur. Dictum fusce dignissim non in
                magna id. Elementum enim leo aliquam gravida phasellus eget
                nulla.”
              </p>
              <p className='text-right'>- Shane D.</p>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
