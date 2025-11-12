import React from 'react'
import ExploreBtn from '@/components/ExploreBtn';
import EventCard from '@/components/EventCard';
import { events } from '@/lib/events';

const Home = () => {
  return (
    <section>
      <h1 className='text-center'>The Hub for every Tech <br/> Event that you can't miss.</h1>
      <p className='text-center mt-5'>Hackathons, Conferences, Meetups, and More, All in One Place.</p>
      <ExploreBtn />

      <div className='mt-20 space-y-7'>

        <h3>Featured Events</h3>

        <ul className='events'>
          {events.map((event, index) => (
            <li key={index}>
                <EventCard {...event} />
            </li>
          ))} 

        </ul>
        
      </div>
    </section>
  )
}

export default Home
 