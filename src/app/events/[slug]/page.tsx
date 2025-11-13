import React, { use, Suspense } from 'react'
import { events } from '@/lib/events'
import { notFound } from 'next/navigation'

interface PageProps {
  params: Promise<{
    slug: string
  }>
}

function EventContent({ params }: PageProps) {
  const { slug } = use(params)
  const event = events.find(e => e.slug === slug)

  if (!event) {
    notFound()
  }

  return (
    <div className='max-w-4xl mx-auto'>
      <div className='mb-8'>
        <img 
          src={event.image} 
          alt={event.title} 
          className='w-full h-96 object-cover rounded-lg'
        />
      </div>
      
      <h1 className='text-4xl font-bold mb-4'>{event.title}</h1>
      
      <div className='space-y-4 text-lg'>
        <div className='flex items-center gap-2'>
          <span className='font-semibold'>📍 Location:</span>
          <span>{event.location}</span>
        </div>
        
        <div className='flex items-center gap-2'>
          <span className='font-semibold'>📅 Date:</span>
          <span>{event.date}</span>
        </div>
        
        <div className='flex items-center gap-2'>
          <span className='font-semibold'>🕐 Time:</span>
          <span>{event.time}</span>
        </div>
      </div>

      <div className='mt-8'>
        <h2 className='text-2xl font-bold mb-4'>About this event</h2>
        <p className='text-gray-600'>
          Join us for an amazing {event.title} experience in {event.location}. 
          This event will bring together tech enthusiasts, developers, and industry leaders.
        </p>
      </div>

      <div className='mt-8'>
        <button className='bg-blue-600 text-white px-8 py-3 rounded-lg hover:bg-blue-700 transition'>
          Register Now
        </button>
      </div>
    </div>
  )
}

const EventDetailPage = ({ params }: PageProps) => {
  return (
    <Suspense fallback={<div className='max-w-4xl mx-auto'>Loading...</div>}>
      <EventContent params={params} />
    </Suspense>
  )
}

export default EventDetailPage
